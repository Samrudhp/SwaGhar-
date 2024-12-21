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
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <RouterLink
          to="/"
          className="text-xl font-semibold hover:text-blue-300"
        >
          Housing Portal
        </RouterLink>

        {/* Desktop Links and Theme Toggle */}
        <div className="hidden sm:flex items-center space-x-4">
          <RouterLink
            to="/"
            className="hover:text-blue-300 transition duration-300"
          >
            Home
          </RouterLink>
          {!user && (
            <RouterLink
              to="/register"
              className="hover:text-blue-300 transition duration-300"
            >
              Register
            </RouterLink>
          )}
          {user && (
            <>
              <RouterLink
                to="/application"
                className="hover:text-blue-300 transition duration-300"
              >
                Application
              </RouterLink>
              <button
                onClick={logout}
                className="hover:text-blue-300 transition duration-300"
              >
                Logout
              </button>
            </>
          )}
          {user && user.userType === 'government' && (
            <RouterLink
              to="/dashboard"
              className="hover:text-blue-300 transition duration-300"
            >
              Dashboard
            </RouterLink>
          )}
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-800 transition-all"
          >
            {themeMode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={handleMenuToggle}
        >
          <MenuIcon size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-blue-500 shadow-md">
          <RouterLink
            to="/"
            className="block px-4 py-2 hover:bg-blue-700"
            onClick={closeMenu}
          >
            Home
          </RouterLink>
          {!user && (
            <RouterLink
              to="/register"
              className="block px-4 py-2 hover:bg-blue-700"
              onClick={closeMenu}
            >
              Register
            </RouterLink>
          )}
          {user && (
            <>
              <RouterLink
                to="/application"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={closeMenu}
              >
                Application
              </RouterLink>
              <button
                onClick={() => {
                  closeMenu();
                  logout();
                }}
                className="block px-4 py-2 text-left w-full hover:bg-blue-700"
              >
                Logout
              </button>
            </>
          )}
          {user && user.userType === 'government' && (
            <RouterLink
              to="/dashboard"
              className="block px-4 py-2 hover:bg-blue-700"
              onClick={closeMenu}
            >
              Dashboard
            </RouterLink>
          )}
          {/* Theme Toggle Button in Mobile Menu */}
          <button
            onClick={toggleTheme}
            className="block px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-800 transition-all"
          >
            {themeMode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
