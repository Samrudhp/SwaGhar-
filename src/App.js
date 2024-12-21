import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import Navigation from './components/Navigation'
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import GovernmentDashboard from './pages/GovernmentDashboard'
import Application from './pages/Application'
import ProtectedRoute from './components/ProtectedRoute';
import MyApplication from './pages/MyApplication';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className={`${themeMode} min-h-screen`}>
          <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-all">
            <Navigation themeMode={themeMode} toggleTheme={toggleTheme} />
            <Layout>
              <main className="p-6">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/application" element={<Application />} />
                  <Route path="/my-application" element={<MyApplication />} />
                  <Route path="/dashboardGov" element={<ProtectedRoute userType="government"><GovernmentDashboard /></ProtectedRoute>} />
                </Routes>
              </main>
            </Layout>
          </div>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
