import { SiBitcoinsv } from "react-icons/si";
import DashLayout from "./DashLayout";
import { IoIosArrowForward } from "react-icons/io";
import { MdPayments } from "react-icons/md";
// import { FaSave } from "react-icons/fa";

const Receive = () => {
  return (
    <DashLayout title="Receive Crypto">
      <section className="w-full h-full items-center justify-center flex">
        <div className="w-[100%] md:w-[30%] mx-auto h-full rounded-lg p-0 md:p-4 gap-[20px] md:gap-[30px] flex flex-col">
          <div className="w-full h-[80px] md:h-[100px] rounded-lg p-4 md:py-2 bg-secondary flex flex-row justify-between items-center md:px-6 cursor-pointer mt-[10px] hover:bg-[gray]/20">
            <div className="flex gap-[10px] items-center justify-center">
              <SiBitcoinsv
                className="size-[40px] md:size-[50px]"
                fill="#ff9500"
              />
            </div>
            <div className="items-center justify-center flex">
              <input
                id="amount"
                name="amount"
                type="number"
                className="outline-none px-2 w-[90%] md:w-full bg-[transparent] h-[50px] md:h-[60px] border border-[gray]/20 placeholder:text-[gray]/60 placeholder:text-sm"
                placeholder="Enter Amount"
              />
            </div>
            <span>
              <IoIosArrowForward className="size-[24px] md:size-[30px] cursor-pointer" />
            </span>
          </div>
          <div className="w-full h-[380px] gap-[20px] bg-secondary flex items-center justify-center flex-col rounded-lg">
            <span className="text-xs md:text-sm hidden md:flex capitalize mt-[10px] md:mt-0">
              Others scan with cryptic app to pay
            </span>
            {/* qr code */}
            <div className="flex size-auto mx-auto">
              <img
                src="https://insidebitcoins.com/wp-content/uploads/2020/03/Sfb0mlhPoB3YFephW0Zce1JIj6ZhcgTtyWDAvSmBGfYSpTR6Pio758K3fvx62a8e9cqJUvJRlVtNlVzWATvxM2XKlClTpkyZMmXK9Jz0fOq5eLPIsx4AAAAAElFTkSuQmCC.png"
                alt="qr code"
                className="size-full object-center object-cover"
              />
            </div>
            <div>
              <p className="text-[#ff9500] capitalize cursor-pointer text-xs md:text-sm">
                Clear currency / amount
              </p>
            </div>
            <div className="flex flex-row justify-between mx-auto w-[80%] md:w-[60%] p-2">
              <p className="text-[#ff9500] capitalize cursor-pointer text-xs md:text-sm">
                Save QR code
              </p>
              <p className="text-[#ff9500] capitalize cursor-pointer text-xs md:text-sm">
                Share QR code
              </p>
            </div>
          </div>
          <div className="w-full h-[50px] rounded-lg py-2 bg-secondary flex flex-row justify-between items-center px-6 cursor-pointer mt-[10px] hover:bg-[gray]/20">
            <div className="flex gap-[10px] items-center justify-center">
              <span>
                <MdPayments size={20} />
              </span>
              <p className="text-sm md:text-base">Payment link</p>
            </div>
            <span>
              <IoIosArrowForward className="size-[24px] md:size-[30px] cursor-pointer" />
            </span>
          </div>

          {/* button */}
        </div>
      </section>
    </DashLayout>
  );
};

export default Receive;
