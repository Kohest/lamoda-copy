import SliderTemplate from "../../sliders/home-slider/slider-template";
import { TMainBanner } from "@/@types/types";
import MainBannerItem from "./main-banner-item";
interface Props {
  bannerElements: TMainBanner;
  className?: string;
}
const MainBanner: React.FC<Props> = ({ bannerElements, className }) => {
  return (
    <div className={className}>
      <SliderTemplate sliderElements={bannerElements.sliderElements} />
      {bannerElements.items.map((item) => (
        <MainBannerItem
          link={item.link}
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default MainBanner;
