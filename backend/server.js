// Load environment variables
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Import routes
const contactRoute = require('./routes/contact');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS configuration
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true  // 👈 YEH ADD KARO
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoute);

// Root route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Portfolio backend server is running!',
    endpoints: {
      contact: 'POST /api/contact'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on PORT: ${PORT}`);
  console.log(`📧 Nodemailer configured for email: ${process.env.EMAIL_USER}`);
});