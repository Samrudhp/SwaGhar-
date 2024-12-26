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
        const apiUrl = process.env.REACT_APP_BACKEND_URL;
        const response = await axios.get(
          `${apiUrl}/api/applications/my-applications`,
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
    //real one
    // <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
    //   <Typography variant="h5" gutterBottom>
    //     My Applications
    //   </Typography>
    //   <List>
    //     {applications.map((application) => (
    //       <ListItem
    //         key={application._id}
    //         component={Link}
    //         to={`/application/${application._id}`}
    //         sx={{
    //           mb: 2,
    //           border: 1,
    //           borderColor: 'grey.300',
    //           borderRadius: 1,
    //           textDecoration: 'none'
    //         }}
    //       >
    //         <ListItemText
    //           primary={
    //             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    //               <Typography variant="subtitle1">
    //                 Application #{application._id.slice(-6)}
    //               </Typography>
    //               <Chip
    //                 label={application.status}
    //                 color={
    //                   application.status === 'pending' ? 'warning' :
    //                   application.status === 'approved' ? 'success' : 'error'
    //                 }
    //                 size="small"
    //               />
    //             </Box>
    //           }
    //           secondary={
    //             <>
    //               <Typography variant="body2">
    //                 Location: {application.housingPreferences?.preferredLocation || 'N/A'}
    //               </Typography>
    //               <Typography variant="body2">
    //                 Submitted: {new Date(application.createdAt).toLocaleDateString()}
    //               </Typography>
    //             </>
    //           }
    //         />
    //       </ListItem>
    //     ))}
    //   </List>
    // </Paper>

    //test one
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-8 object-contain">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          My Applications
        </h1>
        <div>
          {applications.length === 0 ? (
            <p className="text-center text-gray-700 dark:text-gray-300">
              No applications found.
            </p>
          ) : (
            <ul className="space-y-4">
              {applications.map((application) => (
                <li
                  key={application._id}
                  className="block bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 p-4"
                >
                  <Link
                    to={`/application/${application._id}`}
                    className="block text-gray-800 dark:text-gray-200 no-underline"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-lg font-semibold">
                        Application #{application._id.slice(-6)}
                      </h2>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${application.status === 'pending'
                            ? 'bg-yellow-500 text-white'
                            : application.status === 'approved'
                              ? 'bg-green-600 text-white'
                              : 'bg-red-600 text-white'
                          }`}
                      >
                        {application.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Location:</span> {application.housingPreferences?.preferredLocation || 'N/A'}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Submitted:</span> {new Date(application.createdAt).toLocaleDateString()}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>


  );
};

export default ApplicationList;
