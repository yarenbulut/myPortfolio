import express from 'express';
import cors from 'cors';
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

// Simplified contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Log the received data
    console.log('Received contact form data:', { name, email, message });
    
    // For now, just return success
    res.status(200).json({ 
      success: true,
      message: 'Message received (test mode)',
      data: { name, email, message }
    });
    
  } catch (error) {
    console.error('Error in contact endpoint:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error, please try again'
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
}); 