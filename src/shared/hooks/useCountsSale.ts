interface ReturnProps {
  salePercent: string;
}
function extractNumberFromString(string: string) {
  return Number(string.replace(/[^0-9]/g, ""));
}

export const useCountSale = (price: string, sale: string): ReturnProps => {
  const saleNum = extractNumberFromString(sale);
  const priceNum = extractNumberFromString(price);
  const salePercent = ((priceNum - saleNum) / priceNum) * 100;
  return {
    salePercent: `${salePercent.toFixed(0)}`,
  };
};
