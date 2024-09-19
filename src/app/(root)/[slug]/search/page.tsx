import { Api } from "@/lib/services/api-client";
import ProductsSearchList from "@/shared/components/shared/product/products-search-list";
import { getUserSession } from "@/lib/get-user-session";
import { Product } from "@/@types/types";

const SearchPage = async ({
  params,
  searchParams,
}: {
  params: { slug?: string };
  searchParams: { [key: string]: string | undefined };
}) => {
  const query = searchParams.query || "";
  const slug = params.slug || "";

  if (query.trim() === "") {
    return <div>Введите запрос для поиска</div>;
  }
  const products = await Api.products.search(query);
  const session = await getUserSession();
  return (
    <ProductsSearchList
      session={session}
      searchParams={searchParams}
      products={products as Product[]}
      title={`Товары по запросу «${query}»`}
      slug={slug}
    />
  );
};

export default SearchPage;
