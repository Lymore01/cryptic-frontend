export type CryptoCardProps = {
  gradientFrom: string;
  gradientTo: string;
  coinName: string;
  coinLogo: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolder: string;
  icon1: string;
  icon2: string;
};

const CryptoCard = ({
  gradientFrom,
  gradientTo,
  coinName,
  coinLogo,
  cardNumber,
  expiryDate,
  cvv,
  cardHolder,
  icon1,
  icon2,
}: CryptoCardProps) => {
  return (
    <div
      className={`w-full max-w-sm md:max-w-md mx-auto p-6 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl shadow-lg cursor-pointer`}
    >
      <div className="flex justify-between items-center mb-6 md:mb-4">
        <div className="text-white">
          <h2 className="text-lg font-bold">Crypto Card</h2>
          <p className="text-xs">{coinName}</p>
        </div>
        <img
          src={coinLogo}
          alt="Crypto Logo"
          className="w-12 h-12 object-cover rounded-full"
        />
      </div>
      <div className="text-white mb-4 md:mb-3">
        <p className="text-base">Card Number</p>
        <p className="text-sm font-mono tracking-widest">{cardNumber}</p>
      </div>
      <div className="flex justify-between text-white mb-4 md:mb-3">
        <div>
          <p className="text-sm">Expiry Date</p>
          <p className="text-base font-mono">{expiryDate}</p>
        </div>
        <div>
          <p className="text-sm">CVV</p>
          <p className="text-base font-mono">{cvv}</p>
        </div>
      </div>
      <div className="flex justify-between text-white">
        <div>
          <p className="text-sm">Card Holder</p>
          <p className="text-sm font-mono">{cardHolder}</p>
        </div>
        <div className="flex space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
            <span className="text-lg text-white font-semibold">{icon1}</span>
          </div>
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
            <span className="text-lg text-white font-semibold">{icon2}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
