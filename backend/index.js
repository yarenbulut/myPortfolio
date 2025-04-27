import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { body, validationResult } from 'express-validator';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// CORS configuration
app.use(cors({
  origin: ['https://www.yarenbulut.com', 'https://yarenbulut.com', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept', 'Origin'],
  credentials: false,
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

// Enable pre-flight requests for all routes
app.options('*', cors());

app.use(express.json());
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // limit each IP to 5 requests per windowMs
});

app.use('/api/contact', limiter);

// Input validation middleware
const validateContact = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email format')
    .normalizeEmail(),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10 and 1000 characters')
];

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.get('/api/contact', (req, res) => {
  res.json({ message: 'Contact API endpoint is working. Please use POST method to send messages.' });
});

app.post('/api/contact', validateContact, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false,
        errors: errors.array()
      });
    }

    const { name, email, message } = req.body;

    // Log the attempt and environment check
    console.log('Environment variables check:', {
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPass: !!process.env.EMAIL_PASS,
      emailUserLength: process.env.EMAIL_USER?.length,
      emailPassLength: process.env.EMAIL_PASS?.length
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // upgrade later with STARTTLS
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      logger: true,
      debug: true,
      tls: {
        rejectUnauthorized: true
      }
    });

    // Log transporter configuration
    console.log('Transporter configuration:', {
      host: transporter.options.host,
      port: transporter.options.port,
      secure: transporter.options.secure,
      auth: {
        user: transporter.options.auth.user,
        hasPass: !!transporter.options.auth.pass
      }
    });

    // Verify SMTP connection configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP Verification Error:', {
        name: verifyError.name,
        message: verifyError.message,
        code: verifyError.code,
        command: verifyError.command,
        stack: verifyError.stack
      });
      return res.status(500).json({
        success: false,
        message: 'Email service configuration error',
        error: process.env.NODE_ENV === 'development' ? verifyError.message : undefined
      });
    }

    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px;">
  <h2>New Contact Form Message</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Message:</strong></p>
  <p style="white-space: pre-wrap;">${message}</p>
</div>
      `
    };

    console.log('Attempting to send email with options:', mailOptions);

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    res.status(200).json({ 
      success: true,
      message: 'Message sent successfully!',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('Error in contact endpoint:', {
      name: error.name,
      message: error.message,
      code: error.code,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });

    // Send a more specific error message
    res.status(500).json({ 
      success: false,
      message: 'Failed to send message. Email service error.',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log('Environment:', process.env.NODE_ENV || 'development');
}); 