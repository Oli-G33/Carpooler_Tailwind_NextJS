'use client';
import { useFormState } from '@/app/state/FormContext';
import { useForm } from 'react-hook-form';

export function FullName() {
  const { onHandleNext, setFormData, step, formData } = useFormState();
  const { register, handleSubmit } = useForm({ defaultValues: formData });

  function handleFormSubmit(data) {
    setFormData(previousFormData => ({ ...previousFormData, ...data }));
    onHandleNext();
  }

  return (
    <form
      className="p-8 space-y-6 w-72"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="FirstName"
          className="block mb-2 text-sm font-bold text-blue-800 dark:text-gray-200"
        >
          First Name
        </label>
        <input
          id="FirstName"
          type="text"
          placeholder="First Name"
          className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
          {...register('FirstName')}
        />
        <label
          htmlFor="LastName"
          className="block mb-2 text-sm font-bold text-blue-800 dark:text-gray-200"
        >
          Last Name
        </label>
        <input
          id="LastName"
          type="text"
          placeholder="Last Name"
          className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
          {...register('LastName')}
        />
      </div>
      <div className="flex justify-end">
        <button className="px-6 bg-blue-800 rounded-md h-11">
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
