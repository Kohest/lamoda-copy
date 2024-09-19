import { GetSearchParams } from "@/lib/find-products";
import { Api } from "@/lib/services/api-client";
import ProductsSearchList from "@/shared/components/shared/product/products-search-list";
import { getUserSession } from "@/lib/get-user-session";

const subcategoryPage = async ({
  params: { slug, subcategoryName },
  searchParams,
}: {
  params: { slug: string; subcategoryName: string };
  searchParams: GetSearchParams;
}) => {
  const session = await getUserSession();

  const { products, subcategoryName: subcategory } =
    await Api.subcategories.getSubcategoriesProducts(slug, subcategoryName);
  return (
    <ProductsSearchList
      session={session}
      searchParams={searchParams}
      products={products}
      title={subcategory}
      slug={slug}
    />
  );
};

export default subcategoryPage;
