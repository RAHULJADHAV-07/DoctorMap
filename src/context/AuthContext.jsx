import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('doctormap_user');
    if (savedUser) setUser(JSON.parse(savedUser));

    const savedDarkMode = localStorage.getItem('doctormap_darkmode');
    if (savedDarkMode) setDarkMode(JSON.parse(savedDarkMode));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const register = async (userData) => {
    const existing = await api.get(`/users?email=${userData.email}`);
    if (existing.data.length > 0) throw new Error('Email already exists');

    const response = await api.post('/users', userData);
    setUser(response.data);
    localStorage.setItem('doctormap_user', JSON.stringify(response.data));
  };

  const login = async ({ email, password, role }) => {
    const res = await api.get(`/users?email=${email}&role=${role}`);
    const foundUser = res.data[0];

    if (!foundUser || foundUser.password !== password) {
      throw new Error('Invalid email or password');
    }

    setUser(foundUser);
    localStorage.setItem('doctormap_user', JSON.stringify(foundUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('doctormap_user');
  };

  const toggleDarkMode = () => {
    const mode = !darkMode;
    setDarkMode(mode);
    localStorage.setItem('doctormap_darkmode', JSON.stringify(mode));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        darkMode,
        toggleDarkMode,
        isAuthenticated: !!user,
        isDoctor: user?.role === 'doctor',
        isPatient: user?.role === 'patient',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};