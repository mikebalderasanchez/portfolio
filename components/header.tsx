"use client";

import { Button } from "./animate-ui/components/buttons/button";
import { ThemeTogglerButton } from "./animate-ui/components/buttons/theme-toggler";
import { LanguageSwitcher } from "./language-switcher";
import { useDictionary } from "./locale-provider";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const dictionary = useDictionary();
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: dictionary.nav.home, href: "/" },
    { name: dictionary.nav.about, href: "/about" },
    { name: dictionary.nav.projects, href: "/projects" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuState(false);
  }, [pathname]);

  return (
    <header>
      <nav
        data-state={menuState ? "active" : undefined}
        className="fixed inset-x-0 top-0 z-20 px-3 pt-3"
      >
        <div
          className={cn(
            "mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-300 md:px-6",
            isScrolled || menuState
              ? "border border-neutral-200/80 bg-[#f8f8ff]/80 shadow-sm backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/80"
              : "bg-transparent",
          )}
        >
          <Link href="/" className="text-base font-semibold tracking-tight">
            Mike Balderas
          </Link>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm transition-colors",
                      active
                        ? "font-medium text-foreground"
                        : "text-neutral-500 hover:text-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <LanguageSwitcher />
            <ThemeTogglerButton variant="ghost" />
            <Button asChild size="sm">
              <a href="mailto:mikebalderassanchez@gmail.com">
                {dictionary.nav.contact}
              </a>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuState((v) => !v)}
            aria-label={
              menuState ? dictionary.nav.closeMenu : dictionary.nav.openMenu
            }
            className="relative z-20 -m-2 p-2 lg:hidden"
          >
            {menuState ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {menuState ? (
          <div className="mx-auto mt-2 max-w-5xl rounded-2xl border border-neutral-200/80 bg-[#f8f8ff]/95 p-5 shadow-lg backdrop-blur-xl lg:hidden dark:border-neutral-800 dark:bg-neutral-950/95">
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-base font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-neutral-200 pt-4 dark:border-neutral-800">
              <LanguageSwitcher />
              <ThemeTogglerButton variant="ghost" />
              <Button asChild size="sm" className="flex-1">
                <a href="mailto:mikebalderassanchez@gmail.com">
                  {dictionary.nav.contact}
                </a>
              </Button>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
};
