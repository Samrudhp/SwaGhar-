import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Grid2, 
  Paper 
} from '@mui/material';
import { Home as HomeIcon, UserPlus, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const features = [
    {
      title: 'Easy Application Process',
      description: 'Submit your housing application in just a few steps',
      icon: <FileText size={40} />,
      action: () => navigate('/application')
    },
    {
      title: 'Quick Registration',
      description: 'Create an account to start your housing journey',
      icon: <UserPlus size={40} />,
      action: () => navigate('/register')
    },
    {
      title: 'Track Applications',
      description: 'Monitor your application status in real-time',
      icon: <HomeIcon size={40} />,
      action: () => navigate('/application')
    }
  ];

  return (
    <Container>
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Welcome to Housing Portal
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Your gateway to accessible housing solutions. Apply for housing, track your applications,
          and find your perfect home all in one place.
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          {!user && (
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/register')}
              sx={{ mr: 2 }}
            >
              Get Started
            </Button>
          )}
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/application')}
          >
            View Applications
          </Button>
        </Box>
      </Box>

      <Grid2 container spacing={4} sx={{ mt: 4 }}>
        {features.map((feature, index) => (
          <Grid2 item xs={12} md={4} key={index}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': { transform: 'translateY(-5px)', transition: '0.3s' }
              }}
              onClick={feature.action}
            >
              <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
              <Typography variant="h6" align="center" gutterBottom>
                {feature.title}
              </Typography>
              <Typography align="center" color="text.secondary">
                {feature.description}
              </Typography>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Home;