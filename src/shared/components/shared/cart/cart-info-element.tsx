interface Props {
  image: string;
  title: string;
  subtitle: string;
}
const CartInfoElement: React.FC<Props> = ({ image, title, subtitle }) => {
  return (
    <div>
      <img className="block w-12 h-12 mb-4" src={image} alt={title} />
      <div className="mb-4 text-[16px]">{title}</div>
      <div className="text-[12px]">{subtitle}</div>
    </div>
  );
};

export default CartInfoElement;
