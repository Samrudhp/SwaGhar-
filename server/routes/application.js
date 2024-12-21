const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Application = require('../models/Application');
const User = require('../models/User')

// Create new application
router.post('/', auth, async (req, res) => {
  try {
    const application = new Application({
      userId: req.userId,
      personalInfo: req.body.personalInfo,
      housingPreferences: req.body.housingPreferences,
      status: 'pending'
    });

    await application.save();
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: 'Error creating application' });
  }
});

// Get user's applications
router.get('/my-applications', auth, async (req, res) => {
  try {
    const applications = await Application.find({ userId: req.userId });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching applications' });
  }
});

// Get specific application
router.get('/:id', auth, async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    if (application.userId.toString() !== req.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching application' });
  }
});

// Update application (only if pending)
router.put('/:id', auth, async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    if (application.userId.toString() !== req.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    if (application.status !== 'pending') {
      return res.status(400).json({ message: 'Cannot update processed application' });
    }

    Object.assign(application, req.body);
    await application.save();
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: 'Error updating application' });
  }
});

router.patch('/:id/status', auth, async (req, res) => {
  try {
    const { status } = req.body;
    const user = await User.findById(req.userId);

    if (user.userType !== 'government') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    application.status = status;
    application.reviewedBy = req.userId;
    application.reviewDate = new Date();

    await application.save();
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: 'Error updating application status' });
  }
});
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (user.userType === 'government') {
      const applications = await Application.find()
        .populate('userId', 'personalDetails')
        .sort('-createdAt');
      res.json(applications);
    } else {
      const applications = await Application.find({ userId: req.userId })
        .sort('-createdAt');
      res.json(applications);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching applications' });
  }
});

module.exports = router;

