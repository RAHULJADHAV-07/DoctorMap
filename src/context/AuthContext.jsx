// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved user data in localStorage
    const savedUser = localStorage.getItem('doctormap_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    const savedDarkMode = localStorage.getItem('doctormap_darkmode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('doctormap_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('doctormap_user');
  };

  const register = (userData) => {
    setUser(userData);
    localStorage.setItem('doctormap_user', JSON.stringify(userData));
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('doctormap_darkmode', JSON.stringify(newDarkMode));
  };

  const value = {
    user,
    login,
    logout,
    register,
    darkMode,
    toggleDarkMode,
    isAuthenticated: !!user,
    isDoctor: user?.role === 'doctor',
    isPatient: user?.role === 'patient'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};