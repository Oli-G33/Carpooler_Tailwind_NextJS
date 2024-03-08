import { createContext, useContext, useState } from 'react';

const FormContext = createContext({
  onHandleBack: () => {},
  onHandleNext: () => {},
  step: 1,
  formData: {
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Password: '',
    Picture: ''
  },
  setFormData: () => {}
});

export function FormProvider({ children }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  function onHandleNext() {
    setStep(previousValue => previousValue + 1);
    console.log(step);
  }

  function onHandleBack() {
    setStep(previousValue => previousValue - 1);
  }

  console.log({ formData });

  return (
    <FormContext.Provider
      value={{ onHandleNext, onHandleBack, step, formData, setFormData }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
