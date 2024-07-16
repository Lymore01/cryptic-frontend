import { Link, useLocation } from "react-router-dom";

export type MenuProps = {
  title: string;
  href: string;
  icon: JSX.Element;
};

const MenuItem = ({ icon, title, href }: MenuProps) => {
  const location = useLocation()

  return (
    <Link to={href}>
      <div className={`transition-all ease-in-out rounded-md w-full flex flex-row gap-[10px] capitalize text-primary-100 items-center border-4  border-[transparent] ${location.pathname !== href ? "border-[transparent]" : 
        "border-r-[#ff9500]" }`}>
        <span>{icon}</span>
        <p className="text-sm capitalize">{title}</p>
      </div>
    </Link>
  );
};

export default MenuItem;
