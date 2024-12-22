
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
        //real one
        // <div className="container mx-auto p-4">
        //     <h1 className="text-4xl font-bold mb-10 text-gray-800 dark:text-gray-300">
        //         Applications for Housing Assistance
        //     </h1>
        //     <p className="mb-6 text-gray-600 text-lg dark:text-gray-200">
        //         This dashboard displays the recent applications submitted by individuals seeking housing assistance.
        //         Here you can find the status of your applications and the preferences you have indicated.
        //     </p>
        //     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        //         <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Recent Applications</h2>
        //         {error && (
        //             <p className="text-red-500 mb-4">
        //                 {error}
        //             </p>
        //         )}
        //         {applications.length === 0 ? (
        //             <p className="text-gray-600 dark:text-gray-400">No applications found.</p>
        //         ) : (
        //             applications.map((app) => (
        //                 <div key={app._id} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4 shadow hover:shadow-lg transition-shadow duration-200">
        //                     <div className="flex justify-between items-center mb-2">
        //                         <p className="font-medium text-base">Status: {app.status}</p>
        //                         <p className="text-sm text-gray-500">{new Date(app.createdAt).toLocaleDateString()}</p>
        //                     </div>
        //                     <p className="font-semibold">Housing Preferences:</p>
        //                     <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
        //                         {app.housingPreferences && (
        //                             <>
        //                                 {app.housingPreferences.preferredLocation && (
        //                                     <li>Location: {app.housingPreferences.preferredLocation}</li>
        //                                 )}
        //                                 {app.housingPreferences.preferredSize && (
        //                                     <li>Size: {app.housingPreferences.preferredSize}</li>
        //                                 )}
        //                             </>
        //                         )}
        //                     </ul>
        //                 </div>
        //             ))
        //         )}
        //     </div>
        // </div>

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