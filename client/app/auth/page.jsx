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
      <div className="px-10 md:w-1/3">
        {isLogin ? (
          <Login isLogin={isLogin} setIsLogin={setIsLogin} />
        ) : (
          <Register isLogin={isLogin} setIsLogin={setIsLogin} />
        )}
      </div>

      {/* Background Image (2/3 of the width) */}
      <div className="w-0 p-1 md:w-2/3">
        <div className="h-full bg-center bg-cover auth-image">
          <Image
            src={AuthImage}
            alt="Background"
            width={1900}
            height={1000}
            className="rounded-md shadow-md"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
