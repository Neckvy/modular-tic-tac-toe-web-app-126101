"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Play", href: "/play" },
  { name: "About", href: "/about" },
];

// PUBLIC_INTERFACE
export function TopNav() {
  /** Top-level navigation (Home, Play, About) with highlight of current route. */
  const pathname = usePathname();

  return (
    <nav
      className="w-full px-2 sm:px-4 py-3 sm:py-4 flex items-center justify-between shadow-md bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-50 z-40 border-b"
      aria-label="Main navigation"
    >
      <div className="flex flex-1 flex-row gap-4 items-center">
        <span className="font-bold text-xl text-secondary tracking-tight">TicTacToe</span>
      </div>
      <ul className="flex flex-row gap-4 items-center text-base font-medium">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`p-2 sm:px-4 rounded-md transition 
                  ${
                    pathname === item.href
                      ? "bg-primary/80 text-black"
                      : "hover:bg-accent/30 text-foreground"
                  }
                `}
              aria-current={pathname === item.href ? "page" : undefined}
              tabIndex={0}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
