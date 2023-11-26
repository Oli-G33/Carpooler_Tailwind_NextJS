'use client';
import React, { useState } from 'react';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Image from 'next/image';
import AuthImage from './auth-background-img.jpg';

const Page = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="mx-6 md:w-1/3">
        {isLogin ? (
          <Login isLogin={isLogin} setIsLogin={setIsLogin} />
        ) : (
          <Register isLogin={isLogin} setIsLogin={setIsLogin} />
        )}
      </div>

      {/* Background Image (2/4 of the width) */}
      <div className="md:w-2/3">
        <div className="h-full bg-center bg-cover auth-image">
          <Image
            src={AuthImage}
            alt="B"
            width={1900}
            height={1000}
            className="rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
