import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Paper, Box, Typography, Grid2 } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const ApplicationForm = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    personalInfo: {
      familySize: '',
      monthlyIncome: '',
      currentAddress: ''
    },
    housingPreferences: {
      preferredLocation: '',
      preferredSize: ''
    }
  });

  const handleChange = (section, field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: event.target.value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate user authentication
    if (!user || !user.token) {
      alert('You must be logged in to submit the application.');
      return;
    }

    // Validate form data
    const { familySize, monthlyIncome, currentAddress } = formData.personalInfo;
    const { preferredLocation, preferredSize } = formData.housingPreferences;

    if (!familySize || !monthlyIncome || !currentAddress || !preferredLocation || !preferredSize) {
      alert('Please fill out all required fields.');
      return;
    }

    try {
      await axios.post(
        'http://localhost:5000/api/applications',
        formData,
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      navigate('/dashboard');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit the application. Please try again later.');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Housing Application Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Personal Information
          </Typography>
          <Grid2 container spacing={3}>
            <Grid2 item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Family Size"
                type="number"
                value={formData.personalInfo.familySize}
                onChange={handleChange('personalInfo', 'familySize')}
                required
              />
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Monthly Income"
                type="number"
                value={formData.personalInfo.monthlyIncome}
                onChange={handleChange('personalInfo', 'monthlyIncome')}
                required
              />
            </Grid2>
            <Grid2 item xs={12}>
              <TextField
                fullWidth
                label="Current Address"
                value={formData.personalInfo.currentAddress}
                onChange={handleChange('personalInfo', 'currentAddress')}
                required
                multiline
                rows={2}
              />
            </Grid2>
          </Grid2>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Housing Preferences
          </Typography>
          <Grid2 container spacing={3}>
            <Grid2 item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Preferred Location"
                value={formData.housingPreferences.preferredLocation}
                onChange={handleChange('housingPreferences', 'preferredLocation')}
                required
              />
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Preferred Size"
                value={formData.housingPreferences.preferredSize}
                onChange={handleChange('housingPreferences', 'preferredSize')}
                required
              />
            </Grid2>
          </Grid2>
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Submit Application
        </Button>
      </form>
    </Paper>
  );
};

export default ApplicationForm;
