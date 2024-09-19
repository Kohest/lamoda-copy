import { Button } from "@/shared/components/ui/button";
import { CartStateItem } from "@/lib/get-cart-details";
import { useMemo } from "react";

interface Props {
  items: CartStateItem[];
  totalAmount: number;
}

const CartPaymentBlock: React.FC<Props> = ({ items, totalAmount }) => {
  const parsePrice = (priceStr: string): number => {
    return parseFloat(priceStr.replace(/\s|₽|[\u20AC]/g, ""));
  };
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const { totalDiscount, totalPriceWithoutDiscount } = useMemo(() => {
    let totalDiscount = 0;
    let totalPriceWithoutDiscount = 0;

    items.forEach((item) => {
      const priceNum = parsePrice(item.price);
      const discountNum = parsePrice(item.discount || "0");
      const itemQuantity = item.quantity;

      totalPriceWithoutDiscount += priceNum * itemQuantity;
      totalDiscount += (priceNum - discountNum) * itemQuantity;
    });

    return { totalDiscount, totalPriceWithoutDiscount };
  }, [items]);
  return (
    <div
      style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 0px 8px" }}
      className="pt-4 px-4 border rounded-xl mb-8 font-light"
    >
      <div className=" text-[20px] font-normal pb-4">
        <span>Сумма заказа</span>
      </div>
      <div className="pb-4">
        <div className="flex justify-between items-center mb-2">
          <div>{totalQuantity} товаров</div>
          <div>{totalPriceWithoutDiscount} ₽</div>
        </div>
        <div className="flex justify-between items-center text-[#f93c00] mb-6">
          <div>Скидка</div>
          <div>-{totalDiscount} ₽</div>
        </div>
        <div className="flex items-center justify-between text-[24px] mb-2">
          <div className="font-normal">Итого</div>
          <div>{totalAmount} ₽</div>
        </div>
        <div className="text-[#888] text-[12px]">
          Без учета возможной стоимости доставки
        </div>
      </div>
      <div className="pb-4">
        <Button className="w-full text-white bg-black h-[52px] hover:bg-[#444] block font-light">
          <div className="text-[16px]">Перейти к оформлению</div>
          <div className="text-[12px]">{totalQuantity} товара</div>
        </Button>
      </div>
    </div>
  );
};

export default CartPaymentBlock;
