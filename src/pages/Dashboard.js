
import React, { useState, useEffect } from 'react';
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
                    throw new Error('User  is not authenticated.');
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
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-10 text-gray-800 dark:text-gray-300">
                Applications for Housing Assistance
            </h1>
            <p className="mb-6 text-gray-600 text-lg dark:text-gray-200">
                This dashboard displays the recent applications submitted by individuals seeking housing assistance.
                Here you can find the status of your applications and the preferences you have indicated.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Recent Applications</h2>
                {error && (
                    <p className="text-red-500 mb-4">
                        {error}
                    </p>
                )}
                {applications.length === 0 ? (
                    <p className="text-gray-600 dark:text-gray-400">No applications found.</p>
                ) : (
                    applications.map((app) => (
                        <div key={app._id} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4 shadow hover:shadow-lg transition-shadow duration-200">
                            <div className="flex justify-between items-center mb-2">
                                <p className="font-medium text-base">Status: {app.status}</p>
                                <p className="text-sm text-gray-500">{new Date(app.createdAt).toLocaleDateString()}</p>
                            </div>
                            <p className="font-semibold">Housing Preferences:</p>
                            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                                {app.housingPreferences && (
                                    <>
                                        {app.housingPreferences.preferredLocation && (
                                            <li>Location: {app.housingPreferences.preferredLocation}</li>
                                        )}
                                        {app.housingPreferences.preferredSize && (
                                            <li>Size: {app.housingPreferences.preferredSize}</li>
                                        )}
                                    </>
                                )}
                            </ul>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Dashboard;