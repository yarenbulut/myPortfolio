const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// CORS configuration
app.use(cors({
  origin: ['http://localhost:3001', 'http://192.168.1.162:3001'],
  methods: ['POST'],
  credentials: true
}));

app.use(express.json());

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Test email configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  console.log('Received contact form submission:', req.body);
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: 'Missing required fields',
      received: { name, email, message }
    });
  }

  try {
    // Send email to your address
    const adminMail = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // Send confirmation to sender
    const userMail = await transporter.sendMail({
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

    console.log('Emails sent successfully:', {
      adminMailId: adminMail.messageId,
      userMailId: userMail.messageId
    });

    res.status(200).json({ 
      message: 'Message sent successfully',
      messageIds: {
        admin: adminMail.messageId,
        user: userMail.messageId
      }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Failed to send message',
      error: error.message
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Email configuration:', {
    user: process.env.EMAIL_USER,
    contactEmail: process.env.CONTACT_EMAIL
  });
}); 