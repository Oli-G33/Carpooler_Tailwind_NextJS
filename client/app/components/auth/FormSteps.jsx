import { useFormState } from '@/app/state/FormContext';
import React from 'react';
import { FullName } from './FullName';
import { ContactDetails } from './ContactDetails';
import { PasswordForm } from './PasswordForm';
import { AvatarForm } from './AvatarForm';

const FormSteps = () => {
  const { step } = useFormState();
  switch (step) {
    case 1:
      return <FullName step />;
    case 2:
      return <ContactDetails step />;
    case 3:
      return <AvatarForm step />;
    case 4:
      return <PasswordForm step />;
    default:
      return null;
  }
};

export default FormSteps;
