"use client";
import { useEffect } from "react";
import { useCartStore } from "@/shared/store/useCart";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const CartButton = () => {
  const [items, loading, fetchCartItems] = useCartStore((state) => [
    state.items,
    state.loading,
    state.fetchCartItems,
  ]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  if (loading) return <Loader2 className="w-5 h-5 animate-spin" />;

  return (
    <Link
      href={"/cart"}
      className="block relative flex text-[11px] items-center hover:text-[#888] hover:bg-[url('/icons/cartHover.svg')] bg-no-repeat bg-no-repeat duration-100"
    >
      <img src="/icons/cart.svg" alt="cart" className="mr-3" />
      {items.length > 0 && (
        <div className="flex items-center justify-center text-white absolute -top-2 left-3 h-4 w-4 rounded-[50%] font-light text-[12px] bg-[#f93c00]">
          {items.length}
        </div>
      )}
      <span className="tracking-wider">Корзина</span>
    </Link>
  );
};

export default CartButton;
