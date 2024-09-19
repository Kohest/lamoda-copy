interface Props {
  title: string;
  subtitle: string;
  icon: string;
  alt: string;
}
const CartOriginalCheckModalRow: React.FC<Props> = ({
  title,
  subtitle,
  icon,
  alt,
}) => {
  return (
    <li className="mb-4 flex gap-2 items-center">
      <img src={icon} alt={alt} className="w-10 h-10" />
      <div>
        <p className="font-normal">{title}</p>
        <p className="text-[#888]">{subtitle}</p>
      </div>
    </li>
  );
};

export default CartOriginalCheckModalRow;
