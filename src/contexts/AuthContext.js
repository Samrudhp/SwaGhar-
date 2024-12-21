import React, { createContext, useState, useContext, useEffect } from 'react';
  
  const AuthContext = createContext(null);
  
  export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      const userType = localStorage.getItem('userType');
      if (token && userType) {
        setUser({ token, userType });
      }
      setLoading(false);
    }, []);
  
    const login = (token, userType) => {
      localStorage.setItem('token', token);
      localStorage.setItem('userType', userType);
      setUser({ token, userType });
    };
  
    const logout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('userType');
      setUser(null);
    };
  
    return (
      <AuthContext.Provider value={{ user, login, logout, loading }}>
        {!loading && children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => useContext(AuthContext);
  