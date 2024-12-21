import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Table,
  Grid2,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Box,
  Chip,
  Card,
  CardContent
} from '@mui/material';
import { Home, Users, FileText, CheckCircle } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const GovernmentDashboard = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState({
    totalApplications: 0,
    pending: 0,
    approved: 0,
    rejected: 0
  });

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/applications', {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      setApplications(response.data);

      // Calculate stats
      const stats = response.data.reduce(
        (acc, curr) => {
          acc.totalApplications++;
          acc[curr.status]++;
          return acc;
        },
        { totalApplications: 0, pending: 0, approved: 0, rejected: 0 }
      );

      setStats(stats);
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  const handleStatusUpdate = async (applicationId, newStatus) => {
    try {
      await axios.patch(
        `http://localhost:5000/api/applications/${applicationId}/status`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      fetchApplications();
    } catch (error) {
      console.error('Error updating application status:', error);
    }
  };

  const statsCards = [
    { title: 'Total Applications', value: stats.totalApplications, icon: <FileText />, color: '#1976d2' },
    { title: 'Pending Review', value: stats.pending, icon: <Users />, color: '#ed6c02' },
    { title: 'Approved', value: stats.approved, icon: <CheckCircle />, color: '#2e7d32' },
    { title: 'Housing Units Available', value: '125', icon: <Home />, color: '#9c27b0' }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid2 container spacing={3}>
        {/* Stats Cards */}
        {statsCards.map((card, index) => (
          <Grid2 xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Box sx={{ color: card.color, mr: 1 }}>{card.icon}</Box>
                  <Typography variant="h6" component="div">
                    {card.title}
                  </Typography>
                </Box>
                <Typography variant="h4" component="div" sx={{ color: card.color }}>
                  {card.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}

        {/* Recent Applications Table */}
        <Grid2 xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Applications
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Application ID</TableCell>
                  <TableCell>Applicant Name</TableCell>
                  <TableCell>Family Size</TableCell>
                  <TableCell>Monthly Income</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {applications.map((application) => (
                  <TableRow key={application._id}>
                    <TableCell>#{application._id.slice(-6)}</TableCell>
                    <TableCell>{application.userId?.personalDetails?.name}</TableCell>
                    <TableCell>{application.personalInfo.familySize}</TableCell>
                    <TableCell>${application.personalInfo.monthlyIncome}</TableCell>
                    <TableCell>
                      <Chip
                        label={application.status}
                        color={
                          application.status === 'pending' ? 'warning' :
                          application.status === 'approved' ? 'success' : 'error'
                        }
                      />
                    </TableCell>
                    <TableCell>
                      {application.status === 'pending' && (
                        <Box>
                          <Button
                            size="small"
                            variant="contained"
                            color="success"
                            onClick={() => handleStatusUpdate(application._id, 'approved')}
                            sx={{ mr: 1 }}
                          >
                            Approve
                          </Button>
                          <Button
                            size="small"
                            variant="contained"
                            color="error"
                            onClick={() => handleStatusUpdate(application._id, 'rejected')}
                          >
                            Reject
                          </Button>
                        </Box>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default GovernmentDashboard;
