import React, { useState, useEffect } from 'react';
import { Container, Grid2, Paper, Typography } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

function Dashboard() {
    const { user } = useAuth();
    const [applications, setApplications] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                if (!user || !user.token) {
                    throw new Error('User is not authenticated.');
                }

                const response = await axios.get('http://localhost:5000/api/applications', {
                    headers: { Authorization: `Bearer ${user.token}` },
                });

                setApplications(response.data);
            } catch (err) {
                console.error('Error fetching applications:', err);
                setError('Failed to fetch applications. Please try again later.');
            }
        };

        fetchApplications();
    }, [user]);

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" component="h1" gutterBottom>
                Dashboard
            </Typography>
            <Grid2 container spacing={3}>
                <Grid2 item xs={12}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Recent Applications
                        </Typography>
                        {error && (
                            <Typography color="error" sx={{ mb: 2 }}>
                                {error}
                            </Typography>
                        )}
                        {applications.length === 0 ? (
                            <Typography>No applications found.</Typography>
                        ) : (
                            applications.map((app) => (
                                <Paper key={app._id} sx={{ p: 2, mb: 2 }}>
                                    <Typography>Status: {app.status}</Typography>
                                    <Typography>
                                        Submitted: {new Date(app.createdAt).toLocaleDateString()}
                                    </Typography>
                                </Paper>
                            ))
                        )}
                    </Paper>
                </Grid2>
            </Grid2>
        </Container>
    );
}

export default Dashboard;
