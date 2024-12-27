"use client";

import Link from "next/link";
import { AlignRight, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/datas/metaDatas";
import { navigationLinks } from "@/lib/datas/const";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

function NavigationLinks({ closeNav }) {
  const path = usePathname();

  return (navigationLinks.map((item) => (
    <li key={item.title} role="menuitem">
      <Link
        href={item.href}
        className={`${buttonVariants({
          variant: item.varient,
          size: "sm",
        })} ${path === item.path && "bg-accent"} capitalize text-muted-foreground`}
        onClick={closeNav}
      >
        {item.title}
      </Link>
    </li>
  )));
}

function MobileMenuToggle({ isOpen, onClick }) {
  return (
    <button
      aria-expanded={isOpen}
      aria-controls="main-navigation"
      className="size-8 md:hidden flex-center justify-self-end"
      onClick={onClick}
    >
      {isOpen ? <X /> : <AlignRight />}
    </button>
  );
}

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <header className={`mx-auto container p-0 w-full bg-background ${isNavbarOpen && "border-b"}`}>
      <nav
        className="px-[5%] md:px- py-2 w-full grid grid-cols-2 md:grid-cols-9 gap-base items-center"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link href="/" className="block h-16 flex-center md:col-span-2">
          <Image
            className="h-full object-contain"
            src="/images/common/logo.png"
            width={200}
            height={100}
            alt="Logo"
          />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <MobileMenuToggle isOpen={isNavbarOpen} onClick={() => setIsNavbarOpen(!isNavbarOpen)} />

        {/* Navigation Links */}
        <div
          id="main-navigation"
          className={`col-span-2 md:col-span-5 justify-self-center transition-all duration-300 ${isNavbarOpen ? "flex" : "hidden"
            } md:flex`}
        >
          <ul
            className="relative flex-center flex-col gap-xs md:flex-row"
            role="menu"
          >
            <NavigationLinks closeNav={() => setIsNavbarOpen(false)} />
            {/* <li className="md:hidden">
              <ThemeToggleButton />
            </li> */}
          </ul>
        </div>

        {/* Theme Toggle Button (Desktop Only) */}
        {/* <ThemeToggleButton className="hidden md:block justify-self-end" /> */}
        <div className="md:col-span-2 text-sm">
          <a className="text-link" href="tel:+13026350375">+1 302-635-0375</a><br />
          <a className="text-link" href="mailto:randy@fineremodelingde.com">randy@fineremodelingde.com</a>
        </div>
      </nav>
    </header>
  );
}
