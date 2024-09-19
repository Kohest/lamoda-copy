import { findProducts, GetSearchParams } from "@/lib/find-products";
import CategoryProducts from "./category-products";
import { Container } from "../additional/Container";
import Filters from "../filters/Filters";
import { Product, SessionType } from "@/@types/types";
interface Props {
  products: Product[];
  title: string;
  slug: string;
  session: SessionType | null;
  searchParams: GetSearchParams;
}
const ProductsSearchList: React.FC<Props> = async ({
  products,
  title,
  searchParams,
  slug,
  session,
}) => {
  const filteredProducts = findProducts(products, searchParams);
  return (
    <Container className="w-full">
      <div className="mt-[35px]">
        <span className="text-[20px] mr-[10px]">{title}</span>
        <span className="text-[13px] font-light text-[#888]">
          {products.length} товара
        </span>
      </div>
      <div
        className="grid mt-6 gap-[20px]"
        style={{ gridTemplateColumns: "233px 957px" }}
      >
        <div></div>
        {!products.length ? (
          <div className="text-center my-40 text-[#888] font-light text-[36px]">
            Пока что тут ничего нет
          </div>
        ) : (
          <div>
            <Filters products={filteredProducts} />
            <CategoryProducts
              products={filteredProducts}
              slug={slug}
              session={session}
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default ProductsSearchList;
