'use client';
import { useFormState } from '@/app/state/FormContext';
import { useForm } from 'react-hook-form';

export function ContactDetails() {
  const { onHandleNext, onHandleBack, step, setFormData, formData } =
    useFormState();

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
        <label htmlFor="Email">Email</label>
        <input
          id="Email"
          type="email"
          placeholder="Email"
          className="w-64 px-4 border rounded-md h-11"
          {...register('Email')}
        />
        <label htmlFor="PhoneNumber">Phone Number</label>
        <input
          id="PhoneNumber"
          type="text"
          placeholder="Phone Number"
          className="w-64 px-4 border rounded-md h-11"
          {...register('PhoneNumber')}
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

        <button className="px-6 bg-blue-800 rounded-md h-11">Next</button>
      </div>
    </form>
  );
}
