import { TMoreBanner } from "@/@types/types";
import { cn } from "@/lib/cnUtil";
import MoreBannerElement from "./more-banner-element";
interface Props {
  className?: string;
  moreBannerElements: TMoreBanner[];
}
const MoreBanner: React.FC<Props> = ({ className, moreBannerElements }) => {
  return (
    <div className={cn("flex justify-between", className)}>
      {moreBannerElements.map((item) => (
        <MoreBannerElement
          title={item.title}
          subtitle={item.subtitle}
          image={item.imageUrl}
          link={item.link}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default MoreBanner;
