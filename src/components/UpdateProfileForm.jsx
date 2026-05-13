"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "../lib/auth-client";

export default function UpdateProfileForm({ user }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const form = event.currentTarget;
    const name = form.name.value;
    const image = form.image.value;

    const { error: updateError } = await authClient.updateUser({
      name,
      image
    });

    setLoading(false);

    if (updateError) {
      setError(updateError.message || "Update failed. Please try again.");
      return;
    }

    setSuccess("Profile updated successfully.");
    router.refresh();
    router.push("/my-profile");
  };

  return (
    <div className="w-full max-w-md bg-base-100 shadow-summer rounded-3xl p-8 animate__animated animate__fadeIn">
      <h1 className="text-3xl font-extrabold text-center text-primary mb-6">Update Information</h1>

      {error && <div className="alert alert-error mb-4 text-sm">{error}</div>}
      {success && <div className="alert alert-success mb-4 text-sm">{success}</div>}

      <form onSubmit={handleUpdate} className="space-y-4">
        <label className="form-control">
          <span className="label-text font-medium">Image</span>
          <input name="image" type="url" required defaultValue={user?.image || ""} className="input input-bordered focus:input-primary" />
        </label>
        <label className="form-control">
          <span className="label-text font-medium">Name</span>
          <input name="name" type="text" required defaultValue={user?.name || ""} className="input input-bordered focus:input-primary" />
        </label>
        <button type="submit" disabled={loading} className="btn btn-primary text-white w-full hover:scale-[1.02] transition">
          {loading ? <span className="loading loading-spinner loading-sm"></span> : "Update Information"}
        </button>
      </form>
    </div>
  );
}
