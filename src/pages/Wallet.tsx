import CryptoCard from "../components/shared/CryptoCard";
import { useUser } from "../contexts/userContext";
import { cryptoCards } from "../utils/constants";
import DashLayout from "./DashLayout";
import { IoCopy } from "react-icons/io5";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { useState } from "react";
import Loader from "../utils/Loader";

const Wallet = () => {
  const { data, loading, error } = useUser();
  const [copied, setCopied] = useState(false);

  const publicAddress = data?.publicAddress || '';

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
    <DashLayout title="Wallet">
      <section className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-[20px]">
        <div className="w-full flex flex-col gap-[5px]">
          <label
            htmlFor="address"
            className="text-primary-100 text-sm md:text-sm"
          >
            Public Address:
          </label>
          <span className="text-xs text-[gray]/60 capitalize">
            This is your public address, safe to share.
          </span>
          <div className="w-full flex flex-row border border-[gray]/20">
            <input
              id="address"
              name="address"
              type="text"
              autoComplete="off"
              className="outline-none px-2 w-full bg-[transparent] h-[60px] placeholder:text-[gray]/60 text-ellipsis"
              placeholder="cdscsd232443-asxascdcds343"
              disabled
              value={data?.publicAddress}
              onChange={() => {}}
            />
            <div className="h-full flex items-center justify-center px-4">
              <CopyToClipboard
                text={publicAddress}
                onCopy={() => setCopied(true)}
              >
                <IoCopy className="cursor-pointer" />
              </CopyToClipboard>
              {copied && toast.success("Copied!")}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[5px]">
          <label
            htmlFor="address"
            className="text-primary-100 text-sm md:text-sm"
          >
            Private Key:
          </label>
          <span className="text-xs text-[gray]/60 capitalize">
            please do not share or expose to any one, keep it safe.
          </span>
          <div className="w-full flex flex-row border border-[gray]/20">
            <input
              id="address"
              name="address"
              type="text"
              autoComplete="off"
              className="outline-none px-2 w-full bg-[transparent] h-[60px]  placeholder:text-[gray]/60 text-ellipsis"
              placeholder="cdscsd232443asxascdcds343"
              disabled
              value={data?.privateKey}
              onChange={() => {}}
            />
          </div>
        </div>
      </section>
      <div className="w-full items-start justify-start flex flex-col md:flex-col gap-[20px]">
        <h1 className="font-semibold capitalize">Your cards</h1>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-[20px] w-full">
          {cryptoCards.map((card, index) => (
            <CryptoCard
              key={index}
              gradientFrom={card.gradientFrom}
              gradientTo={card.gradientTo}
              coinName={card.coinName}
              coinLogo={card.coinLogo}
              cardNumber={card.cardNumber}
              expiryDate={card.expiryDate}
              cvv={card.cvv}
              cardHolder={card.cardHolder}
              icon1={card.icon1}
              icon2={card.icon2}
            />
          ))}
        </div>
      </div>
    </DashLayout>
  );
};

export default Wallet;
