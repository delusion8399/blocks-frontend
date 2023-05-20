import {
  BsCircle,
  BsCreditCard,
  BsLightningCharge,
  BsLock,
  BsServer,
} from "react-icons/bs";
import { CgDisplayFlex } from "react-icons/cg";

interface FeatureCard {
  Icon?: any;
  title?: string;
  description?: string;
}

const features = [
  {
    title: "Effortless",
    desc: "Blocks requires no setup or complex configurations, making it incredibly user-friendly.",
    icon: BsCircle,
  },
  {
    title: "No Cost",
    desc: "Enjoy the full functionality of Blocks without any fees or limitations - it's free forever.",
    icon: BsCreditCard,
  },
  {
    title: "Blazing Speed",
    desc: "Storing your data is as quick as sending a simple HTTP request, ensuring swift performance.",
    icon: BsLightningCharge,
  },
  {
    title: "Flexible Integration",
    desc: "Leverage Blocks seamlessly with a backend server or directly within your web browser.",
    icon: CgDisplayFlex,
  },
  {
    title: "Self-Hosted Option",
    desc: "Utilize Blocks as a complimentary service or take complete control by hosting your personalized instance.",
    icon: BsServer,
  },
  {
    title: "Enhanced Security",
    desc: "Safeguard your valuable content with robust security measures, ensuring only authorized access to your Blocks.",
    icon: BsLock,
  },
];

function FeatureCard({ Icon, title, description }: FeatureCard) {
  return (
    <div className="border hover:shadow-lg py-6 px-3 flex justify-center flex-col items-center rounded-lg">
      <Icon size={50} className="mt-3" />
      <p className="font-bold my-3">{title}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <div className="grid grid-cols-3 gap-10 container max-w-4xl mx-auto bg-white">
      {features.map((feature, idx) => {
        return (
          <FeatureCard
            key={idx}
            Icon={feature.icon}
            title={feature.title}
            description={feature.desc}
          />
        );
      })}
    </div>
  );
}
