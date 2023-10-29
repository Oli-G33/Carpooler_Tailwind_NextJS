'use client';
import React, { useState } from 'react';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

const page = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="w-80">
        {isLogin ? (
          <Login isLogin={isLogin} setIsLogin={setIsLogin} />
        ) : (
          <Register isLogin={isLogin} setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
};

export default page;
