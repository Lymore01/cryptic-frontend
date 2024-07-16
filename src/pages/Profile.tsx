import DashLayout from "./DashLayout";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import CoinHolding from "../components/ui/CoinHolding";
import { activityItems, coinHoldings } from "../utils/constants";
import ActivityCard from "../components/ui/ActivityCard";

const Profile = () => {
  return (
    <DashLayout title="My Profile">
      <section className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-[20px]">
        <div className="flex flex-col gap-[20px] h-full py-4">
          <div className="flex flex-col justify-between gap-[30px]">
            {/* profile */}
            <div className="w-auto flex flex-row gap-[20px]">
              <div className="size-[160px]">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Rick_and_Morty_season_3.png/250px-Rick_and_Morty_season_3.png"
                  alt="profile image"
                  className="object-center object-cover size-full rounded-lg"
                />
              </div>
              <div className="w-auto flex flex-col gap-[10px] items-start justify-center">
                <h1 className="text-xl md:text-xl capitalize">Beta Tester</h1>
                <span className="text-primary-300 text-xs md:text-xs">@Sniper_Omil</span>
                <span className="text-primary-300 text-xs md:text-xs">
                  Join on 3 march 2023
                </span>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-[10px]">
                    <div className="size-[50px] flex cursor-pointer rounded-lg items-center justify-center">
                      <FaPhoneAlt size={24} />
                    </div>
                    <div className="size-[50px] flex cursor-pointer rounded-lg items-center justify-center">
                      <MdMarkEmailUnread size={24} />
                    </div>
                    <div className="size-[50px] flex cursor-pointer rounded-lg items-center justify-center">
                      <FaSquareXTwitter size={24} />
                    </div>
                  </div>
                  <div className="ml-[50px] md:flex w-full items-end justify-end hidden">
                    <div className="w-auto py-2 px-4 items-center justify-center flex rounded-lg cursor-pointer border border-[gray]/20">
                      <span className="capitalize text-sm">edit profile</span>
                    </div>
                  </div>
                </div>
                <div className="w-full block md:hidden">
                  <div className="w-auto py-2 px-4 items-center justify-center flex rounded-lg cursor-pointer border border-[gray]/20">
                    <span className="capitalize text-sm md:text-base">edit profile</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-[20px]">
              <h1 className="capitalize text-base md:text-sm text-primary-50">
                Coin holdings
              </h1>
              <div className="grid grid-cols-2 grid-rows-2 gap-[10px]">
                {coinHoldings.map((holding) => (
                  <CoinHolding
                    coin={holding.coin}
                    color={holding.color}
                    currency={holding.currency}
                    icon={holding.icon}
                    price={holding.price}
                    key={holding.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-[20px] md:gap-0">
            <h1 className="capitalize text-base md:text-base text-primary-50">
              My activities
            </h1>
            <div className="flex flex-row divide-x-2">
              <div className="w-[100px] h-[40px] bg-secondary flex cursor-pointer text-sm md:text-xs text-primary-300 items-center justify-center">
                Monthly
              </div>
              <div className="w-[100px] h-[40px] bg-secondary flex cursor-pointer text-sm md:text-xs text-primary-300 items-center justify-center">
                Weekly
              </div>
              <div className="w-[100px] h-[40px] bg-secondary flex cursor-pointer text-sm md:text-xs text-primary-300 items-center justify-center">
                Today
              </div>
            </div>
          </div>
          <div className="p-0 md:p-4 h-auto max-h-[600px] w-full bg-secondary flex  flex-col">
            {activityItems.map((activity, index) => (
              <ActivityCard
                key={index}
                icon={activity.icon}
                title={activity.title}
                date={activity.date}
                amount={activity.amount}
                status={activity.status}
                statusColor={activity.statusColor}
              />
            ))}
          </div>
        </div>
      </section>
    </DashLayout>
  );
};

export default Profile;
