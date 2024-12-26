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
      const apiUrl = process.env.REACT_APP_BACKEND_URL;
      await axios.post(
        `${apiUrl}/api/applications`,
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
    //real one
    // <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
    //   <Typography variant="h5" gutterBottom>
    //     Housing Application Form
    //   </Typography>
    //   <form onSubmit={handleSubmit}>
    //     <Box sx={{ mb: 4 }}>
    //       <Typography variant="h6" gutterBottom>
    //         Personal Information
    //       </Typography>
    //       <Grid2 container spacing={3}>
    //         <Grid2 item xs={12} sm={6}>
    //           <TextField
    //             fullWidth
    //             label="Family Size"
    //             type="number"
    //             value={formData.personalInfo.familySize}
    //             onChange={handleChange('personalInfo', 'familySize')}
    //             required
    //           />
    //         </Grid2>
    //         <Grid2 item xs={12} sm={6}>
    //           <TextField
    //             fullWidth
    //             label="Monthly Income"
    //             type="number"
    //             value={formData.personalInfo.monthlyIncome}
    //             onChange={handleChange('personalInfo', 'monthlyIncome')}
    //             required
    //           />
    //         </Grid2>
    //         <Grid2 item xs={12}>
    //           <TextField
    //             fullWidth
    //             label="Current Address"
    //             value={formData.personalInfo.currentAddress}
    //             onChange={handleChange('personalInfo', 'currentAddress')}
    //             required
    //             multiline
    //             rows={2}
    //           />
    //         </Grid2>
    //       </Grid2>
    //     </Box>

    //     <Box sx={{ mb: 4 }}>
    //       <Typography variant="h6" gutterBottom>
    //         Housing Preferences
    //       </Typography>
    //       <Grid2 container spacing={3}>
    //         <Grid2 item xs={12} sm={6}>
    //           <TextField
    //             fullWidth
    //             label="Preferred Location"
    //             value={formData.housingPreferences.preferredLocation}
    //             onChange={handleChange('housingPreferences', 'preferredLocation')}
    //             required
    //           />
    //         </Grid2>
    //         <Grid2 item xs={12} sm={6}>
    //           <TextField
    //             fullWidth
    //             label="Preferred Size"
    //             value={formData.housingPreferences.preferredSize}
    //             onChange={handleChange('housingPreferences', 'preferredSize')}
    //             required
    //           />
    //         </Grid2>
    //       </Grid2>
    //     </Box>

    //     <Button
    //       type="submit"
    //       variant="contained"
    //       color="primary"
    //       size="large"
    //       fullWidth
    //     >
    //       Submit Application
    //     </Button>
    //   </form>
    // </Paper>

    //test one
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Housing Application Form
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <TextField
                fullWidth
                label="Family Size"
                type="number"
                value={formData.personalInfo.familySize}
                onChange={handleChange('personalInfo', 'familySize')}
                required
                className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              />
              <TextField
                fullWidth
                label="Monthly Income"
                type="number"
                value={formData.personalInfo.monthlyIncome}
                onChange={handleChange('personalInfo', 'monthlyIncome')}
                required
                className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              />
              <TextField
                fullWidth
                label="Current Address"
                value={formData.personalInfo.currentAddress}
                onChange={handleChange('personalInfo', 'currentAddress')}
                required
                multiline
                rows={2}
                className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              />
            </div>
          </div>

          {/* Housing Preferences Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Housing Preferences
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <TextField
                fullWidth
                label="Preferred Location"
                value={formData.housingPreferences.preferredLocation}
                onChange={handleChange('housingPreferences', 'preferredLocation')}
                required
                className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              />
              <TextField
                fullWidth
                label="Preferred Size"
                value={formData.housingPreferences.preferredSize}
                onChange={handleChange('housingPreferences', 'preferredSize')}
                required
                className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 dark:from-blue-500 dark:to-blue-700 rounded-lg shadow-lg transition-all"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>



  );
};

export default ApplicationForm;
