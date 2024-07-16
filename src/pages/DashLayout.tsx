import { useState } from "react";
import { Children } from "../layout/Layout";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { mobileMenuItems } from "../utils/constants";
import { TiThMenu } from "react-icons/ti";
import Logo from "../components/shared/Logo";
import { motion } from "framer-motion";
import MobileMenuItem from "../components/ui/MobileMenuItem";
import { HiLogout } from "react-icons/hi";
import { Toaster } from "react-hot-toast";

const DashLayout = ({ children, title }: Children) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () =>{
    localStorage.removeItem("cryptAuth")
    window.location.href = "/sign-in"
  }

  return (
    <>
    <Toaster />
    <main className="w-full h-max-screen min-h-screen md:h-full flex flex-col gap-[10px] md:gap-[30px]  relative">
      <nav className="flex flex-col md:flex-row justify-between  items-start md:items-center relative">
        <h1 className="text-primary-50 text-xl hidden md:block">{title}</h1>
        <div className="w-full md:w-auto h-auto p-2 bg-secondary rounded-lg flex flex-row gap-[10px] items-center justify-end md:justify-normal relative">
          <div className="absolute inset-0 h-full w-[140px] p-2 items-center flex md:hidden">
            <Logo />
          </div>
          <div className="size-[50px] rounded-full bg-current hidden md:block">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Rick_and_Morty_season_3.png/250px-Rick_and_Morty_season_3.png"
              alt="profile image"
              className="object-center object-cover size-full rounded-full"
            />
          </div>
          <div className="flex-col items-start justify-start text-xs text-primary-300 hidden md:flex">
            <span className="text-primary-100 text-sm">Kelly Limo</span>
            <span>@Sniper_Kelly</span>
          </div>
          <div className="size-[40px] rounded-md border border-[grey]/20 items-center justify-center flex relative cursor-pointer">
            <IoNotificationsCircleOutline size={25} />
            <div className="absolute inset-0 size-full flex items-center justify-center">
              <div className="size-[10px] rounded-full bg-[#ff9500] mt-[-22px] mr-[-18px]"></div>
            </div>
          </div>
          <div
            className="size-[40px] rounded-md border border-[grey]/20 items-center justify-center relative cursor-pointer flex md:hidden"
            onClick={handleMenuToggle}
          >
            <TiThMenu size={25} />
          </div>
        </div>
        {isMenuOpen && (
          <motion.div className="w-full h-screen bg-secondary rounded-b-lg flex flex-col md:hidden px-2 py-4 transition-all ease-in-out gap-[5px]">
            {mobileMenuItems.map((menu) => (
              <MobileMenuItem
                key={menu.id}
                menuTitle={menu.menuTitle}
                href={menu.href}
              />
            ))}
            <div onClick={handleLogOut} className="w-full h-[100px] items-end justify-end flex max-h-screen">
              <HiLogout size={24} />
            </div>
          </motion.div>
        )}
        <h1 className="text-[grey]/60 block md:hidden text-sm mt-[20px]">
          {title}
        </h1>
      </nav>

      {children}

      <footer className="flex md:hidden w-full h-auto border border-[transparent] border-t-secondary mt-[20px] py-4 items-center justify-center flex-col gap-[10px]">
        <span className="text-xs text-[grey]/60">
          Made with ❤ by Kelly Limo.
        </span>
        <span className="capitalize text-xs text-center text-[grey]/60">
          copyright 2024. all rights reserved
        </span>
      </footer>
    </main>
    </>
  );
};

export default DashLayout;
