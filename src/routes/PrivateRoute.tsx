/* eslint-disable @typescript-eslint/no-explicit-any */

import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-unused-vars */
const PrivateRoute:FC = ({children}:any) => {
  const authData: string | null = localStorage.getItem("cryptAuth");

  const user: string = authData !== null ? JSON.parse(authData) : "";
  
  return user? (
  <>
    {children}
    <Outlet />
  </>
) : (
  <Navigate to="/sign-in" replace /> 
);
};

export default PrivateRoute;
