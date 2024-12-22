import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });
      login(response.data.token, response.data.userType);
      if (response.data.userType === 'government') {
        navigate('/dashboardGov')
      } else {
        navigate('/dashboard')
      }

    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (

    //real one
    // <div className="min-h-screen flex justify-center items-center">
    //   <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full font-semibold">
    //     <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h1>
    //     <form onSubmit={handleSubmit} className="space-y-4">
    //       <div>
    //         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
    //         <input
    //           type="email"
    //           id="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           className="mt-1 block w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           required
    //         />
    //       </div>

    //       <div>
    //         <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
    //         <input
    //           type="password"
    //           id="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           className="mt-1 block w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           required
    //         />
    //       </div>

    //       {error && (
    //         <p className="text-red-600 text-center">{error}</p>
    //       )}

    //       <button
    //         type="submit"
    //         className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
    //       >
    //         Login
    //       </button>
    //     </form>

    //     <p className="mt-4 text-center text-sm">
    //       <span className="text-black">Not registered?</span>
    //       <a href="/register" className="text-blue-600 hover:underline"> Register</a>
    //     </p>
    //   </div>
    // </div>

    //test one
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
    <div className="bg-white dark:bg-gray-800 p-12 rounded-xl shadow-2xl max-w-md w-full font-semibold transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-700 dark:text-gray-200">
        Welcome Back! <span className="text-blue-600 dark:text-blue-400">Login</span>
      </h1>
  
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-600 dark:text-gray-300 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-gray-200 text-lg transition duration-300"
            placeholder="Enter your email"
            required
          />
        </div>
  
        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-lg font-medium text-gray-600 dark:text-gray-300 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-gray-200 text-lg transition duration-300"
            placeholder="Enter your password"
            required
          />
        </div>
  
        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center text-sm">{error}</p>
        )}
  
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-bold text-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
        >
          Login
        </button>
      </form>
  
      {/* Register Link */}
      <p className="mt-6 text-center text-lg text-gray-600 dark:text-gray-300">
        Not registered yet?{" "}
        <a
          href="/register"
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline transition-all duration-300"
        >
          Create an account
        </a>
      </p>
    </div>
  </div>
  

  );
}

export default Login;
