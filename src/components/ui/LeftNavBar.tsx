import Logo from "../shared/Logo";
import MenuItem from "./MenuItem";
import { RiHome7Fill } from "react-icons/ri";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdInsertChart } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiDashboardFill } from "react-icons/ri";
import { GiBuyCard } from "react-icons/gi";
import { BsFillSendPlusFill } from "react-icons/bs";
import { RiFolderReceivedFill } from "react-icons/ri";

const LeftNavBar = () => {
  return (
    <section className="size-full flex flex-col space-y-10">
      <Logo />
      <div className="flex flex-col mt-[16px] gap-[18px] px-4">
        <MenuItem
          icon={<RiDashboardFill className="size-[25px]" />}
          title={"overview"}
          key={1}
          href={"/home/overview"}
        />
        <MenuItem
          icon={<RiHome7Fill className="size-[25px]" />}
          title={"home"}
          key={2}
          href={"/home"}
        />
        <MenuItem
          icon={<MdAccountBalanceWallet className="size-[25px]" />}
          title={"wallet"}
          key={3}
          href={"/home/wallet"}
        />
        <MenuItem
          icon={<MdInsertChart className="size-[25px]" />}
          title={"market"}
          key={4}
          href={"/home/market"}
        />
        <MenuItem
          icon={<RiAccountCircleFill className="size-[25px]" />}
          title={"profile"}
          key={5}
          href={"/home/profile"}
        />
      </div>
      <div className="flex flex-col gap-[10px] px-4">
        <p className="text-primary-300">Transactions</p>
        <div className="flex flex-col mt-[24px] gap-[18px]">
          <MenuItem
            icon={<GiBuyCard className="size-[25px]" />}
            title={"buy"}
            key={6}
            href={"/home/buy"}
          />
          <MenuItem
            icon={<BsFillSendPlusFill className="size-[25px]" />}
            title={"send"}
            key={7}
            href={"/home/send"}
          />
          <MenuItem
            icon={<RiFolderReceivedFill className="size-[25px]" />}
            title={"receive"}
            key={8}
            href={"/home/receive"}
          />
        </div>
      </div>
    </section>
  );
};

export default LeftNavBar;
