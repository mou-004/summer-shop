"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "../lib/auth-client";

export default function Navbar() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/login")
      }
    });
  };

  const navLinks = (
    <>
      <li><Link className="nav-link-effect" href="/">Home</Link></li>
      <li><Link className="nav-link-effect" href="/products">Products</Link></li>
      <li><Link className="nav-link-effect" href="/my-profile">My Profile</Link></li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-100/90 backdrop-blur border-b border-orange-100">
      <div className="navbar max-w-7xl mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </button>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-56 gap-2">
              {navLinks}
            </ul>
          </div>
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-primary hover:scale-105 transition">
            ☀️ SunCart
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-medium">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {isPending ? (
            <span className="loading loading-spinner loading-sm text-primary"></span>
          ) : user ? (
            <>
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.image || "https://i.ibb.co/0yQF7jK/user.png"} alt={user.name || "User"} />
                </div>
              </div>
              <button onClick={handleLogout} className="btn btn-primary btn-sm text-white hover:scale-105 transition">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-ghost btn-sm">Login</Link>
              <Link href="/register" className="btn btn-primary btn-sm text-white hover:scale-105 transition">Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
