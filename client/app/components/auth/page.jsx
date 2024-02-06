'use client';
import { useState } from 'react';
import { FormProvider } from '@/app/state/FormContext';
import FormSteps from './FormSteps';

export default function MultistepRegister() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-800">
      <div className="w-full bg-white border rounded-md max-2xl dark:bg-gray-600">
        <h1 className="text-xl font-semibold text-center">Register</h1>
        <FormProvider>
          <FormSteps />
        </FormProvider>
      </div>
    </div>
  );
}
