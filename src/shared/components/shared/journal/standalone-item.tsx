import { StandaloneJournalItem } from "@/@types/types";
import Link from "next/link";
import Badge from "./Badge";
interface Props {
  standaloneItem: StandaloneJournalItem;
}
const StandaloneItem: React.FC<Props> = ({ standaloneItem }) => {
  return (
    <Link href={standaloneItem.link} className="mb-6 flex bg-[#ede6df] h-auto">
      <div className=" w-1/2 p-8 flex flex-col justify-around">
        <div className="text-[40px] leading-[48px]">{standaloneItem.title}</div>
        <div>{standaloneItem.subtitle}</div>
      </div>
      <div className="w-1/2 h-[380px] relative">
        <img
          src={standaloneItem.image}
          alt="1"
          className="block w-full h-full object-cover"
        />
        <Badge
          title={standaloneItem.badgeText}
          color={standaloneItem.badgeColor}
          className="left-0 bottom-0"
        />
      </div>
    </Link>
  );
};

export default StandaloneItem;
