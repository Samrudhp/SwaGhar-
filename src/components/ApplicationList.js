import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemText,
  Chip,
  Box 
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchApplications = async () => {
      if (!user || !user.token) return; // Ensure user and token exist
      try {
        const response = await axios.get(
          'http://localhost:5000/api/applications/my-applications',
          { headers: { Authorization: `Bearer ${user.token}` } }
        );
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, [user]);

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        My Applications
      </Typography>
      <List>
        {applications.map((application) => (
          <ListItem
            key={application._id}
            component={Link}
            to={`/application/${application._id}`}
            sx={{
              mb: 2,
              border: 1,
              borderColor: 'grey.300',
              borderRadius: 1,
              textDecoration: 'none'
            }}
          >
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="subtitle1">
                    Application #{application._id.slice(-6)}
                  </Typography>
                  <Chip
                    label={application.status}
                    color={
                      application.status === 'pending' ? 'warning' :
                      application.status === 'approved' ? 'success' : 'error'
                    }
                    size="small"
                  />
                </Box>
              }
              secondary={
                <>
                  <Typography variant="body2">
                    Location: {application.housingPreferences?.preferredLocation || 'N/A'}
                  </Typography>
                  <Typography variant="body2">
                    Submitted: {new Date(application.createdAt).toLocaleDateString()}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ApplicationList;
