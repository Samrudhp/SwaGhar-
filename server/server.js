require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();
const authRoutes = require('./routes/auth');
const applicationRoutes = require('./routes/application');
const userRoutes = require('./routes/users');
const chatbotRoutes = require('./routes/chatbot');

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/c',chatbotRoutes)

require("./config/db").connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/",(req,res)=>{
    res.send("<h1>Default page</h1>");
});