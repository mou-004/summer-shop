"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "../lib/auth-client";

export default function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const form = event.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;

    const { error: registerError } = await authClient.signUp.email({
      name,
      email,
      image,
      password
    });

    setLoading(false);

    if (registerError) {
      setError(registerError.message || "Registration failed. Please try again.");
      return;
    }

    router.push("/login");
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/"
    });
  };

  return (
    <div className="w-full max-w-md bg-base-100 shadow-summer rounded-3xl p-8 animate__animated animate__fadeIn">
      <h1 className="text-3xl font-extrabold text-center text-primary mb-2">Registration</h1>
      <p className="text-center text-gray-600 mb-6">Create your SunCart account.</p>

      {error && <div className="alert alert-error mb-4 text-sm">{error}</div>}

      <form onSubmit={handleRegister} className="space-y-4">
        <label className="form-control">
          <span className="label-text font-medium">Name</span>
          <input name="name" type="text" required placeholder="Enter your name" className="input input-bordered focus:input-primary" />
        </label>
        <label className="form-control">
          <span className="label-text font-medium">Email</span>
          <input name="email" type="email" required placeholder="Enter your email" className="input input-bordered focus:input-primary" />
        </label>
        <label className="form-control">
          <span className="label-text font-medium">Photo-url</span>
          <input name="image" type="url" required placeholder="Enter photo URL" className="input input-bordered focus:input-primary" />
        </label>
        <label className="form-control">
          <span className="label-text font-medium">Password</span>
          <input name="password" type="password" required minLength={8} placeholder="Enter password" className="input input-bordered focus:input-primary" />
        </label>
        <button type="submit" disabled={loading} className="btn btn-primary text-white w-full hover:scale-[1.02] transition">
          {loading ? <span className="loading loading-spinner loading-sm"></span> : "Register"}
        </button>
      </form>

      <div className="divider">OR</div>

      <button onClick={handleGoogleLogin} className="btn btn-outline w-full hover:scale-[1.02] transition">
        Continue with Google
      </button>

      <p className="text-center text-sm mt-6">
        Already have an account? <Link className="text-primary font-semibold hover:underline" href="/login">Login</Link>
      </p>
    </div>
  );
}
