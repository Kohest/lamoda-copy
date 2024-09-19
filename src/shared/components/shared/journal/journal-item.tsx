import { TJournalItem } from "@/@types/types";
import Badge from "./Badge";
import Link from "next/link";
import { cn } from "@/lib/cnUtil";

interface Props {
  journalItem: TJournalItem;
}
const JournalItem: React.FC<Props> = ({ journalItem }) => {
  return (
    <div
      className={cn(
        "w-[384px] relative",
        !journalItem.image && "p-8 bg-[#EDE6DF]"
      )}
    >
      <div className="relative mb-4 ">
        {journalItem.image && (
          <img src={journalItem.image} alt={journalItem.title} />
        )}
        <Badge
          title={journalItem.badgeText}
          color={journalItem.badgeColor}
          className={cn(journalItem.image ? "left-0 bottom-0" : "static")}
        />
      </div>
      <Link
        href={journalItem.link}
        className="absolute w-full h-full top-0 left-0"
      />
      <div className="text-[22px]">
        <div>{journalItem.title}</div>
      </div>
    </div>
  );
};

export default JournalItem;
