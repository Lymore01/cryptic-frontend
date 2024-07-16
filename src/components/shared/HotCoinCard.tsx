export type HotCoinCardProps = {
  icon: JSX.Element;
  coin: string;
  price: string;
  change: string;
  changeColor: string;
};

const HotCoinCard = ({ icon, coin, price, change, changeColor }: HotCoinCardProps) => {
  return (
    <div className="w-full flex justify-between h-[30px] text-sm">
      <div className="flex flex-row gap-[5px] items-center justify-center">
        <div className={`size-[40px] rounded-md items-center justify-center flex relative cursor-pointer`}>
          {icon}
        </div>
        <p>{coin}</p>
      </div>
      <p>{price}</p>
      <p className={`${changeColor}`}>{change}</p>
    </div>
  );
};

export default HotCoinCard;
