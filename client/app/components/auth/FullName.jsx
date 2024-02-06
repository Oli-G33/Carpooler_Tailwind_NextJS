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
        <label htmlFor="FirstName">First Name</label>
        <input
          id="FirstName"
          type="text"
          placeholder="First Name"
          className="w-64 px-4 border rounded-md h-11"
          {...register('FirstName')}
        />
        <label htmlFor="LastName">Last Name</label>
        <input
          id="LastName"
          type="text"
          placeholder="Last Name"
          className="w-64 px-4 border rounded-md h-11"
          {...register('LastName')}
        />
      </div>
      <div className="flex justify-end">
        <button className="px-6 bg-blue-800 rounded-md h-11">Next</button>
      </div>
    </form>
  );
}
