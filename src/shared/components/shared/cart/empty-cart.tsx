import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="w-[calc(100%-408px)]">
      <div className="mb-4 text-[44px] text-bold">Корзина пока пустая</div>
      <div className="text-[20px] mb-8">
        Авторизируйтесь, чтобы присоединиться к программе{" "}
        <Link
          className="hover:text-[#888] border-b border-black hover:border-none duration-300"
          href="/"
        >
          Lamoda Club
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
