import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Box
} from '@mui/material';
import ApplicationForm from '../components/ApplicationForm';
import ApplicationList from '../components/ApplicationList';

const Application = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Personal Information', 'Housing Preferences', 'Review'];

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Housing Application
        </Typography>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box>
          {activeStep === 0 && (
            <ApplicationForm 
              onNext={() => setActiveStep(1)}
            />
          )}
        </Box>
      </Paper>

      <Box sx={{ mt: 4 }}>
        <ApplicationList />
      </Box>
    </Container>
  );
};

export default Application;