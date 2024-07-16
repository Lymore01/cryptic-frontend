import { SiBitcoinsv } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";

import DashLayout from "./DashLayout";

const Send = () => {
  return (
    <DashLayout title="Send Crypto">
      <section className="w-full h-full items-center justify-center flex">
        <div className="w-[100%] md:w-[40%] mx-auto h-full rounded-lg p-0 md:p-4 gap-[30px] flex flex-col">
          <div className="w-full h-[80px] md:h-[100px] rounded-lg py-2 bg-secondary flex flex-row justify-between items-center px-6 cursor-pointer mt-[10px] hover:bg-[gray]/20">
            <div className="flex gap-[10px] items-center justify-center">
              <SiBitcoinsv className="size-[40px] md:size-[50px]" fill="#ff9500" />
              <p className="text-sm md:text-base">BTC</p>
            </div>
            <span>
            <IoIosArrowForward className="size-[24px] md:size-[30px] cursor-pointer" />

            </span>
          </div>
          <div className="w-full flex flex-col gap-[5px]">
            <label htmlFor="address" className="text-primary-100 text-sm md:text-base">Address:</label>
            <span className="text-xs text-[gray]/60 capitalize">please provide or paste the receiver address</span>
            <input id="address" name="address" type="text" autoComplete="off" className="outline-none px-2 w-full bg-[transparent] h-[60px] border border-[gray]/20 placeholder:text-[gray]/60" placeholder="cdscsd232443-asxascdcds343"/>
          </div>
          <div className="w-full flex flex-col gap-[5px]">
            <label htmlFor="address" className="text-primary-100 text-sm md:text-base">Crypto amount:</label>
            <span className="text-xs text-[gray]/60 capitalize">please enter the amount you wish to send</span>
            <input id="address" name="address" type="number" className="outline-none px-2 w-full bg-[transparent] h-[60px] border border-[gray]/20 placeholder:text-[gray]/60" placeholder="34"/>
          </div>
          <div className="w-full h-auto flex flex-col text-[gray]/60 gap-[10px] text-sm md:text-sm">
            <div className="flex flex-row justify-between items-center"> 
              <span>Limit</span>
              <span>0.03 - 23 BTC</span>
            </div>
            <div className="flex flex-row justify-between items-center"> 
              <span>Fee</span>
              <span>0.0005 BTC</span>
            </div>
            <div className="flex flex-row justify-between items-center"> 
              <span>Available</span>
              <span>1.45 BTC</span>
            </div>
          </div>
          {/* button */}
          <div className="transition-all ease-in-out w-full h-[60px] md:h-[80px] p-4 bg-secondary items-center justify-center cursor-pointer rounded-lg flex hover:bg-[#ff9500]">
            <span className="font-semibold capitalize">send</span>
          </div>
        </div>

      </section>
      
    </DashLayout>
  );
};

export default Send;
