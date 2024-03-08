import React from 'react';
import { useTheme } from '../state/ThemeContext';

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 ">
      <div>
        <h1>Contact</h1>
        <div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-6">
            <div className="flex items-center justify-center border">1</div>
            <div className="flex items-center justify-center border">2</div>
            <div className="flex items-center justify-center border">3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
