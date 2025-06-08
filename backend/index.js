import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// CORS configuration
const corsOptions = {
  origin: [
    'https://yarenbulut.com',
    'https://www.yarenbulut.com',
    'https://my-portfolio-pjy35z657-yarenbuluts-projects.vercel.app'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept', 'Origin'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Apply CORS middleware
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'Server is running' });
});

// GET /api/contact endpointi (test için)
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
    console.log('Creating email transporter...');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      logger: true,
      debug: true // include SMTP traffic in the logs
    });

    // Test the connection
    try {
      console.log('Verifying SMTP connection...', {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        user: process.env.EMAIL_USER ? process.env.EMAIL_USER.substring(0, 5) + '...' : 'undefined',
        hasPass: !!process.env.EMAIL_PASS,
        passLength: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0
      });
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP Verification Error:', {
        name: verifyError.name,
        message: verifyError.message,
        code: verifyError.code,
        command: verifyError.command,
        response: verifyError.response
      });
      throw new Error(`Failed to connect to email server: ${verifyError.message}`);
    }

    // Prepare email for admin notification
    const adminMailOptions = {
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

    // Prepare auto-reply email for sender
    const autoReplyOptions = {
      from: `"Yaren Bulut" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for your message`,
      text: `
Dear ${name},

Thank you for contacting me. I have received your message and will get back to you as soon as possible.

Best regards,
Yaren Bulut
      `,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px;">
  <p>Dear ${name},</p>
  <p>Thank you for contacting me. I have received your message and will get back to you as soon as possible.</p>
  <br>
  <p>Best regards,</p>
  <p>Yaren Bulut</p>
</div>
      `
    };

    // Send emails with error handling
    try {
      console.log('Attempting to send emails...');
      
      // Send notification to admin
      const adminInfo = await transporter.sendMail(adminMailOptions);
      console.log('Admin notification sent successfully:', adminInfo.messageId);
      
      // Send auto-reply to sender
      const replyInfo = await transporter.sendMail(autoReplyOptions);
      console.log('Auto-reply sent successfully:', replyInfo.messageId);

      res.status(200).json({ 
        success: true,
        message: 'Messages sent successfully!',
        adminMessageId: adminInfo.messageId,
        replyMessageId: replyInfo.messageId
      });
    } catch (emailError) {
      console.error('Failed to send email:', {
        name: emailError.name,
        message: emailError.message,
        code: emailError.code
      });
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