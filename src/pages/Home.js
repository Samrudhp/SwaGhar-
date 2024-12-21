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
          <span className="text-4xl font-bold text-amber-700 dark:text-amber-200 mb-4">SwaGhar</span> - Connecting You to Your Ideal Home
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Your gateway to accessible housing solutions. Apply for housing, track your applications, and find your perfect home all in one place.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          {!user && (
            <button
              onClick={() => navigate('/register')}
              className="px-6 py-3 bg-black text-white dark:bg-slate-300 dark:text-gray-900 rounded-lg hover:bg-blue-700 transition-all"
            >
              Get Started
            </button>
          )}
          <button
            onClick={() => navigate('/dashboard')}
            className="px-6 py-3 border bg-black text-white dark:bg-slate-300 dark:text-gray-900 rounded-lg transition-all"
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

      {/* New Image Gallery Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Our Work...
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          A glimpse into the homes we’ve helped create for those in need.
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <img src="/images/image1.jpg" alt="Housing Contribution 1" className="w-full h-64 object-cover" />
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <img src="/images/image2.jpg" alt="Housing Contribution 2" className="w-full h-64 object-cover" />
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <img src="/images/image3.webp" alt="Housing Contribution 3" className="w-full h-64 object-cover" />
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <img src="/images/image4.jpg" alt="Housing Contribution 3" className="w-full h-64 object-cover" />
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <img src="/images/image5.jpg" alt="Housing Contribution 3" className="w-full h-64 object-cover" />
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <img src="/images/image6.jpg" alt="Housing Contribution 3" className="w-full h-64 object-cover" />
          </div>
        </div>
        <section class="flex flex-col lg:flex-row items-center lg:space-x-10 p-8 lg:p-16">

          <div class="flex-1 text-center lg:text-left space-y-4">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Aim</h2>
            <p class="text-lg lg:text-xl text-gray-900 dark:text-gray-100 text-justify leading-relaxed max-w-prose mx-auto lg:mx-0">
              Our goal is to provide a seamless and user-friendly platform that simplifies the process of finding and securing your perfect home. We are committed to offering detailed insights, reliable search options, and connecting people to the best real estate opportunities to help them make informed decisions.
            </p>
          </div>

          <div class="flex-1 mt-6 lg:mt-0">
            <img src="/images/image7.jpg" alt="Housing Portal Aim" class="w-full h-auto object-cover rounded-lg shadow-lg lg:max-w-lg lg:ml-auto" />
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
