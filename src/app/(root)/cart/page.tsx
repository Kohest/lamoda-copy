"use client";
import { Container } from "@/shared/components/shared/additional/Container";
import { useCart } from "@/shared/hooks/use-cart";
import { useState } from "react";
import CartProductCard from "@/shared/components/shared/cart/cart-product-card";
import CartPaymentBlock from "@/shared/components/shared/cart/cart-payment-block";
import EmptyCart from "@/shared/components/shared/cart/empty-cart";
import { useSession } from "next-auth/react";
import AuthModal from "@/shared/components/shared/modals/auth-modal/auth-modal";
import { Button } from "@/shared/components/ui/button";
import CartSkeleton from "@/shared/components/shared/skeletons/cart-skeleton";
import CartAdditionalInfo from "@/shared/components/shared/cart/cart-additional-info";
import useAddFavorite from "@/shared/hooks/use-add-favorite";
import { SessionType } from "@/@types/types";
const Cart = () => {
  const { data: session } = useSession();
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
    useCart();
  const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);
  const {
    items: favoriteItems,
    onSubmitFavorite,
    loading: favoriteLoading,
  } = useAddFavorite();
  return (
    <Container>
      {loading ? (
        <CartSkeleton />
      ) : (
        <div className="pt-10 flex flex-col">
          {totalAmount > 0 && (
            <div className="flex justify-between font-light">
              <div className="w-[calc(100%-408px)]">
                <div className="relative h-full">
                  <div className="sticky bg-white z-10 top-0 border-b border-[#888/50] pb-6">
                    <span className="text-[44px]">Корзина</span>
                    <span className="ml-4 text-[24px] text-[#888]">
                      {items.length} товара
                    </span>
                  </div>
                  {items.map((item) => (
                    <CartProductCard
                      session={session as unknown as SessionType}
                      key={item.id}
                      item={item}
                      favoriteItems={favoriteItems}
                      onSubmitFavorite={onSubmitFavorite}
                      favoriteLoading={favoriteLoading}
                      className="py-8"
                      updateItemQuantity={updateItemQuantity}
                      removeCartItem={removeCartItem}
                    />
                  ))}
                </div>
              </div>
              <div className="w-[384px]">
                <CartPaymentBlock items={items} totalAmount={totalAmount} />
                {!session && (
                  <div
                    className="border rounded-xl mb-8 text-[15px] flex justify-between pl-4 py-2 font-light"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 0px 8px" }}
                  >
                    <div className="flex flex-col pt-2">
                      <div className="pb-4">
                        Войдите в аккаунт и получайте бонусы
                      </div>
                      <Button
                        variant={"outline"}
                        onClick={() => setOpenAuthModal(true)}
                        className="h-[32px] w-[96px] border-black hover:border-[#888] hover:bg-white font-light hover:text-[#888]"
                      >
                        Войти
                      </Button>
                      <AuthModal
                        open={openAuthModal}
                        onClose={() => setOpenAuthModal(false)}
                      />
                    </div>
                    <span className="w-[96px] h-[104px] mb-2">
                      <img src="icons/present.svg" alt="present" />
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
          {!loading && !totalAmount && <EmptyCart />}
          <CartAdditionalInfo />
        </div>
      )}
    </Container>
  );
};

export default Cart;
