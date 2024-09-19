import { footerItem, TFooterLink } from "@/@types/types";
import Link from "next/link";
interface Props {
  footerItem: footerItem;
}
const FooterItem: React.FC<Props> = ({ footerItem }) => {
  return (
    <div className="w-1/4">
      <div className="text-[18px] mb-4">{footerItem.title}</div>
      {footerItem.items.map((item: TFooterLink) => (
        <div className="mb-8 text-[11px]" key={item.title}>
          <Link href={item.link} className="mb-6 block">
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FooterItem;
