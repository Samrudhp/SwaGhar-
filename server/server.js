const express = require("express");
const app = express();
const cors = require('cors');

require("dotenv").config();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json());

//mounting
app.use('/api/auth', authRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/users', userRoutes);

require("./config/db").connectDB();


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});





