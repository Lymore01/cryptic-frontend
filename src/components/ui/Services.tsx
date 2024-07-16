import ServiceCard from "../shared/ServiceCard";
import { servicesItems } from "../../utils/constants";

const Services = () => {
  return (
    <div className="w-full h-auto md:h-[380px] ">
    <div className="w-full flex-col flex gap-[10px] min-h-full">
      {servicesItems.map((service) => (
        <ServiceCard
          key={service.title}
          image={service.image}
          title={service.title}
          description={service.description}
          status={service.status}
          statusColor={service.statusColor}
        />
      ))}
    </div>
    </div>
  );
};

export default Services;
