import { Toaster } from '@/components/ui/toaster';

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default Providers;
