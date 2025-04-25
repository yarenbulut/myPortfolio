const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and enabling CORS
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept', 'Origin'],
  optionsSuccessStatus: 200
}));

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'Backend is running' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  console.log('Received contact form submission:', req.body);
  
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    console.log('Missing required fields:', { name, email, message });
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  try {
    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for your message',
      html: `
        <h3>Thank you for reaching out!</h3>
        <p>Hi ${name},</p>
        <p>I have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Yaren Bulut</p>
      `
    });

    console.log('Emails sent successfully');
    res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message',
      error: error.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
  console.log('Email configuration:', {
    user: process.env.EMAIL_USER,
    configured: !!process.env.EMAIL_USER && !!process.env.EMAIL_PASS
  });
}); 