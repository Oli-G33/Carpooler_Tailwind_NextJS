'use client';
import { useFormState } from '@/app/state/FormContext';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export function PasswordForm() {
  const [created, setCreated] = useState(false);
  const { onHandleNext, onHandleBack, step, setFormData, formData } =
    useFormState();
  const { register, handleSubmit } = useForm({ defaultValues: formData });

  function handleFormSubmit(data) {
    setFormData(previousFormData => ({ ...previousFormData, ...data }));
    setCreated(true);
  }

  return created ? (
    <div>
      {' '}
      <h1>Account Created Successfully</h1>
      <pre>{JSON.stringify(formData)}</pre>
    </div>
  ) : (
    <form
      className="p-8 space-y-6 w-72"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="Password">Password</label>
        <input
          id="Password"
          type="password"
          placeholder="Password"
          className="w-64 px-4 border rounded-md h-11"
          {...register('Password')}
          required
        />
        <label htmlFor="ConfirmPassword">Confirm Password</label>
        <input
          id="ConfirmPassword"
          type="password"
          placeholder="ConfirmPassword"
          className="w-64 px-4 border rounded-md h-11"
          {...register('ConfirmPassword')}
        />
      </div>
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onHandleBack}
          className="px-6 bg-blue-800 rounded-md h-11"
        >
          Previous
        </button>
        <button className="px-6 bg-blue-800 rounded-md h-11">Submit</button>
      </div>
    </form>
  );
}
