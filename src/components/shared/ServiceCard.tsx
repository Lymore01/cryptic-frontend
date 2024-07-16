
export type ServiceProps = {
  image: string;
  title: string;
  description: string;
  status: string;
  statusColor: string;
};

const ServiceCard = ({ image, title, description, status, statusColor }: ServiceProps) => {
  return (
    <div className="w-full h-[140px] md:h-[100px] bg-secondary flex flex-col md:flex-row justify-between items-center p-4 md:py-0 md:px-6 cursor-pointer rounded-lg">
      <div className="w-full h-full gap-[20px] items-center justify-start flex flex-row">
        <div className="w-[120px] h-[70px] md:w-[70px] md:h-[70px] bg-[gray]/20 rounded-lg">
            <img src={image} alt={title} className="object-cover object-center size-full rounded-lg" />
        </div>
        <div className="h-full flex flex-col items-start justify-center">
          <h1 className="text-primary-200 text-base">{title}</h1>
          <p className="text-[gray]/60 text-xs ">
            {description}
          </p>
        </div>
      </div>
      <div className="h-full items-start justify-start mt-[20px] w-full md:w-auto">
        <div className={`bg-[orange]/50 w-[120px] flex items-center justify-center px-2 py-1 rounded-lg md:rounded-[99em] md:bg-[${statusColor}]/20 text-[orange] md:text-[${statusColor}] font-semibold`}>
          <span className="text-xs">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

