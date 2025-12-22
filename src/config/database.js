// src/config/database.js
const mongoose = require('mongoose')

const MongoDB_URI = process.env.MONGO_URI

const connectDB = async () => {
  try {
    if (!MongoDB_URI) {
      throw new Error('MONGO_URI is undefined')
    }

    await mongoose.connect(MongoDB_URI)
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error('MongoDB connection error:', error.message)
    process.exit(1)
  }
}

module.exports = connectDB
