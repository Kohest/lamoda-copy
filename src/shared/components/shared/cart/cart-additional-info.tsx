import CartInfoElement from "./cart-info-element";

const CartAdditionalInfo = () => {
  return (
    <div>
      <div className="mt-8 mb-10 py-8 grid grid-cols-2 border-t gap-12">
        <CartInfoElement
          image="https://a.lmcdn.ru/files/cms/our-service__icon_security.svg"
          title="Безопасность"
          subtitle="Безопасность платежей гарантируется использованием SSL протокола. Данные вашей банковской карты надежно защищены при оплате онлайн."
        />
        <CartInfoElement
          image="https://a.lmcdn.ru/files/cms/our-service__icon_delivery.svg"
          title="Бесплатная доставка по всей России"
          subtitle="У вас всегда есть возможность получить бесплатную доставку товаров Lamoda."
        />
        <CartInfoElement
          image="https://a.lmcdn.ru/files/cms/our-service__icon_trying.svg"
          title="Примерка"
          subtitle="Примеряйте и оплачивайте только подходящие товары. Вы можете примерить вещи перед покупкой и взять лишь те, которые вам подошли."
        />
        <CartInfoElement
          image="https://a.lmcdn.ru/files/cms/our-service__icon_velocity.svg"
          title="Доставка на следующий день"
          subtitle="Доставка на следующий день в 60 городах России. Доступно при использовании курьерского сервиса LamodaExpress и пунктов самовывоза."
        />
      </div>
    </div>
  );
};

export default CartAdditionalInfo;
