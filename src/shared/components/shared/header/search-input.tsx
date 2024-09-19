import { Api } from "@/lib/services/api-client";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);
  const router = useRouter();

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      if (searchQuery.trim()) {
        try {
          const response = await Api.products.search(searchQuery);
          setProducts(response);
        } catch (error) {
          console.log(error);
        }
      } else {
        setProducts([]);
      }
    },
    250,
    [searchQuery]
  );
  const onClickItem = (title: string, subtitle: string) => {
    const combinedQuery = `${title} ${subtitle}`.trim();
    setFocused(false);
    setProducts([]);
    if (combinedQuery) {
      setSearchQuery(combinedQuery);
      router.push(
        `/women-home/search?query=${encodeURIComponent(combinedQuery)}`
      );
      setSearchQuery("");
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickItem(searchQuery, "");
    }
  };

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}
      <div
        className="flex ml-[32px] relative rounded-lg bg-white z-50"
        ref={ref}
      >
        <input
          value={searchQuery}
          onKeyDown={handleKeyPress}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          type="text"
          placeholder="Поиск"
          className="w-[236px] text-[14px] h-[32px] border border-black font-light px-2"
          onFocus={() => setFocused(true)}
        />
        <button
          className="bg-black w-[55px] h-[32px] rounded-e-[4px] flex items-center justify-center"
          onClick={() => onClickItem(searchQuery, "")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="cover"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M0 24h24V0H0z" />
              <path
                stroke="#FFF"
                d="M20.5 20.5l-5-5M10.5 3a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15z"
              />
            </g>
          </svg>
        </button>
        {products.length > 0 && focused && (
          <div className="absolute top-9 bg-white w-full rounded-sm text-[12px]">
            {products.map((product) => (
              <p
                onClick={() => onClickItem(product.title, product.subtitle)}
                key={product.id}
                className="block p-3 hover:bg-[#f1f1f1] cursor-pointer"
              >
                {product.title} {product.subtitle}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchInput;
