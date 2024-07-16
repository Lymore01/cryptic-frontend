import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Send from "../../pages/Send";
import Buy from "../../pages/Buy";
import Market from "../../pages/Market";
import Dash from "../../pages/Dash";
import Wallet from "../../pages/Wallet";
import SignIn from "../../auth/SignIn";
import SignUp from "../../auth/SignUp";
import CreateKeys from "../../auth/CreateKeys";
import Landing from "../../pages/Landing";

const DashBoard = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("/home");

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <section className="p-2">
      {currentPath === "/home/overview" ? (
        <div><Dash /></div>
      ) : currentPath === "/home" ? (
        <div><Home /></div>
      ) : currentPath === "/home/wallet" ? (
        <div><Wallet /></div>
      ) : currentPath === "/home/market" ? (
        <div><Market /></div>
      ) : currentPath === "/home/profile" ? (
        <div><Profile /></div>
      ) : currentPath === "/home/buy" ? (
        <div><Buy /></div>
      ) : currentPath === "/home/send" ? (
        <div><Send /></div>
      ) :currentPath === "/sign-in" ? (
        <div><SignIn /></div>
      ) : currentPath === "/sign-up" ? (
        <div><SignUp /></div>
      ): currentPath === "/create-key" ? (
        <div><CreateKeys /></div>
      ): (
        <div><Landing /></div>
      )}
    </section>
  );
};

export default DashBoard;
