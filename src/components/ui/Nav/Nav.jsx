"use client";

import Link from "next/link";

import navlinks from "@/data/navlinks.json";

function Nav() {
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
