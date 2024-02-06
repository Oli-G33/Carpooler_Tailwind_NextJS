import { useFormState } from '@/app/state/FormContext';
import React from 'react';
import { FullName } from './FullName';
import { ContactDetails } from './ContactDetails';
import { PasswordForm } from './PasswordForm';

const FormSteps = () => {
  const { step } = useFormState();
  switch (step) {
    case 1:
      return <FullName />;
    case 2:
      return <ContactDetails />;
    case 3:
      return <PasswordForm />;
    default:
      return null;
  }
};

export default FormSteps;
