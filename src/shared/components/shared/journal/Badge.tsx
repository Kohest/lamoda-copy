import { cn } from "@/lib/cnUtil";

interface Props {
  title: string;
  color: string;
  className?: string;
}
const Badge: React.FC<Props> = ({ title, color, className }) => {
  return (
    <div className={cn("flex absolute", className)}>
      <div
        style={{ backgroundColor: `${color}` }}
        className="h-full relative select-none py-[2px] px-[5px] text-white after:absolute after:bg-inherit after:h-full after:w-1 after:skew-x-[-7deg] after:top-0 after:-right-[2px]"
      >
        {title}
      </div>
    </div>
  );
};

export default Badge;
