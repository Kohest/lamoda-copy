import Link from "next/link";

const FooterBottom: React.FC = () => {
  return (
    <div className="flex flex-row justify-between pt-6 border-t border-t-[#888]/40">
      <div className="w-1/4">
        <span>Россия</span>
      </div>
      <div className="w-1/4 flex">
        <Link
          href={"/"}
          className="block w-[25px] h-[25px] mr-[6px] mb-[10px] align-middle bg-[url('/icons/vk.svg')] bg-cover"
        />
        <Link
          href={"/"}
          className="block w-[25px] h-[25px] mr-[6px] mb-[10px] bg-[url('/icons/ok.svg')] bg-cover align-middle"
        />
        <Link
          href={"/"}
          className="block w-[25px] h-[25px] mr-[6px] mb-[10px] bg-[url('/icons/youtube.svg')] bg-cover align-middle"
        />
        <Link
          href={"/"}
          className="block w-[25px] h-[25px] mr-[6px] mb-[10px] bg-[url('/icons/telegram.svg')] bg-cover align-middle"
        />
      </div>
      <div className="w-1/4">
        <div className="flex items-center">
          <i className="w-[50px] h-[14px] mr-3 mb-[10px] bg-[url('/payment/mir.svg')] bg-cover bg-center" />
          <i className="w-[39px] h-[24px] mr-3 mb-[10px] bg-[url('/payment/visa.svg')] bg-cover bg-center" />
          <i className="w-[32px] h-[20px] mr-3 mb-[10px] bg-[url('/payment/mastercard.svg')] bg-cover bg-center" />
        </div>
        <div className="text-[#888] mb-[1px]">
          <span>Доступны </span>
          <Link
            href={"/"}
            className="border-b border-b-[#888] hover:border-none duration-100"
          >
            Другие способы оплаты
          </Link>
        </div>
      </div>
      <div className="w-1/4 justify-end flex items-center gap-2">
        <div className="bg-[url('/phone.svg')] w-6 h-6 bg-cover" />
        <Link
          href={"/"}
          className="text-[#888] border-b border-b-[#888] hover:border-none duration-100"
        >
          Мобильная версия
        </Link>
      </div>
    </div>
  );
};

export default FooterBottom;
