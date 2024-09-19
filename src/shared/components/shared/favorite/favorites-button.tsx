"use client";
import { useSlugStore } from "@/shared/store/use-slug";
import { useSession } from "next-auth/react";
import Link from "next/link";

const FavoritesButton = () => {
  const { data: session } = useSession();
  const { slug } = useSlugStore();
  return (
    <div>
      {session && (
        <Link href={`/${slug}/favorites`}>
          <button className="flex items-center gap-2 text-[12px] hover:bg-[url('/icons/favoriteActive.svg')] bg-no-repeat hover:text-[#888] duration-100">
            <img src="/icons/favorite.svg" alt="user icon" />
            Избранное
          </button>
        </Link>
      )}
    </div>
  );
};

export default FavoritesButton;
