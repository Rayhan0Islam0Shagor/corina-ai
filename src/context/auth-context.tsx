import { createContext, useContext, useState } from 'react';

interface InitialValuesProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const initialValues: InitialValuesProps = {
  currentStep: 1,
  setCurrentStep: () => undefined,
};

const authContext = createContext<InitialValuesProps>(initialValues);

const { Provider } = authContext;

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<number>(
    initialValues.currentStep,
  );

  const values = {
    currentStep,
    setCurrentStep,
  };

  return <Provider value={values}>{children}</Provider>;
};

export default AuthContextProvider;

export const useAuthContext = () => {
  const context = useContext(authContext);

  if (!authContext) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }

  return context;
};
