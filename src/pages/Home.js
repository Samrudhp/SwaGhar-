import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home as HomeIcon, UserPlus, FileText } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const features = [
    {
      title: 'Easy Application Process',
      description: 'Submit your housing application in just a few steps.',
      icon: <FileText size={40} className="text-blue-500" />,
      action: () => navigate('/application'),
    },
    {
      title: 'Quick Registration',
      description: 'Create an account to start your housing journey.',
      icon: <UserPlus size={40} className="text-green-500" />,
      action: () => navigate('/register'),
    },
    {
      title: 'Track Applications',
      description: 'Monitor your application status in real-time.',
      icon: <HomeIcon size={40} className="text-yellow-500" />,
      action: () => navigate('/application'),
    },
  ];

  return (
    
        <div className="container mx-auto px-4 py-12">
          <header className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Welcome to Housing Portal
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Your gateway to accessible housing solutions. Apply for housing, track your applications, and find your perfect home all in one place.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              {!user && (
                <button
                  onClick={() => navigate('/register')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                >
                  Get Started
                </button>
              )}
              <button
                onClick={() => navigate('/application')}
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
              >
                View Applications
              </button>
            </div>
          </header>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={feature.action}
                className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg text-center cursor-pointer hover:shadow-lg transform hover:translate-y-[-5px] transition-all"
              >
                <div className="mb-4">{feature.icon}</div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {feature.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
    
  );
};

export default Home;
