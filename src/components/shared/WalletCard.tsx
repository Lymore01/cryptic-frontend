


export type WalletProps = {
    id:string, 
    icon: JSX.Element,
    coin:string, 
    currency:string, 
    price:string,
    lot:string, 
    perc:string,
    margin:string,
    graph:string,
    color:string,
    percColor:string
}

const WalletCard = ({icon, coin, currency, price, lot, perc, margin, graph, color, percColor} : WalletProps) => {
  return (
    <div className="w-full h-[100px] bg-secondary flex flex-row justify-between items-center px-6 cursor-pointer rounded-lg">
      <div className="flex flex-row gap-[10px]">
        <div className={`size-[40px] rounded-md border border-[grey]/20 ${color} items-center justify-center flex relative cursor-pointer`}>
          {icon}
        </div>
        <div className="flex flex-col gap-[6px]">
          <h1 className="text-primary-100 font-semibold">{coin}</h1>
          <p className="text-[gray]/60 text-xs font-semibold">{currency}</p>
          <p className="text-primary-200 text-xs">{price}</p>
        </div>
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <img src={graph} alt="graph-loss" className="w-[46%] h-[60%]"/>
      </div>
      <div className="flex flex-col gap-[6px] items-end">
          <h1 className="text-primary-100 font-semibold">{lot}</h1>
          <p className={`${percColor} text-xs font-semibold`}>{perc}</p>
          <p className="text-primary-200 text-xs">{margin}</p>
        </div>
    </div>
  );
};

export default WalletCard;


