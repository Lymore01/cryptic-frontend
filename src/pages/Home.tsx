import Carousel from "../components/ui/Carousel";
import Services from "../components/ui/Services";
import DashLayout from "./DashLayout";
import { FaArrowRight } from "react-icons/fa";
import WalletHome from "../components/ui/WalletHome";

const Home = () => {
  return (
    <DashLayout title="Home">
      <Carousel />
      <section className="grid grid-cols-1 md:grid-cols-2  md:grid-rows-1 gap-[20px] mt-[20px] md:mt-0">
        <div className="flex flex-col gap-[20px] h-full">
          <div className="flex flex-row justify-between">
            <h1 className="capitalize text-base md:text-base text-primary-300">
              our services
            </h1>
            <div className="size-[40px] rounded-md border border-[grey]/20 items-center justify-center md:flex relative cursor-pointer hidden">
              <FaArrowRight size={18} fill="white"/>
            </div>
            <FaArrowRight size={18} fill="white" className="block md:hidden"/>

          </div>
          <Services />
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-row justify-between">
            <h1 className="capitalize text-base md:text-base text-primary-300">Wallet</h1>
            <div className="size-[40px] rounded-md border border-[grey]/20 items-center justify-center md:flex relative cursor-pointer hidden">
              <FaArrowRight size={18} fill="white"/>
            </div>
            <FaArrowRight size={18} fill="white" className="block md:hidden"/>

          </div>
          <WalletHome />
        </div>
      </section>
    </DashLayout>
  );
};

export default Home;
