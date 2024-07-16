import WalletCard from "../shared/WalletCard";
import { walletItems } from "../../utils/constants";

const WalletHome = () => {
  return (
    <div className="w-full h-auto md:h-[380px] ">
      <div className="w-full flex-col flex gap-[10px] min-h-full">
        {walletItems.map((coin) => (
          <WalletCard
            id={coin.id}
            key={coin.id}
            coin={coin.coin}
            currency={coin.currency}
            price={coin.price}
            lot={coin.lot}
            perc={coin.perc}
            margin={coin.margin}
            icon={coin.icon}
            graph={coin.graph}
            color={coin.color}
            percColor={coin.percColor}
          />
        ))}
      </div>
    </div>
  );
};

export default WalletHome;
