"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "../lib/auth-client";

export default function LoginForm({ callbackURL }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const form = event.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    const { error: loginError } = await authClient.signIn.email({
      email,
      password,
      callbackURL: callbackURL || "/"
    });

    setLoading(false);

    if (loginError) {
      setError(loginError.message || "Login failed. Please check your email and password.");
      return;
    }

    router.push(callbackURL || "/");
    router.refresh();
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/"
    });
  };

  return (
    <div className="w-full max-w-md bg-base-100 shadow-summer rounded-3xl p-8 animate__animated animate__fadeIn">
      <h1 className="text-3xl font-extrabold text-center text-primary mb-2">Login</h1>
      <p className="text-center text-gray-600 mb-6">Welcome back to SunCart.</p>

      {error && <div className="alert alert-error mb-4 text-sm">{error}</div>}

      <form onSubmit={handleLogin} className="space-y-4">
        <label className="form-control">
          <span className="label-text font-medium">Email</span>
          <input name="email" type="email" required placeholder="Enter your email" className="input input-bordered focus:input-primary" />
        </label>
        <label className="form-control">
          <span className="label-text font-medium">Password</span>
          <input name="password" type="password" required minLength={8} placeholder="Enter your password" className="input input-bordered focus:input-primary" />
        </label>
        <button type="submit" disabled={loading} className="btn btn-primary text-white w-full hover:scale-[1.02] transition">
          {loading ? <span className="loading loading-spinner loading-sm"></span> : "Login"}
        </button>
      </form>

      <div className="divider">OR</div>

      <button onClick={handleGoogleLogin} className="btn btn-outline w-full hover:scale-[1.02] transition">
        Continue with Google
      </button>

      <p className="text-center text-sm mt-6">
        New to SunCart? <Link className="text-primary font-semibold hover:underline" href="/register">Register</Link>
      </p>
    </div>
  );
}
