import { Inter } from "next/font/google";
import SessionWarper from "./(nextAuth)/SessionWarper";
import "./globals.css";

import Navbar from "./(navbar)/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <SessionWarper>
      <html lang="en">
        <body className={inter.className}>
          <Navbar
            links={[
              { href: "/", text: "Home" },
              { href: "/chat", text: "chat", protected: true },
            ]}
          />
          {children}
        </body>
      </html>
    </SessionWarper>
  );
}
