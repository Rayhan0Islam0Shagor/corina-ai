import ButtonHandler from '@/components/form/sign-up/button-handler';
import SignUpFormProvider from '@/components/form/sign-up/form-provider';
import HighLightBar from '@/components/form/sign-up/highlight-bar';
import RegistrationFormStep from '@/components/form/sign-up/registration-step';

const SignUpPage = () => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <RegistrationFormStep />
            <ButtonHandler />
          </div>
          <HighLightBar />
        </SignUpFormProvider>
      </div>
    </div>
  );
};

export default SignUpPage;
