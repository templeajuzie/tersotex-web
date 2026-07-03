"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Products", "/services"],
  ["Gallery", "/gallery"],
  ["FAQ", "/faq"],
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 w-full bg-white text-slate-900 shadow-sm">
      <div className="bg-[#2636a7] px-4 py-2 text-center text-xs font-medium text-white sm:text-sm">
        Ensuring Process in every step
      </div>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/terso-logo.png" alt="Terso logo" className="h-12 w-28 object-contain" />
          <span className="sr-only">Terso</span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition hover:text-[#2636a7] ${
                  pathname === href ? "text-[#2636a7]" : "text-slate-700"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-full bg-[#2636a7] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#1f2c86] md:inline-flex"
        >
          Contact Us
        </Link>

        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-slate-900 transition ${open ? "top-2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 bg-slate-900 transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-slate-900 transition ${open ? "top-2 -rotate-45" : "top-4"}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-5 shadow md:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-md px-2 py-2 text-base font-medium text-slate-700"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-[#2636a7] px-5 py-3 text-center text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
