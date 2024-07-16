import DashLayout from "./DashLayout";
import { hotCoinItems, newListingsItems } from "../utils/constants";
import HotCoinCard from "../components/shared/HotCoinCard";
import NewListingCard from "../components/shared/NewListingCard";

const Market = () => {
  return (
    <DashLayout title="Market Overview">
      <section className="w-full md:h-[80vh] mt-[20px] flex flex-col gap-[20px]">
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-[20px]">
          <div className="p-4 w-full h-[220px] bg-secondary rounded-lg cursor-pointer flex flex-col gap-[20px]">
            <div className="w-full flex justify-between items-center">
              <p className="text-primary-300 capitalize text-sm">Hot coins</p>
              <button className="w-auto py-1 px-3 items-center justify-center rounded-[99em] bg-[#ff9500] text-primary-50 capitalize text-xs">
                More
              </button>
            </div>
            <div className="w-full flex flex-col gap-[10px]">
              {hotCoinItems.map((coin, index) => (
                <HotCoinCard
                  key={index}
                  icon={coin.icon}
                  coin={coin.coin}
                  price={coin.price}
                  change={coin.change}
                  changeColor={coin.changeColor}
                />
              ))}
            </div>
          </div>
          <div className="w-full h-[220px] bg-secondary rounded-lg cursor-pointer">
            <div className="p-4 w-full h-[220px] bg-secondary rounded-lg cursor-pointer flex flex-col gap-[20px]">
              <div className="w-full flex justify-between items-center">
                <p className="text-primary-300 capitalize text-sm">
                  New listings
                </p>
                <button className="w-auto py-1 px-3 items-center justify-center rounded-[99em] bg-[#ff9500] text-primary-50 capitalize text-xs">
                  More
                </button>
              </div>
              <div className="w-full flex flex-col gap-[10px]">
                {newListingsItems.map((coin, index) => (
                  <NewListingCard
                    key={index}
                    icon={coin.icon}
                    coin={coin.coin}
                    price={coin.price}
                    change={coin.change}
                    changeColor={coin.changeColor}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-[220px] bg-secondary rounded-lg cursor-pointer">
            <div className="p-4 w-full h-[220px] bg-secondary rounded-lg cursor-pointer flex flex-col gap-[20px]">
              <div className="w-full flex justify-between items-center">
                <p className="text-primary-300 capitalize text-sm">
                  Top Gainers
                </p>
                <button className="w-auto py-1 px-3 items-center justify-center rounded-[99em] bg-[#ff9500] text-primary-50 capitalize text-xs">
                  More
                </button>
              </div>
              <div className="w-full flex flex-col gap-[10px]">
                {hotCoinItems.map((coin, index) => (
                  <HotCoinCard
                    key={index}
                    icon={coin.icon}
                    coin={coin.coin}
                    price={coin.price}
                    change={coin.change}
                    changeColor={coin.changeColor}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full h-full p-4 bg-secondary rounded-lg">
          <table className="table-auto">
            <thead >
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>24H Change</th>
                <th>24H Volume</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BTC</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </section>
    </DashLayout>
  );
};

export default Market;
