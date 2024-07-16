import Logo from "../components/shared/Logo";
import  { Toaster } from 'react-hot-toast';



export type AuthLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const AuthLayout = ({ title, children }: AuthLayoutProps) => {
  return (
    <main className="w-full md:w-[30%] md:mx-auto h-screen max-h-screen flex flex-col gap-[20px] p-4 relative">
      <div>
        <Toaster />
      </div>
      <div className="flex items-start justify-start w-[240px]">
        <Logo />
      </div>
      <h1 className="text-xl md:text-lg capitalize px-4">{title}</h1>
      {children}
      <footer className="flex  w-full h-auto border border-[transparent] border-t-secondary mt-[20px] py-4 items-center justify-center flex-col gap-[10px]">
        <span className="text-xs text-[grey]/60">
          Made with ❤ by Kelly Limo.
        </span>
        <span className="capitalize text-xs text-center text-[grey]/60">
          copyright 2024. all rights reserved
        </span>
      </footer>
    </main>
  );
};

export default AuthLayout;
