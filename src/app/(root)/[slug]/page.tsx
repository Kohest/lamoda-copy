import Actual from "@/shared/components/shared/actual/actual";
import { Container } from "@/shared/components/shared/additional/Container";
import Journal from "@/shared/components/shared/journal/journal";
import LongBanner from "@/shared/components/shared/banners/long-banner/long-banner";
import MainBanner from "@/shared/components/shared/banners/main-banner/main-banner";
import MoreBanner from "@/shared/components/shared/banners/more-banner/more-banner";
import AutoSwiper from "@/shared/components/shared/sliders/auto-swiper/auto-swiper";
import CategorySlider from "@/shared/components/shared/sliders/category-slider/category-slider";
import ProductSlider from "@/shared/components/shared/sliders/product-slider/product-slider";
import { cn } from "@/lib/cnUtil";
import { Categories, SessionType } from "@/@types/types";
import { Api } from "@/lib/services/api-client";
import { getUserSession } from "@/lib/get-user-session";
import { notFound } from "next/navigation";

const HomePage = async ({ params: { slug } }: { params: { slug: string } }) => {
  let data;

  try {
    data = await Api.page.getPageInfo(slug);
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      return notFound();
    } else {
      throw new Error("Произошла ошибка при получении данных");
    }
  }
  const session: SessionType | null = await getUserSession();
  return (
    <div className="relative">
      <Container className="w-full">
        <MainBanner
          bannerElements={data.mainBanners[0]}
          className={cn("mt-[22px] main_banner1")}
        />
        <ProductSlider
          session={session}
          sliderBody={data.productSliders[0]}
          slug={slug}
          className="mb-8"
        />
        <CategorySlider
          className="mb-16"
          categories={data.categories as Categories[]}
        />
        <LongBanner adBanner={data.adBanner} className="mb-16" />
        <MainBanner
          bannerElements={data.mainBanners[1]}
          className="main_banner2"
        />
        <Journal journal={data.journal} />
        <ProductSlider
          sliderBody={data.productSliders[1]}
          slug={slug}
          session={session as SessionType}
        />
        <Actual className="mb-16" actualElements={data.relevantSection} />
        <MoreBanner
          className="mb-16"
          moreBannerElements={data.advertisements}
        />
        <AutoSwiper swiperElements={data.sliders} className="mb-16" />
      </Container>
    </div>
  );
};

export default HomePage;
