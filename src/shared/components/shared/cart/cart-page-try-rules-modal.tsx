import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shared/components/ui/dialog";

const CartPageTryRulesModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="mb-4 flex">
          <img src="/icons/hanger.svg" alt="car" className="w-6 h-6 mr-2" />
          <div>
            <span className="border-b border-black pb-[2px] cursor-pointer hover:border-none">
              Можно примерить перед покупкой
            </span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[844px] p-6  font-light">
        <div className="mb-[20px] text-[24px] font-normal">Как примерить</div>
        <div className="flex justify-between mb-[36px]">
          <img
            className="w-[382px] h-[286px] mr-4"
            src="https://a.lmcdn.ru/files/cms/try_on_conditions/pickup_point.jpg"
            alt="Пункт выдачи"
          />
          <div>
            <div className="mb-2 text-[20px] font-normal">В пункте выдачи</div>
            <div>
              Закажите в пункт выдачи с примеркой. Примерьте заказанные вещи.
              Оставьте себе все что понравилось, а если что-то не подошло
              верните сотруднику.
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-[36px]">
          <img
            className="w-[382px] h-[286px] mr-4"
            src="https://a.lmcdn.ru/files/cms/try_on_conditions/courier.jpg"
            alt="Пункт выдачи"
          />
          <div>
            <div className="mb-2 text-[20px] font-normal">
              Курьерская доставка
            </div>
            <div>
              У вас будет 15 минут на примерку, а торговый представитель
              подождет в подъезде. Оставьте себе все что понравилось, а если
              что-то не подошло верните сотруднику.
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CartPageTryRulesModal;
