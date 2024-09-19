import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import CartOriginalCheckModalRow from "./cart-original-check-modal-row";
import { DialogClose } from "@radix-ui/react-dialog";

const CartOriginalCheckModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="h-[140px] w-full relative flex items-center bg-cover mb-8 bg-[url('https://a.lmcdn.ru/files/cms/originality_widget_bg.webp')] text-white">
          <div className="w-1/2 ml-4">
            <p className="text-[20px] max-w-[350px] text-start">
              Как мы проверяем оригинальность товара
            </p>
            <div className="flex font-extralight items-center mt-3 gap-1">
              <p>Посмотреть</p>
              <span>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 2l5 6-5 6" stroke="#fff"></path>
                </svg>
              </span>
            </div>
          </div>
          <div
            style={{ flex: "0 1 50%" }}
            className="h-full bg-contain bg-center bg-[url('https://a.lmcdn.ru/files/cms/originality_widget_pic.webp')]"
          />
          <img
            src="https://a.lmcdn.ru/files/cms/quality_mark.webp"
            alt="medal"
            className="absolute w-[72px] h-[72px] right-4 top-[92px]"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="min-w-[352px] max-w-[636px] flex flex-col max-h-full font-light p-6">
        <div className="text-[20px] font-normal">
          Как мы проверяем оригинальность товара?
        </div>
        <ul className="w-[588px] mt-[10px] text-[16px]">
          <CartOriginalCheckModalRow
            title="Сотрудничаем с брендами напрямую"
            subtitle="И привлекаем только сертифицированных продавцов"
            icon="/icons/diploma.svg"
            alt="Сотрудничество с брендами"
          />
          <CartOriginalCheckModalRow
            title="Тщательно проверяем товары"
            subtitle="Документы, бирки, этикетки, комплектацию — всё, чтобы вы получили оригинальный товар"
            icon="/icons/t-shirt.svg"
            alt="Проверка товаров"
          />
          <CartOriginalCheckModalRow
            title="Контролируем каждую отправку"
            subtitle="Проверяем упаковку и внешний вид товара со склада"
            icon="/icons/package.svg"
            alt="Упаковка"
          />
        </ul>
        <div className="flex flex-row-reverse">
          <DialogClose asChild>
            <button className="px-4 w-auto min-w-[102px] h-8 bg-black text-white rounded">
              Все понятно, спасибо!
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CartOriginalCheckModal;
