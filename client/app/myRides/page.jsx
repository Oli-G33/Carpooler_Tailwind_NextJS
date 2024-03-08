'use client';
import React, { useState } from 'react';
import { Avatar } from '@nextui-org/avatar';
import { Pagination } from '@nextui-org/pagination';
import { Tabs, Tab } from '@nextui-org/react';

const index = () => {
  const tabs = ['confirmed', 'pending'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = tab => {
    setActiveTab(tab);
  };
  console.log(activeTab);

  const colors = ['primary', 'secondary', 'success', 'warning', 'danger'];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="flex w-auto">
        {/*Tab Selector */}
        <nav className="flex my-8 ">
          {/* {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={` text-xs md:text-lg w-auto
                 transition duration-1000 px-4 py-2 ${
                   activeTab === tab
                     ? 'bg-blue-700 text-white'
                     : 'bg-gray-300 text-gray-600'
                 }`}
            >
              {`${tab.charAt(0).toUpperCase()}${tab.slice(1)} Rides`}
            </button>
          ))} */}

          <Tabs color="primary" aria-label="Tabs colors" radius="md">
            <Tab title="Confirmed Rides" />
            <Tab title="Pending Rides" />
          </Tabs>
        </nav>
      </div>
      <div className="w-2/3 md:w-1/3">
        <div className="rounded-lg">
          {/* Skeleton */}
          <div className="flex items-center p-4 bg-gray-200 border border-gray-300 rounded-lg dark:bg-slate-500">
            {/* Avatar and Date */}
            <div className="flex items-center w-auto space-x-4">
              <div className="w-8 h-8 bg-gray-300 rounded-full md:w-12 md:h-12">
                <Avatar
                  src="https://flowbite.com/docs/images/logo.svg"
                  alt="Flowbite Logo"
                  width="75"
                  height="75"
                  className="object-cover w-full h-full border-gray-500 rounded-full"
                />
              </div>
              <div>
                <div className="w-auto text-xs md:text-lg">Oliver Garcia</div>
                <div className="w-auto text-xs md:text-base">27.08.2024</div>
              </div>
            </div>
            {/* Icons on the right */}
            <div className="flex items-center ml-auto space-x-4">
              {/* WhatsApp Icon */}
              <div className="w-6 h-6 bg-gray-300 rounded-full md:w-8 md:h-8"></div>
              {/* Delete Icon */}
              <div className="w-6 h-6 bg-gray-300 rounded-full md:w-8 md:h-8"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 transform -translate-x-1/2 left-1/2">
          <Pagination
            total={4}
            initialPage={1}
            variant="bordered"
            color="primary"
            showControls
            loop
            className="overflow-x-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
