"use client";
import { useState } from "react";
import CartPageTryRulesModal from "./cart-page-try-rules-modal";
const CartDeliveryInfoBlock = () => {
  const [trigger, setTrigger] = useState(false);
  return (
    <div className="px-4 mt-12 mb-8 text-[14px]">
      <div className="mb-4 text-[24px]">Доставим к вам</div>
      <div className="mb-4 flex">
        <img src="/icons/car.svg" alt="car" className="w-6 h-6 mr-2" />
        <div>
          <span>Курьером</span> - послезавтра, бесплатно
        </div>
      </div>
      <div className="mb-4 flex">
        <img src="/icons/map-balloon.svg" alt="car" className="w-6 h-6 mr-2" />
        <div>
          <span>В пункт выдачи</span> - послезавтра, бесплатно
        </div>
      </div>
      <CartPageTryRulesModal />
    </div>
  );
};

export default CartDeliveryInfoBlock;
