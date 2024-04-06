"use client";

import { useSession, signOut, signIn } from "next-auth/react";

export default function Login({ Link }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <button
        onClick={() => {
          signIn();
        }}
        className="ml-auto text-teal-400 hover:text-green-500 font-bold text-xl"
      >
        Login
      </button>
    );
  } else {
    return (
      <button
        onClick={() => {
          signOut();
        }}
        className="ml-auto text-red-500 hover:text-red-700 font-bold text-xl"
      >
        Logout
      </button>
    );
  }
}
