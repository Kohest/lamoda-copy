interface UseDeterminePriceProps {
  price: string;
  discount?: string;
}

interface ReturnProps {
  determinePrice: number;
}

const parsePrice = (priceStr: string): number => {
  return parseFloat(priceStr.replace(/[^\d]/g, ""));
};

export const useDeterminePrice = ({
  price,
  discount,
}: UseDeterminePriceProps): ReturnProps => {
  const priceNum = parsePrice(price);
  const discountNum = discount ? parsePrice(discount) : 0;

  const determinePrice = discountNum > 0 ? discountNum : priceNum;

  return {
    determinePrice,
  };
};
