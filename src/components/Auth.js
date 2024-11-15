import React, { createContext, useState, useContext } from 'react';

// Create the Auth context
const AuthContext = createContext();

// Provide the Auth context
export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const signIn = (details) => {
    setIsSignedIn(true);
    setUserDetails(details);
  };

  const signOut = () => {
    setIsSignedIn(false);
    setUserDetails({});
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, userDetails, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth context
export const useAuth = () => useContext(AuthContext);
