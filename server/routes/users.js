const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Get user profile
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile' });
  }
});

// Update user profile
router.patch('/profile', auth, async (req, res) => {
  try {
    const updates = req.body;
    
    
    delete updates.password;
    delete updates.userType;
    delete updates.verified;

    const user = await User.findByIdAndUpdate(
      req.userId,
      { $set: updates },
      { new: true }
    ).select('-password');

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile' });
  }
});

// Change password
router.post('/change-password', auth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    user.password = newPassword;
    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error changing password' });
  }
});

// Get all users (admin only)
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (user.userType !== 'government') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

// Verify user (government officials only)
router.patch('/:id/verify', auth, async (req, res) => {
  try {
    const admin = await User.findById(req.userId);
    if (admin.userType !== 'government') {
      return res.status(403).json({ message: 'Only government officials can verify users' });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { verified: true } },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error verifying user' });
  }
});

// Delete user (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const admin = await User.findById(req.userId);
    if (admin.userType !== 'government') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Prevent deleting another admin
    if (user.userType === 'government') {
      return res.status(400).json({ message: 'Cannot delete government official accounts' });
    }

    await user.remove();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
});

module.exports = router;