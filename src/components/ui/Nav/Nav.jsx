"use client";

import Link from "next/link";

import { useData } from "@/hooks";

function Nav() {
  const { data: navlinks, loading, error } = useData("/data/navlinks.json");

  return (
    <nav>
      <ul className="flex gap-7">
        {navlinks.map((navlink) => (
          <li key={navlink.id}>
            <Link href={navlink.href}>{navlink.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
