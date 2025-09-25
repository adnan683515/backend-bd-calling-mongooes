// server.js

import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import app from './app.js';

// Environment variables
const port = process.env.PORT || 5000;
const mongoUri = process.env.DATABASE_URL || "fasdf";

// MongoDB Connection using mongoose
mongoose.connect(mongoUri, {
 
})
  .then(() => {
    console.log("✅ Connected to MongoDB using Mongoose");





    // Start server only after DB connection
    app.listen(port, () => {
      console.log(`🚀 Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error.message);
  });
