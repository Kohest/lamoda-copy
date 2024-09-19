import { getUserSession } from "@/lib/get-user-session";
import { prisma } from "../../../../../prisma/prisma-client";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Container } from "@/shared/components/shared/additional/Container";
import FavoriteProducts from "@/shared/components/shared/favorite/favorite-products";

const FavoritesPage = async () => {
  const session = await getUserSession();
  if (!session) {
    return redirect("/not-auth");
  }
  const user = await prisma.user.findFirst({
    where: { id: Number(session?.id) },
  });
  if (!user) {
    return redirect("/not-auth");
  }
  return (
    <Container>
      <div
        className="grid min-h-[500px] gap-6 pt-[20px]"
        style={{ gridTemplateColumns: "222px 714px" }}
      >
        <div className="text-[13px]">
          <div className=" mb-2 bg-black py-[6px] pr-[25px] pl-[7px] rounded-md">
            <div className="text-white">
              <Link href={"/favorites"}>ИЗБРАННОЕ</Link>
            </div>
          </div>
          <div></div>
        </div>
        <FavoriteProducts session={session} />
      </div>
    </Container>
  );
};

export default FavoritesPage;
