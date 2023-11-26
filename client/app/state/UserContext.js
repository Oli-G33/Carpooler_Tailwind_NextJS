'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { loginUser } from '../services/auth';
import { useRouter } from 'next/navigation';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Function to set user data in both state and local storage with expiration
  const setUserAndLocalStorage = userData => {
    const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days
    const userDataWithExpiration = { ...userData, expirationTime };
    setUser(userData.user);
    localStorage.setItem('user', JSON.stringify(userDataWithExpiration));
  };

  const handleLogin = async credentials => {
    try {
      const userData = await loginUser(credentials);
      setUserAndLocalStorage(userData);
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
    }
  };

  const handleSignOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/auth');
  };

  // Effect to check local storage for user data on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      // Check if the data has not expired
      if (
        !parsedUser.expirationTime ||
        new Date().getTime() < parsedUser.expirationTime
      ) {
        setUser(parsedUser.user);
      } else {
        // Clear local storage if data has expired
        localStorage.removeItem('user');
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, handleLogin, handleSignOut }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
