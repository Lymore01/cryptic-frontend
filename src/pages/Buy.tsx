import { SiLitecoin } from "react-icons/si";
import DashLayout from "./DashLayout";
import { IoIosArrowForward } from "react-icons/io";

const Buy = () => {
  return (
    <DashLayout title="Buy Crypto">
      <section className="w-full h-full items-center justify-center flex">
        <div className="w-[100%] md:w-[40%] mx-auto h-full rounded-lg p-0 md:p-4 gap-[30px] flex flex-col">
          <div className="w-full h-[80px] md:h-[100px] rounded-lg py-2 bg-secondary flex flex-row justify-between items-center px-6 cursor-pointer mt-[10px] hover:bg-[gray]/20">
            <div className="flex gap-[10px] items-center justify-center">
              <SiLitecoin
                className="size-[40px] md:size-[50px]"
                fill="#00a6e9"
              />
              <p className="text-sm md:text-base">LTC</p>
            </div>
            <span>
              <IoIosArrowForward size={30} className="cursor-pointer" />
            </span>
          </div>
          <div className="w-full flex flex-col gap-[5px]">
            <label htmlFor="address" className="text-primary-100 text-sm md:text-base">
              Payment Method:
            </label>
            <span className="text-xs text-[gray]/60 ">
              Please enter your payment method (M-pesa, debit card, etc)
            </span>
            <input
              id="address"
              name="address"
              type="text"
              autoComplete="off"
              className="outline-none px-2 w-full bg-[transparent] h-[60px] border border-[gray]/20 placeholder:text-[gray]/60"
              placeholder="M-pesa"
            />
          </div>
          <div className="w-full flex flex-col gap-[5px]">
            <label htmlFor="address" className="text-primary-100 text-sm md:text-base">
              Enter amount:
            </label>
            <span className="text-xs text-[gray]/60 capitalize">
              please enter the amount you wish to send
            </span>
            <input
              id="address"
              name="address"
              type="number"
              className="outline-none px-2 w-full bg-[transparent] h-[60px] border border-[gray]/20 placeholder:text-[gray]/60"
              placeholder="34"
            />
          </div>
          <div className="w-full flex flex-col gap-[5px]">
            <label htmlFor="address" className="text-primary-100 text-sm md:text-base">
              Crypto to receive:
            </label>
            <input
              id="text"
              name="address"
              type="number"
              className="outline-none px-2 w-full bg-[transparent] h-[60px] border border-[gray]/20 placeholder:text-[gray]/60"
              placeholder="0.00345 LTC"
              disabled
            />
          </div>

          {/* button */}
          <div className="transition-all ease-in-out w-full h-[60px] md:h-[80px] p-4 bg-secondary items-center justify-center cursor-pointer rounded-lg flex hover:bg-[#ff9500]">
            <span className="font-semibold capitalize">Buy</span>
          </div>
        </div>
      </section>
    </DashLayout>
  );
};

export default Buy;
