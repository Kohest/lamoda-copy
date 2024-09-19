import Link from "next/link";

const ProductMoreInfo: React.FC = () => {
  return (
    <div className="bottom-0 absolute w-full h-16 bg-white flex justify-center items-center text-[12px]">
      <Link
        href="/"
        className="border-b border-black/50 hover:text-[#888] hover:border-none duration-100"
      >
        Узнать больше информации о товаре
      </Link>
    </div>
  );
};

export default ProductMoreInfo;
