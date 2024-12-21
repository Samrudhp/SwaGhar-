import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Menu as MenuIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navigation = ({ themeMode, toggleTheme }) => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <RouterLink
          to="/"
          className="text-2xl font-bold tracking-wider text-white hover:text-gray-200 transition duration-300"
        >
          Housing Portal
        </RouterLink>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-6">
          <RouterLink
            to="/"
            className="hover:text-gray-200 transition duration-300"
          >
            Home
          </RouterLink>

          {!user && (
            <RouterLink
              to="/login"
              className="hover:text-gray-200 transition duration-300"
            >
              Login
            </RouterLink>
          )}

          {user && (
            <>
              <RouterLink
                to="/application"
                className="hover:text-gray-200 transition duration-300"
              >
                Application
              </RouterLink>
              <button
                onClick={logout}
                className="hover:text-gray-200 transition duration-300"
              >
                Logout
              </button>
            </>
          )}

          {user && user.userType === 'government' && (
            <RouterLink
              to="/dashboard"
              className="hover:text-gray-200 transition duration-300"
            >
              Dashboard
            </RouterLink>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-all"
          >
            {themeMode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={handleMenuToggle}
        >
          <MenuIcon size={24} className="text-white hover:text-gray-200 transition duration-300" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gradient-to-r from-blue-500 to-blue-600 p-4 shadow-md">
          <RouterLink
            to="/"
            className="block py-2 px-4 hover:bg-blue-700 rounded-md"
            onClick={closeMenu}
          >
            Home
          </RouterLink>
          {!user && (
            <RouterLink
              to="/register"
              className="block py-2 px-4 hover:bg-blue-700 rounded-md"
              onClick={closeMenu}
            >
              Register
            </RouterLink>
          )}

          {user && (
            <>
              <RouterLink
                to="/application"
                className="block py-2 px-4 hover:bg-blue-700 rounded-md"
                onClick={closeMenu}
              >
                Application
              </RouterLink>
              <button
                onClick={() => {
                  closeMenu();
                  logout();
                }}
                className="block py-2 px-4 text-left w-full hover:bg-blue-700 rounded-md"
              >
                Logout
              </button>
            </>
          )}

          {user && user.userType === 'government' && (
            <RouterLink
              to="/dashboard"
              className="block py-2 px-4 hover:bg-blue-700 rounded-md"
              onClick={closeMenu}
            >
              Dashboard
            </RouterLink>
          )}

          {/* Theme Toggle Button in Mobile Menu */}
          <button
            onClick={toggleTheme}
            className="block py-2 px-4 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-all w-full"
          >
            {themeMode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
