"use client";

import Link from "next/link";
import Login from "./Login";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Navbar({ links }) {
  const { data: session } = useSession();
  const pathname = usePathname();
  return (
    <nav className="flex items-center p-4">
      <h1 className="text-3xl mr-20 font-bold">Chat</h1>
      <ul className="flex space-x-4 justify-between">
        {links.map(
          (link) =>
            ((link.protected && session) || !link.protected) && (
              <li key={link.href}>
                {pathname === link.href ? (
                  <Link
                    className="text-rose-400 hover:text-rose-600 font-semibold"
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                ) : (
                  <Link
                    className="text-amber-500 hover:text-amber-700 font-semibold"
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                )}
              </li>
            )
        )}
      </ul>
      <Login Link={Link} />
    </nav>
  );
}
