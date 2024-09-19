interface Props {
  title: string;
  text: string;
}
const ProductPageAboutElement: React.FC<Props> = ({ title, text }) => {
  return (
    <p className="mb-2 font-light">
      <span className="w-[300px] inline-flex  overflow-hidden">
        <span className=" text-[#888] max-w-[68%]" style={{ flex: "1 0 auto" }}>
          {title}
        </span>
        <span className="whitespace-nowrap text-[#888]">
          . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
          . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
          . . . . . . . . . . .
        </span>
      </span>
      <span>{text}</span>
    </p>
  );
};

export default ProductPageAboutElement;
