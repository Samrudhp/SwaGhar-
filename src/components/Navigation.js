import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Menu as MenuIcon, Moon, Sun } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const ThemeToggle = ({ themeMode, toggleTheme }) => {

  return (
    <div className="relative inline-block">
      <input
        type="checkbox"
        checked={themeMode === 'dark'}
        onChange={toggleTheme}
        className="hidden"
        id="theme-toggle"
      />
      <label
        htmlFor="theme-toggle"
        className={`
          flex items-center
          relative w-[64px] h-[32px] 
          rounded-full cursor-pointer
          transition-all duration-300
          hover:scale-105
          ${themeMode === 'dark' ? 'bg-[#9476ff]' : 'bg-gray-700'}
        `}
      >
        <div className={`
          absolute left-2 z-10
          transition-all duration-300
          transform
          ${themeMode === 'light' ? 'opacity-100' : 'opacity-0'}
        `}>
          <Sun size={16} className="text-yellow-300" />
        </div>

        <div className={`
          absolute right-2 z-10
          transition-all duration-300
          transform
          ${themeMode === 'dark' ? 'opacity-100' : 'opacity-0'}
        `}>
          <Moon size={16} className="text-white" />
        </div>

        <div
          className={`
            absolute top-1 
            h-[24px] w-[24px]
            rounded-full
            bg-white
            shadow-[0_2px_5px_rgba(0,0,0,0.2)]
            transition-all duration-300 ease-in-out
            ${themeMode === 'light' ? 'translate-x-[36px]' : 'translate-x-1'}
          `}
        />
      </label>
    </div>
  );
};

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
    // real one
    // <nav className={`bg-gradient-to-r from-black to-slate-900 text-white shadow-md sticky top-0 z-50 ${themeMode === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-r from-black to-slate-900'} font-semibold text-xl`}>
    //   <div className="container mx-auto px-6 py-3 flex items-center justify-between gap-3">
    //     <RouterLink
    //       to="/"
    //       className="text-2xl tracking-wide font-bold text-white hover:text-gray-200 transition duration-300"
    //     >
    //       SwaGhar
    //     </RouterLink>

    //     <div className="hidden sm:flex items-center space-x-6">
    //       <RouterLink
    //         to="/"
    //         className="hover:text-gray-200 hover:scale-110 transition duration-300"
    //       >
    //         Home
    //       </RouterLink>


    //       {(user && user.userType === 'government') ? (
    //         <RouterLink
    //           to="/dashboardGov"
    //           className="hover:text-gray-200 hover:scale-110 transition duration-300"
    //         >
    //           Dashboard
    //         </RouterLink>
    //       ) : (
    //         <RouterLink
    //           to="/dashboard"
    //           className="hover:text-gray-200 hover:scale-110 transition duration-300"
    //         >
    //           Dashboard
    //         </RouterLink>
    //       )}

    //       {!user && (
    //         <RouterLink
    //           to="/login"
    //           className="hover:text-gray-200 hover:scale-110 transition duration-300"
    //         >
    //           Login
    //         </RouterLink>
    //       )}

    //       {(user && user.userType !== "government") ? (
    //         <>
    //           <RouterLink
    //             to="/application"
    //             className="hover:text-gray-200 hover:scale-110 transition duration-300"
    //           >
    //             Application
    //           </RouterLink>

    //           <RouterLink to='/' >
    //             <button
    //               onClick={logout}
    //               className="hover:text-gray-200 hover:scale-110 transition duration-300"
    //             >
    //               Logout
    //             </button>
    //           </RouterLink>
    //         </>
    //       ) : ( user && 
    //       <div>
    //           {
    //             <RouterLink to='/' >
    //             <button
    //               onClick={logout}
    //               className="hover:text-gray-200 hover:scale-110 transition duration-300"
    //             >
    //               Logout
    //             </button>
    //           </RouterLink>


    //           }
    //       </div>
    //     )}

    //       <ThemeToggle themeMode={themeMode} toggleTheme={toggleTheme} />
    //     </div>

    //     <button
    //       className="sm:hidden focus:outline-none"
    //       onClick={handleMenuToggle}
    //     >
    //       <MenuIcon size={24} className="text-white hover:scale-110 hover:text-gray-200 transition duration-300" />
    //     </button>
    //   </div>

    //   {isMenuOpen && (
    //     <div className={`sm:hidden p-4 shadow-md ${themeMode === 'dark' ? 'bg-gray-800' : 'bg-gradient-to-r from-black to-slate-900'}`}>
    //       <RouterLink
    //         to="/"
    //         className="block py-2 px-4 text-white hover:text-gray-200 rounded-md"
    //         onClick={closeMenu}
    //       >
    //         Home
    //       </RouterLink>

    //       {(user && user.userType === 'government') ? (
    //         <RouterLink
    //           to="/dashboardGov"
    //           className="block py-2 px-4 text-white hover:text-gray-200 rounded-md"
    //           onClick={closeMenu}
    //         >
    //           Dashboard
    //         </RouterLink>
    //       ) : (
    //         <RouterLink
    //           to="/dashboard"
    //           className="block py-2 px-4 text-white hover:text-gray-200 rounded-md"
    //           onClick={closeMenu}
    //         >
    //           Dashboard
    //         </RouterLink>
    //       )}

    //       {user && (
    //         <>
    //           <RouterLink
    //             to="/application"
    //             className="block py-2 px-4 text-white hover:text-gray-200 rounded-md"
    //             onClick={closeMenu}
    //           >
    //             Application
    //           </RouterLink>
    //           <button
    //             onClick={() => {
    //               closeMenu();
    //               logout();
    //             }}
    //             className="block py-2 px-4 text-left w-full text-white hover:text-gray-200 rounded-md"
    //           >
    //             Logout
    //           </button>
    //         </>
    //       )}

    //       {!user && (
    //         <RouterLink
    //           to="/login"
    //           className="block py-2 px-4 text-white hover:text-gray-200 rounded-md"
    //           onClick={closeMenu}
    //         >
    //           Login
    //         </RouterLink>
    //       )}


    //       <div className="py-2 px-4 flex justify-center">
    //         <ThemeToggle themeMode={themeMode} toggleTheme={toggleTheme} />
    //       </div>
    //     </div>
    //   )}
    // </nav>

    //test one
    // <nav
    //   className={`relative bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 shadow-lg rounded-b-lg transform transition-all duration-300 ${isMenuOpen ? 'z-50' : 'hover:-translate-y-1'
    //     }`}
    // >
    //   <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-3">
    //     <RouterLink
    //       to="/"
    //       className="text-2xl tracking-wide font-bold text-blue-900 dark:text-blue-200 hover:text-amber-600 dark:hover:text-amber-400 transition duration-300"
    //     >
    //       SwaGhar
    //     </RouterLink>

    //     {/* Desktop Links */}
    //     <div className="hidden sm:flex items-center space-x-6">
    //       <RouterLink
    //         to="/"
    //         className="hover:text-amber-600 hover:scale-110 transition duration-300"
    //       >
    //         Home
    //       </RouterLink>

    //       {user && user.userType === 'government' ? (
    //         <RouterLink
    //           to="/dashboardGov"
    //           className="hover:text-amber-600 hover:scale-110 transition duration-300"
    //         >
    //           Dashboard
    //         </RouterLink>
    //       ) : (
    //         <RouterLink
    //           to="/dashboard"
    //           className="hover:text-amber-600 hover:scale-110 transition duration-300"
    //         >
    //           Dashboard
    //         </RouterLink>
    //       )}

    //       {!user && (
    //         <RouterLink
    //           to="/login"
    //           className="hover:text-amber-600 hover:scale-110 transition duration-300"
    //         >
    //           Login
    //         </RouterLink>
    //       )}

    //       {user && user.userType !== 'government' ? (
    //         <>
    //           <RouterLink
    //             to="/application"
    //             className="hover:text-amber-600 hover:scale-110 transition duration-300"
    //           >
    //             Application
    //           </RouterLink>
    //           <RouterLink to="/">
    //             <button
    //               onClick={logout}
    //               className="hover:text-amber-600 hover:scale-110 transition duration-300"
    //             >
    //               Logout
    //             </button>
    //           </RouterLink>
    //         </>
    //       ) : (
    //         user && (
    //           <RouterLink to="/">
    //             <button
    //               onClick={logout}
    //               className="hover:text-amber-600 hover:scale-110 transition duration-300"
    //             >
    //               Logout
    //             </button>
    //           </RouterLink>
    //         )
    //       )}

    //       <ThemeToggle themeMode={themeMode} toggleTheme={toggleTheme} />
    //     </div>

    //     {/* Mobile Menu Toggle */}
    //     <button
    //       className="sm:hidden focus:outline-none"
    //       onClick={handleMenuToggle}
    //     >
    //       <MenuIcon
    //         size={24}
    //         className="text-blue-900 dark:text-blue-200 hover:scale-110 hover:text-amber-600 transition duration-300"
    //       />
    //     </button>
    //   </div>

    //   {/* Mobile Menu */}
    //   {isMenuOpen && (
    //     <div
    //       className={`sm:hidden p-4 shadow-md rounded-lg ${themeMode === 'dark'
    //           ? 'bg-blue-900'
    //           : 'bg-gradient-to-r from-blue-50 to-blue-100'
    //         }`}
    //     >
    //       <RouterLink
    //         to="/"
    //         className="block py-2 px-4 text-blue-900 dark:text-blue-200 hover:text-amber-600 rounded-md transition duration-300"
    //         onClick={closeMenu}
    //       >
    //         Home
    //       </RouterLink>

    //       {user && user.userType === 'government' ? (
    //         <RouterLink
    //           to="/dashboardGov"
    //           className="block py-2 px-4 text-blue-900 dark:text-blue-200 hover:text-amber-600 rounded-md transition duration-300"
    //           onClick={closeMenu}
    //         >
    //           Dashboard
    //         </RouterLink>
    //       ) : (
    //         <RouterLink
    //           to="/dashboard"
    //           className="block py-2 px-4 text-blue-900 dark:text-blue-200 hover:text-amber-600 rounded-md transition duration-300"
    //           onClick={closeMenu}
    //         >
    //           Dashboard
    //         </RouterLink>
    //       )}

    //       {user && (
    //         <>
    //           <RouterLink
    //             to="/application"
    //             className="block py-2 px-4 text-blue-900 dark:text-blue-200 hover:text-amber-600 rounded-md transition duration-300"
    //             onClick={closeMenu}
    //           >
    //             Application
    //           </RouterLink>
    //           <button
    //             onClick={() => {
    //               closeMenu();
    //               logout();
    //             }}
    //             className="block py-2 px-4 text-left w-full text-blue-900 dark:text-blue-200 hover:text-amber-600 rounded-md transition duration-300"
    //           >
    //             Logout
    //           </button>
    //         </>
    //       )}

    //       {!user && (
    //         <RouterLink
    //           to="/login"
    //           className="block py-2 px-4 text-blue-900 dark:text-blue-200 hover:text-amber-600 rounded-md transition duration-300"
    //           onClick={closeMenu}
    //         >
    //           Login
    //         </RouterLink>
    //       )}

    //       <div className="py-2 px-4 flex justify-center">
    //         <ThemeToggle themeMode={themeMode} toggleTheme={toggleTheme} />
    //       </div>
    //     </div>
    //   )}
    // </nav>

    //tst two
    <nav
      className={`relative mx-auto w-11/12 lg:w-10/12 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 shadow-lg rounded-xl top-5 transform transition-all duration-300 ${isMenuOpen ? 'z-50' : ''
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-3">
        <RouterLink
          to="/"
          className="text-2xl tracking-wide font-bold text-blue-900 dark:text-blue-200 hover:text-amber-600 dark:hover:text-amber-400 transition duration-300"
        >
          SwaGhar
        </RouterLink>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center space-x-6">
          <RouterLink
            to="/"
            className="hover:text-amber-600 hover:scale-110 transition duration-300"
          >
            Home
          </RouterLink>

          {user && user.userType === 'government' ? (
            <RouterLink
              to="/dashboardGov"
              className="hover:text-amber-600 hover:scale-110 transition duration-300"
            >
              Dashboard
            </RouterLink>
          ) : (
            <RouterLink
              to="/dashboard"
              className="hover:text-amber-600 hover:scale-110 transition duration-300"
            >
              Dashboard
            </RouterLink>
          )}

          {!user && (
            <RouterLink
              to="/login"
              className="hover:text-amber-600 hover:scale-110 transition duration-300"
            >
              Login
            </RouterLink>
          )}

          {user && user.userType !== 'government' ? (
            <>
              <RouterLink
                to="/application"
                className="hover:text-amber-600 hover:scale-110 transition duration-300"
              >
                Application
              </RouterLink>
              <RouterLink to="/">
                <button
                  onClick={logout}
                  className="hover:text-amber-600 hover:scale-110 transition duration-300"
                >
                  Logout
                </button>
              </RouterLink>
            </>
          ) : (
            user && (
              <RouterLink to="/">
                <button
                  onClick={logout}
                  className="hover:text-amber-600 hover:scale-110 transition duration-300"
                >
                  Logout
                </button>
              </RouterLink>
            )
          )}

          <ThemeToggle themeMode={themeMode} toggleTheme={toggleTheme} />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={handleMenuToggle}
        >
          <MenuIcon
            size={24}
            className="text-blue-900 dark:text-blue-200 hover:scale-110 hover:text-amber-600 transition duration-300"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`sm:hidden p-4 shadow-md rounded-lg ${themeMode === 'dark'
              ? 'bg-blue-900'
              : 'bg-gradient-to-r from-blue-50 to-blue-100'
            }`}
        >
          <RouterLink
            to="/"
            className="block py-2 px-4 text-blue-900 dark:text-blue-200 hover:text-amber-600 rounded-md transition duration-300"
            onClick={closeMenu}
          >
            Home
          </RouterLink>

          {user && user.userType === 'government' ? (
            <RouterLink
              to="/dashboardGov"
              className="block py-2 px-4 text-blue-900 dark:text-blue-200 hover:text-amber-600 rounded-md transition duration-300"
              onClick={closeMenu}
            >
              Dashboard
            </RouterLink>
          ) : (
            <RouterLink
              to="/dashboard"
              className="block py-2 px-4 text-blue-900 dark:text-blue-200 hover:text-amber-600 rounded-md transition duration-300"
              onClick={closeMenu}
            >
              Dashboard
            </RouterLink>
          )}

          {user && (
            <>
              <RouterLink
                to="/application"
                className="block py-2 px-4 text-blue-900 dark:text-blue-200 hover:text-amber-600 rounded-md transition duration-300"
                onClick={closeMenu}
              >
                Application
              </RouterLink>
              <button
                onClick={() => {
                  closeMenu();
                  logout();
                }}
                className="block py-2 px-4 text-left w-full text-blue-900 dark:text-blue-200 hover:text-amber-600 rounded-md transition duration-300"
              >
                Logout
              </button>
            </>
          )}

          {!user && (
            <RouterLink
              to="/login"
              className="block py-2 px-4 text-blue-900 dark:text-blue-200 hover:text-amber-600 rounded-md transition duration-300"
              onClick={closeMenu}
            >
              Login
            </RouterLink>
          )}

          <div className="py-2 px-4 flex justify-center">
            <ThemeToggle themeMode={themeMode} toggleTheme={toggleTheme} />
          </div>
        </div>
      )}
    </nav>





  );
};

export default Navigation;