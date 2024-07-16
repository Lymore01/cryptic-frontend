

export type CardHoldingProps = {
    color:string, 
    icon:JSX.Element,
    currency:string,
    price:string,
    coin:string
}

const CoinHolding = ({color, icon, currency, price, coin} : CardHoldingProps) => {
  return (
    <div className={`cursor-pointer w-full h-[100px] rounded-lg capitalize flex flex-row gap-[20px] items-center justify-start p-0 md:p-4 ${color}`}>
        <span>
        {icon}
        </span>
        <div className="flex items-start justify-center flex-col gap-[5px]">
            <h1 className="font-semibold text-base md:text-sm">{currency}</h1>
            <p className="text-xs text-primary-200 md:text-xs">{price}</p>
            <p className="text-xs text-primary-300 md:text-xs">{coin}</p>
        </div>
    </div>
  )
}

export default CoinHolding