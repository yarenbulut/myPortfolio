import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// CORS configuration
app.use(cors({
  origin: ['https://www.yarenbulut.com', 'https://yarenbulut.com', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept', 'Origin'],
  credentials: false
}));

app.use(express.json());

// Basic health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Simple test endpoint
app.get('/api/contact', (req, res) => {
  res.json({ message: 'Contact API endpoint is working' });
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Log the received data
    console.log('Received contact form data:', { name, email, message });

    // Verify environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email configuration:', {
        hasEmailUser: !!process.env.EMAIL_USER,
        hasEmailPass: !!process.env.EMAIL_PASS
      });
      throw new Error('Email configuration is missing');
    }

    // Create transporter with detailed logging
    console.log('Creating email transporter with:', {
      user: process.env.EMAIL_USER,
      passLength: process.env.EMAIL_PASS?.length
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      debug: true,
      logger: true
    });

    // Test the connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP Verification Error:', verifyError);
      throw new Error('Failed to connect to email server');
    }

    // Prepare email
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message from ${name}`,
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

    // Send email with error handling
    try {
      console.log('Attempting to send email...');
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);

      res.status(200).json({ 
        success: true,
        message: 'Message sent successfully!',
        messageId: info.messageId
      });
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      throw new Error('Failed to send email');
    }
    
  } catch (error) {
    console.error('Error in contact endpoint:', error);
    res.status(500).json({ 
      success: false,
      message: error.message || 'Server error, please try again'
    });
  }
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Global error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log('Environment:', process.env.NODE_ENV || 'development');
  console.log('Email configuration:', {
    hasUser: !!process.env.EMAIL_USER,
    hasPass: !!process.env.EMAIL_PASS
  });
}); 