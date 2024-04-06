// mark as client component
"use client";

import { useSession } from "next-auth/react";

export default function IsAuth() {
  const { data: session } = useSession();
  if (session) {
    return session;
  }
  return false;
}
