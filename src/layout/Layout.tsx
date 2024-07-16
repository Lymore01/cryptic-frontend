import React from "react";
import LeftNavBar from "../components/ui/LeftNavBar";
import { useLocation } from "react-router-dom";

export type Children = {
  children: React.ReactNode;
  title: string;
};

const Layout = ({ children }: Children) => {
  const location = useLocation();

  return (
    <div className="bg-primary w-[100vw] h-max-screen md:h-screen flex justify-start">
      {["/sign-in", "/sign-up", "/create-key", "/"].includes(location.pathname) ? (
        <></>
      ) : (
        <nav className="w-[16%] h-full bg-[gray]/5 p-2 md:p-6 hidden md:block">
          <LeftNavBar />
        </nav>
      )}
      <main className="text-primary-200 flex-1 p-2 md:p-6 md:h-max-screen md:overflow-y-scroll">
        {children}
      </main>
    </div>
  );
};

export default Layout;
