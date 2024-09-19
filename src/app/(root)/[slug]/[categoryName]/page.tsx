import { categoryMappings } from "@/lib/category-mappings";
import { GetSearchParams } from "@/lib/find-products";
import { Api } from "@/lib/services/api-client";
import ProductsSearchList from "@/shared/components/shared/product/products-search-list";
import { getUserSession } from "@/lib/get-user-session";

const CategoryPage = async ({
  params: { slug, categoryName },
  searchParams,
}: {
  params: { slug: string; categoryName: string };
  searchParams: GetSearchParams;
}) => {
  const session = await getUserSession();
  const products = await Api.page.getPageProducts(slug, categoryName);
  const readableCategoryName = categoryMappings[categoryName] || categoryName;
  return (
    <ProductsSearchList
      session={session}
      products={products}
      title={readableCategoryName}
      slug={slug}
      searchParams={searchParams}
    />
  );
};

export default CategoryPage;
