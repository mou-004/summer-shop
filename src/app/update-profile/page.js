import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../../lib/auth";
import UpdateProfileForm from "../../components/UpdateProfileForm";

export default async function UpdateProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect("/login?callbackURL=/update-profile");
  }

  return (
    <section className="min-h-[calc(100vh-180px)] flex items-center justify-center px-4 py-12">
      <UpdateProfileForm user={session.user} />
    </section>
  );
}
