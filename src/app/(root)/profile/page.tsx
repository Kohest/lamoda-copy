import { getUserSession } from "@/lib/get-user-session";
import { redirect } from "next/navigation";
import { prisma } from "../../../../prisma/prisma-client";
import ProfileForm from "@/shared/components/shared/profile/profile-form";
import { Container } from "@/shared/components/shared/additional/Container";
import { profileLinks } from "@/shared/constants/profile/profile-links";
import Link from "next/link";
import ProfileLinks from "@/shared/components/shared/profile/proflie-links";

const ProfilePage = async () => {
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
    <Container className="w-full flex justify-center min-h-[500px] mt-[40px] pb-12">
      <div
        className="grid gap-6 w-full"
        style={{ gridTemplateColumns: "24% 1fr" }}
      >
        <ProfileLinks profileLinks={profileLinks} />
        <ProfileForm data={user} />
      </div>
    </Container>
  );
};

export default ProfilePage;
