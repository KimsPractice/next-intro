"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const path = usePathname();

  return (
    <>
      <Link href={"/"} className={`${path === "/" ? "active" : ""}`}>
        HOME
      </Link>
      <Link href={"/about"} className={`${path === "/about" ? "active" : ""}`}>
        ABOUT
      </Link>

      <style jsx global>{`
        a {
          font-size: 32px;
          text-decoration: none;
        }

        .active {
          color: tomato;
        }
      `}</style>
    </>
  );
}
