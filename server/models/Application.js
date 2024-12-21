const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: {
    type: String,
    enum: ['pending', 'verified', 'rejected', 'approved'],
    default: 'pending'
  },
  personalInfo: {
    familySize: Number,
    monthlyIncome: Number,
    currentAddress: String
  },
  documents: [{
    type: String,
    url: String
  }],
  housingPreferences: {
    preferredLocation: String,
    preferredSize: String
  },
  reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reviewNotes: String,
  reviewDate : Date
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);