import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('vernacular_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('vernacular_user');
      }
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock login verification
    const trimmedEmail = email.trim().toLowerCase();
    
    // Accept prototype test user OR any created user
    if ((trimmedEmail === 'student@example.com' && password === '123456') || 
        (trimmedEmail.length > 0 && password.length >= 4)) {
      const userData = {
        name: trimmedEmail === 'student@example.com' ? 'Priya Student' : trimmedEmail.split('@')[0],
        email: trimmedEmail,
        language: 'en'
      };
      setUser(userData);
      localStorage.setItem('vernacular_user', JSON.stringify(userData));
      return { success: true };
    } else {
      return { success: false, message: 'Incorrect email or password. Please try again.' };
    }
  };

  const signup = (name, email, password, language = 'en') => {
    if (!name || !email || !password) {
      return { success: false, message: 'Please fill in all fields.' };
    }
    const userData = {
      name,
      email: email.trim().toLowerCase(),
      language
    };
    setUser(userData);
    localStorage.setItem('vernacular_user', JSON.stringify(userData));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('vernacular_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
