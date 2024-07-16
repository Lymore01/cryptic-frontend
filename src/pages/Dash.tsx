import DashLayout from "./DashLayout";
import { useUser } from "../contexts/userContext";
import { Link } from "react-router-dom";
import Loader from "../utils/Loader";

export type UserDataProps = {
  accountBalance: number;
  assetsBalance: number;
  apy: number;
  totalDepositAmount: number;
  totalWithdrawAmount: number;
};

const Dash = () => {
  const { data, loading, error } = useUser();

  if (loading) {
    return (
      <div className="w-screen h-screen bg-primary flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <DashLayout title="Overview">
      <div className="flex flex-col gap-[10px]">
        <p className="text-[gray]/60 text-sm md:text-xs">Hi, Beta</p>
        <h1 className="text-xl md:text-lg capitalize">Welcome to Cryptic✨</h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-[20px]">
        <div className="w-full h-auto flex items-start justify-start gap-[10px] flex-col lg/md:w-[50%] border border-[transparent] border-t-[grey]/20 mt-[10px] py-4">
          <span className="text-[grey]/80 text-sm md:text-xs">
            Current Balance
          </span>
          <div className="flex w-full flex-row justify-between items-center h-auto">
            <div className="flex-row gap-[5px] flex items-baseline font-semibold">
              <span className="text-2xl md:text-xl">
                ${data?.accountBalance}
              </span>
              <span className="text-sm">USD</span>
            </div>
            <div className="w-auto px-4 py-4 h-[34px] bg-[grey]/30 rounded-[99em] items-center justify-center flex drop-shadow-xl">
              <span className="text-sm text-[#4cbb17] font-semibold">
                +10.23%
              </span>
            </div>
          </div>
          <div>
            <span className="text-[grey]/90 font-semibold md:text-sm">
              0.00
            </span>
          </div>
          <div className="flex flex-row justify-between mt-[10px] text-xs w-full">
            <div className="flex flex-row gap-[6px] items-center justify-center">
              <div className="size-[12px] bg-[orangered] shadow-[orangered] rounded-full"></div>
              <span>Bitcoin: 0%</span>
            </div>
            <div className="flex flex-row gap-[6px] items-center justify-center">
              <div className="size-[12px] bg-[#1e90ff] shadow-[#1e90ff] rounded-full"></div>
              <span>ETH: 0%</span>
            </div>
            <div className="flex flex-row gap-[6px] items-center justify-center">
              <div className="size-[12px] bg-[yellow] shadow-[yellow] rounded-full"></div>
              <span>Solana: 0%</span>
            </div>
          </div>
          <div className="mt-[10px] justify-between w-full hidden flex-row gap-[5px] font-semibold text-sm  md:flex ">
            <Link
              to={"/home/deposit"}
              className="w-full h-[48px] bg-[#ff9500] items-center justify-center flex rounded-[99em] cursor-pointer drop-shadow-lg"
            >
              <span className="text-black">Deposit</span>
            </Link>
            <Link
              to={"/home/withdraw"}
              className="w-full h-[48px] bg-secondary items-center justify-center flex rounded-[99em] cursor-pointer drop-shadow-lg"
            >
              <span className="capitalize">Withdraw</span>
            </Link>
          </div>
        </div>
        <div className="mt-[10px] justify-between w-full flex flex-row gap-[5px] font-semibold text-sm lg/md:w-[50%] md:hidden">
          <Link
            to={"/home/deposit"}
            className="w-full h-[48px] bg-[#ff9500] items-center justify-center flex rounded-[99em] cursor-pointer drop-shadow-lg"
          >
            <span className="text-black">Deposit</span>
          </Link>
          <Link
            to={"/home/withdraw"}
            className="w-full h-[48px] bg-secondary items-center justify-center flex rounded-[99em] cursor-pointer drop-shadow-lg"
          >
            <span className="capitalize">Withdraw</span>
          </Link>
        </div>

        {/* 1 */}
        <div className="w-full h-auto flex items-start justify-start gap-[10px] flex-col lg/md:w-[50%] border border-[transparent] border-t-[grey]/20 mt-[10px] py-4">
          <span className="text-[grey]/80 text-sm md:text-xs">
            Total Deposits
          </span>
          <div className="flex w-full flex-row justify-between items-center h-auto">
            <div className="flex-row gap-[5px] flex items-baseline font-semibold">
              <span className="text-2xl md:text-xl">
                ${data?.totalDepositAmount}
              </span>
              <span className="text-sm">USD</span>
            </div>
            <div className="w-auto px-4 py-4 h-[34px] bg-[grey]/30 rounded-[99em] items-center justify-center flex drop-shadow-xl">
              <span className="text-sm text-[#4cbb17] font-semibold"></span>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="w-full h-auto flex items-start justify-start gap-[10px] flex-col lg/md:w-[50%] border border-[transparent] border-t-[grey]/20 mt-[10px] py-4">
          <span className="text-[grey]/80 text-sm md:text-xs">
            Total Withdraws
          </span>
          <div className="flex w-full flex-row justify-between items-center h-auto">
            <div className="flex-row gap-[5px] flex items-baseline font-semibold">
              <span className="text-2xl md:text-xl">
                ${data?.totalWithdrawAmount}
              </span>
              <span className="text-sm">USD</span>
            </div>
            <div className="w-auto px-4 py-4 h-[34px] bg-[grey]/30 rounded-[99em] items-center justify-center flex drop-shadow-xl">
              <span className="text-sm text-[#4cbb17] font-semibold"></span>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="w-full h-auto flex items-start justify-start gap-[10px] flex-col lg/md:w-[50%] border border-[transparent] border-t-[grey]/20 mt-[10px] py-4">
          <span className="text-[grey]/80 text-sm md:text-xs">
            Total Assets
          </span>
          <div className="flex w-full flex-row justify-between items-center h-auto">
            <div className="flex-row gap-[5px] flex items-baseline font-semibold">
              <span className="text-2xl md:text-xl">
                ${data?.assetsBalance}
              </span>
              <span className="text-sm">USD</span>
            </div>
            <div className="w-auto px-4 py-4 h-[34px] bg-[grey]/30 rounded-[99em] items-center justify-center flex drop-shadow-xl">
              <span className="text-sm text-[#4cbb17] font-semibold"></span>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="w-full h-auto flex items-start justify-start gap-[10px] flex-col lg/md:w-[50%] border border-[transparent] border-t-[grey]/20 mt-[10px] py-4">
          <span className="text-[grey]/80 text-sm">APY</span>
          <div className="flex w-full flex-row justify-between items-center h-auto">
            <div className="flex-row gap-[5px] flex items-baseline font-semibold">
              <span className="text-2xl text-[#4cbb17] md:text-xl">
                +{data?.apy}%
              </span>
              <span className="text-sm "></span>
            </div>
            <div className="w-auto px-4 py-4 h-[34px] bg-[grey]/30 rounded-[99em] items-center justify-center flex drop-shadow-xl"></div>
          </div>
        </div>
      </section>
    </DashLayout>
  );
};

export default Dash;
