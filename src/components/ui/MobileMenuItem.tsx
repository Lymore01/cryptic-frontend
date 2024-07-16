import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export type MobileMenuProps = {
  menuTitle: string,
  href:string
};

const MobileMenuItem = ({menuTitle, href} : MobileMenuProps) => {
  return (
    <Link to={href}>
      <div className="w-full h-auto border border-[transparent] border-b-[grey]/60 py-4 px-2 flex justify-between hover:bg-primary">
        {menuTitle}
        <FaArrowRight size={18}/>
      </div>
    </Link>
  );
};

export default MobileMenuItem;
