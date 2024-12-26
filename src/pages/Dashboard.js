
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
                const apiUrl = process.env.REACT_APP_BACKEND_URL;
                const response = await axios.get(`${apiUrl}/api/applications`, {
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
     

        //test one
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-8">
  <div className="max-w-7xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
    <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
      Applications for Housing Assistance
    </h1>
    <p className="mb-8 text-xl text-gray-700 dark:text-gray-300">
      Stay updated with the latest applications for housing assistance. Easily track statuses and review preferences.
    </p>
    
    <div className="p-8 bg-gradient-to-r from-white via-blue-50 to-blue-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-xl shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Recent Applications
      </h2>
      {error && (
        <p className="text-red-500 font-medium text-center mb-6">
          {error}
        </p>
      )}
      {applications.length === 0 ? (
        <p className="text-lg text-center text-gray-500 dark:text-gray-400">
          No applications found. Please check back later.
        </p>
      ) : (
        <div className="space-y-6">
          {applications.map((app) => (
            <div
              key={app._id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    app.status === "approved"
                      ? "bg-green-100 text-green-600"
                      : app.status === "rejected"
                      ? "bg-red-100 text-red-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {app.status}
                </span>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(app.createdAt).toLocaleDateString()}
                </p>
              </div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Housing Preferences
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                {app.housingPreferences?.preferredLocation && (
                  <li>
                    <strong>Location:</strong> {app.housingPreferences.preferredLocation}
                  </li>
                )}
                {app.housingPreferences?.preferredSize && (
                  <li>
                    <strong>Size:</strong> {app.housingPreferences.preferredSize}
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
</div>


    );
}

export default Dashboard;