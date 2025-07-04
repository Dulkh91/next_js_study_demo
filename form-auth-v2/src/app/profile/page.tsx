"use client";
import { useSession, signOut } from "next-auth/react";

export default function Profile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!session || !session.user) {
    return <div className="text-center mt-10">Please log in to view your profile.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Profile</h1>
      <p><strong>ID:</strong> {session.user.id}</p>
      <p><strong>Name:</strong> {session.user.name || "No name provided"}</p>
      <p><strong>Email:</strong> {session.user.email}</p>
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="mt-4 bg-red-500 text-white p-2 rounded"
      >
        Sign Out
      </button>
    </div>
  );
}