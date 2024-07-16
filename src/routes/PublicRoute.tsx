/* eslint-disable @typescript-eslint/no-explicit-any */

import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-unused-vars */
const PublicRoute: FC = ({ children }: any) => {
  const authData: string | null = localStorage.getItem("cryptAuth");

  const user: string = authData !== null ? JSON.parse(authData) : "";

  return !user ? (
    <>
      {children}
      <Outlet />
    </>
  ) : (
    <Navigate to="/home" replace />
  );
};

export default PublicRoute;
