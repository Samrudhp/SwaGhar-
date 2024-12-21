const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, enum: ['citizen', 'government', 'ngo'], required: true },
    personalDetails: {
      name: String,
      phone: String,
      address: String
    },
    verified: { type: Boolean, default: false },
    organizationDetails: {
      orgName: String,
      orgId: String
    }
  }, { timestamps: true });
  
  userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  });
  
  module.exports = mongoose.model('User', userSchema);