const mongoose = require("mongoose");

require("dotenv").config();

exports.connectDB = async () => {
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{console.log("DB connection successfull")})
    .catch((err)=>{
        console.log("DB connection failure");
        console.log(err);
    });
}