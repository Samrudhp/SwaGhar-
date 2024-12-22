import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home as HomeIcon, UserPlus, FileText } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import DisplayInfo from '../components/DisplayInfo';
// import GeminiChat from '../components/ChatbotPopup';


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
      {/* real one */}
      {/* <header className="text-center">
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
      </header> */}



      {/* test one */}
      {/* <header className="relative text-center p-8 rounded-lg bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          <span className="text-4xl font-bold text-amber-600 dark:text-amber-400">SwaGhar</span> - Connecting You to Your Ideal Home
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Your gateway to accessible housing solutions. Apply for housing, track your applications, and find your perfect home all in one place.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          {!user && (
            <button
              onClick={() => navigate('/register')}
              className="px-6 py-3 bg-gradient-to-r from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-100 rounded-lg shadow-inner hover:shadow-lg transition-all"
            >
              Get Started
            </button>
          )}
          <button
            onClick={() => navigate('/dashboard')}
            className="px-6 py-3 bg-gradient-to-r from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-100 rounded-lg shadow-inner hover:shadow-lg transition-all"
          >
            View Applications
          </button>
        </div>
      </header> */}

      {/* test two */}
      <header className="relative text-center p-8 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
        <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-200 mb-4">
          <span className="text-4xl font-bold text-amber-600 dark:text-amber-400">SwaGhar</span> - Connecting You to Your Ideal Home
        </h1>
        <p className="text-lg text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
          Your gateway to accessible housing solutions. Apply for housing, track your applications, and find your perfect home all in one place.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          {!user && (
            <button
              onClick={() => navigate('/register')}
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg shadow-inner hover:shadow-lg transition-all"
            >
              Get Started
            </button>
          )}
          <button
            onClick={() => navigate('/dashboard')}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-inner hover:shadow-lg transition-all"
          >
            View Applications
          </button>
        </div>
      </header>


      {/* real one */}
      {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div> */}

      {/* test one */}

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={feature.action}
            className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 shadow-md rounded-lg text-center cursor-pointer hover:shadow-lg hover:translate-y-[-5px] transition-all"
          >
            <div className="mb-4 text-amber-600 dark:text-amber-400">{feature.icon}</div>
            <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mb-2">
              {feature.title}
            </h2>
            <p className="text-blue-700 dark:text-blue-300">{feature.description}</p>
          </div>
        ))}
      </div>


      {/* New Image Gallery Section */}

      {/* real one */}
      {/* <div className="mt-16 text-center">
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

      </div> */}
      {/* test one */}
      <div className="mt-16 text-center relative">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200 mb-8 tracking-wide">
          Our Work <span className="text-amber-600 dark:text-amber-400">in Action</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          A glimpse into the homes we’ve helped create for those in need.
        </p>

        {/* Work Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={`/images/image${index + 1}${index === 2 ? '.webp' : '.jpg'}`}
                  alt={`Housing Contribution ${index + 1}`}
                  className="w-full h-64 object-cover rounded-md group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="mt-4 text-lg text-gray-800 dark:text-gray-200 group-hover:text-amber-600 transition-colors duration-300">
                Housing Contribution {index + 1}
              </p>
            </div>
          ))}
        </div>

        {/* Our Aim Section */}
        <section className="mt-16 lg:mt-20 flex flex-col lg:flex-row items-center lg:space-x-16 p-8 lg:p-20 bg-gradient-to-r from-amber-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-md">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-wide">
              Our <span className="text-amber-600 dark:text-amber-400">Aim</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-800 dark:text-gray-300 leading-relaxed">
              Our goal is to provide a seamless and user-friendly platform that simplifies the process of finding and securing your perfect home. We are committed to offering detailed insights, reliable search options, and connecting people to the best real estate opportunities to help them make informed decisions.
            </p>
          </div>

          {/* Image Content */}
          <div className="flex-1 mt-8 lg:mt-0 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src="/images/image7.jpg"
              alt="Our Aim"
              className="w-full h-auto object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>
      </div>
      <DisplayInfo />
    </div>
  );
};

export default Home;
