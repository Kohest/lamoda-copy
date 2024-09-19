"use client";
import { useState } from "react";
import SliderElement from "./slider-element";
interface Props {
  sliderElements: any;
}
const SliderTemplate: React.FC<Props> = ({ sliderElements }) => {
  const [activeElement, setActiveElement] = useState(1);

  const handleClickAdd = () => {
    if (activeElement < sliderElements.length) {
      setActiveElement(activeElement + 1);
    }
  };
  const handleClickRemove = () => {
    if (activeElement > 1) {
      setActiveElement(activeElement - 1);
    }
  };
  return (
    <div className="flex w-full h-full overflow-hidden relative">
      <div className="flex">
        {sliderElements.map((item: any) => (
          <SliderElement
            title={item.title}
            activeElement={activeElement}
            link={item.link}
            image={item.image}
            video={item.video}
            subtitle={item.subtitle}
            key={item.id}
          />
        ))}
      </div>
      <div className="absolute h-16 bottom-0 right-0 z-10 flex items-center">
        <div className="flex items-center">
          <div
            onClick={handleClickRemove}
            className="w-4 h-4 cover cursor-pointer rotate-90"
            style={{
              background: "url(slider/arrow.svg) center center no-repeat",
            }}
          ></div>
          <div className="flex justify-between w-[30px] text-[13px] text-center mx-2">
            <span>{activeElement}</span>/<span>{sliderElements.length}</span>
          </div>
          <div
            onClick={handleClickAdd}
            className="w-4 h-4 cover cursor-pointer -rotate-90"
            style={{
              background: "url(slider/arrow.svg) center center no-repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SliderTemplate;
