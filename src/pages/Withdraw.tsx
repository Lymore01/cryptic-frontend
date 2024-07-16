/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import toast from "react-hot-toast";
import DashLayout from "./DashLayout";
import { IoIosArrowForward } from "react-icons/io";

const Withdraw = () => {
  const authData: string | null = localStorage.getItem("cryptAuth");
  const user = authData ? JSON.parse(authData) : null;
  const [amount, setAmount] = useState<number>(0);

  const handleChange = (e: any) => {
    setAmount(e.target.value);
  };

  const handleWithdraw = async () => {
    try {
      if (amount < 0) {
        alert("Nope, please withdraw valid amount");
        return;
      }
      const res = await fetch(`/api/user/withdraw`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user,
          withdrawAmt: Number(amount) + 5,
        }),
      });

      if (!res.ok) {
        toast.error("Insufficient funds!");
        console.log("Insufficient funds!");
        return;
      }

      const result = await res.json();

      toast.success(result?.message);

      window.location.href = "/home/overview"
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <DashLayout title="Withdraw">
      <section className="w-full h-full items-center justify-center flex">
        <div className="w-[100%] md:w-[40%] mx-auto h-full rounded-lg p-0 md:p-4 gap-[30px] flex flex-col">
          <div className="w-full h-[80px] md:h-[100px] rounded-lg py-2 bg-secondary flex flex-row justify-between items-center px-6 cursor-pointer mt-[10px] hover:bg-[gray]/20">
            <div className="flex gap-[10px] items-center justify-center">
              <p className="text-sm md:text-base">KSH</p>
            </div>
            <span>
              <IoIosArrowForward className="size-[24px] md:size-[30px] cursor-pointer" />
            </span>
          </div>
          <div className="w-full flex flex-col gap-[5px]">
            <label
              htmlFor="deposit"
              className="text-primary-100 text-sm md:text-base"
            >
              Amount:
            </label>
            <span className="text-xs text-[gray]/60 capitalize">
              please enter the amount you want to withdraw
            </span>
            <input
              id="deposit"
              name="deposit"
              type="number"
              autoComplete="off"
              className="outline-none px-2 w-full bg-[transparent] h-[60px] border border-[gray]/20 placeholder:text-[gray]/60"
              placeholder="10"
              value={amount}
              onChange={handleChange}
            />
          </div>
          <div className="w-full h-auto flex flex-col text-[gray]/60 gap-[10px] text-sm md:text-sm">
            <div className="flex flex-row justify-between items-center">
              <span>Fee</span>
              <span>5 KSH</span>
            </div>
          </div>
          {/* button */}
          <div
            className="transition-all ease-in-out w-full h-[60px] md:h-[80px] p-4 bg-secondary items-center justify-center cursor-pointer rounded-lg flex hover:bg-[#ff9500]"
            onClick={handleWithdraw}
          >
            <span className="font-semibold capitalize">Withdraw</span>
          </div>
        </div>
      </section>
    </DashLayout>
  );
};

export default Withdraw;
