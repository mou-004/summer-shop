import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../../lib/auth";

export default async function MyProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect("/login?callbackURL=/my-profile");
  }

  const user = session.user;
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-base-100 rounded-[2rem] shadow-summer p-8 md:p-12 text-center animate__animated animate__fadeIn">
        <div className="avatar mb-6">
          <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
            <img src={user.image || "https://i.ibb.co/0yQF7jK/user.png"} alt={user.name || "User"} />
          </div>
        </div>
        <h1 className="text-4xl font-extrabold text-neutral">My Profile</h1>
        <div className="mt-8 grid gap-4 text-left max-w-xl mx-auto">
          <div className="p-5 rounded-2xl bg-orange-50">
            <p className="text-sm text-gray-500">Name</p>
            <p className="text-xl font-bold text-neutral">{user.name}</p>
          </div>
          <div className="p-5 rounded-2xl bg-teal-50">
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-xl font-bold text-neutral break-words">{user.email}</p>
          </div>
          <div className="p-5 rounded-2xl bg-yellow-50">
            <p className="text-sm text-gray-500">Photo</p>
            <p className="text-sm font-medium text-neutral break-words">{user.image || "No photo URL found"}</p>
          </div>
        </div>
        <Link href="/update-profile" className="btn btn-primary text-white mt-8 hover:scale-105 transition">
          Update
        </Link>
      </div>
    </section>
  );
}
