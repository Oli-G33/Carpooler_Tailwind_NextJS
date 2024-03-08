'use client';
import { useState } from 'react';
import { FormProvider, useFormState } from '@/app/state/FormContext';
import FormSteps from './FormSteps';

export default function MultistepRegister() {
  const { step } = useFormState();
  const totalSteps = 4;

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-md dark:bg-gray-600 p-8 bg-white shadow-lg h-2/3 rounded-xl min-h-[450px] min-w-[310px] md:min-w-0">
        <h2 className="flex items-center justify-center mb-6 text-2xl font-semibold text-center text-blue-800 dark:text-gray-200">
          Register
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
            />
          </svg>
        </h2>

        <div className="mb-4">
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="relative pt-1">
              <div className="flex items-center justify-end mb-2">
                {/* <div>
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 uppercase bg-blue-200 rounded-full">
                      Step {step}
                    </span>
                  </div> */}
                <div className="text-right">
                  <span className="inline-block text-xs font-semibold text-blue-600 dark:text-gray-200">
                    {step} of {totalSteps}
                  </span>
                </div>
              </div>
              <div className="flex h-2 mb-4 overflow-hidden bg-gray-300 rounded">
                <div
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                  className="flex flex-col justify-center text-center text-white bg-blue-500 shadow-none whitespace-nowrap"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <FormProvider>
          <FormSteps />
        </FormProvider>
      </div>
    </div>
  );
}
