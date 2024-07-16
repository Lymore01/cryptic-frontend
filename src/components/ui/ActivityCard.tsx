
export type ActivityCardProps = {
  icon: JSX.Element;
  title: string;
  date: string;
  amount: string;
  status: string;
  statusColor: string;
};

const ActivityCard = ({ icon, title, date, amount, status, statusColor }: ActivityCardProps) => {
  return (
    <div className="w-full h-[60px] py-2 bg-secondary flex flex-row justify-between items-center px-2 md:px-6 cursor-pointer mt-[10px] hover:bg-[gray]/20">
      <div className="flex flex-row gap-[10px]">
        <div className={`size-[40px] md:size-[40px] rounded-md border border-[grey]/20 items-center justify-center flex relative cursor-pointer`}>
          {icon}
        </div>
        <div className="flex flex-col w-[100px] items-start justify-center">
          <h1 className="text-primary-100 text-sm md:text-sm">{title}</h1>
          <p className="text-[gray]/60 text-xs md:text-xs">{date}</p>
        </div>
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <p className="text-sm md:text-sm">{amount}</p>
      </div>
      <div className="flex flex-col gap-[6px] items-end">
        <p className={`${statusColor}/100 text-xs md:text-xs font-semibold`}>{status}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
