import { TRelevantSection } from "@/@types/types";
import ActualElement from "./actual-element";

interface Props {
  className?: string;
  actualElements: TRelevantSection;
}
const Actual: React.FC<Props> = ({ className, actualElements }) => {
  return (
    <div className={className}>
      <h2 className="text-[22px] mb-4">Актуально</h2>
      <div className="flex justify-between">
        {actualElements.sections.map((item) => (
          <ActualElement
            title={item.title}
            subtitle={item.subtitle}
            link={item.link}
            image={item.imageUrl}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Actual;
