"use client";

import { useState, useEffect, useCallback } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";

type NavLinkItem = {
  path: string;
  label: string;
  sectionId?: string;
};

const bookingLink = "https://calendly.com/growth-devilslab/30min";

const navLinks: NavLinkItem[] = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services", sectionId: "services" },
  { path: "/offers", label: "Offers", sectionId: "flagship" },
  { path: "/work", label: "Work", sectionId: "selected-work" },
  { path: "/who-we-help", label: "Who We Help", sectionId: "who-we-help" },
  { path: "/process", label: "Process", sectionId: "how-we-work" },
  { path: "/faq", label: "FAQ", sectionId: "faq" },
  { path: "/contact", label: "Contact", sectionId: "contact" },
];

export default function Header() {
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (!element) return false;

    const headerOffset = 88;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = elementTop - headerOffset;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });

    return true;
  }, []);

  useEffect(() => {
    const syncPath = () => {
      if (typeof window !== "undefined") {
        setCurrentPath(window.location.pathname || "/");
      }
    };

    syncPath();

    window.addEventListener("popstate", syncPath);
    return () => window.removeEventListener("popstate", syncPath);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const path = window.location.pathname || "/";
    setCurrentPath(path);

    const matchingLink = navLinks.find((link) => link.path === path && link.sectionId);

    if (matchingLink?.sectionId) {
      const timer = window.setTimeout(() => {
        scrollToSection(matchingLink.sectionId as string);
      }, 250);

      return () => window.clearTimeout(timer);
    }
  }, [scrollToSection]);

  const handleNavClick = useCallback(
    (link: NavLinkItem, event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      if (link.path === "/") {
        window.history.pushState(null, "", "/");
        setCurrentPath("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (link.sectionId) {
        const didScroll = scrollToSection(link.sectionId);

        if (didScroll) {
          window.history.pushState(null, "", link.path);
          setCurrentPath(link.path);
          return;
        }

        router.push(link.path);
        setCurrentPath(link.path);
      }
    },
    [router, scrollToSection]
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-5 px-6 sm:px-8 lg:px-16 flex justify-between items-center transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <button
        type="button"
        onClick={() => {
          window.history.pushState(null, "", "/");
          setCurrentPath("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="text-lg font-semibold text-[#1e293b] hover:opacity-70 transition-opacity"
      >
        devilsLab <span className="font-normal text-gray-600">Digitals</span>
      </button>

      <nav className="hidden lg:flex gap-7 items-center">
        {navLinks.map((link) => {
          const isActive = currentPath === link.path;

          return (
            <button
              key={link.path}
              type="button"
              onClick={(event) => handleNavClick(link, event)}
              className={cn(
                "transition-all duration-300 text-sm font-medium tracking-normal hover:opacity-60",
                isActive ? "text-gray-900" : "text-gray-600"
              )}
            >
              {link.label}
            </button>
          );
        })}

        <Button
          asChild
          className="rounded-full px-6 py-2 text-sm font-medium bg-[#1e293b] hover:bg-[#1e293b]/90 border-0 text-white transition-all"
        >
          <a href={bookingLink} target="_blank" rel="noopener noreferrer">
            Book Audit
          </a>
        </Button>
      </nav>

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 transition-colors text-gray-900">
              <Menu size={24} />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="p-0 w-full max-w-sm border-l-2 border-gray-200 bg-white">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <SheetClose asChild>
                  <button
                    type="button"
                    onClick={() => {
                      window.history.pushState(null, "", "/");
                      setCurrentPath("/");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-xl font-semibold text-[#1e293b]"
                  >
                    devilsLab <span className="font-normal text-gray-600">Digitals</span>
                  </button>
                </SheetClose>

                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-gray-900">
                    <X size={24} />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>

              <nav className="flex flex-col gap-1 p-6">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.path;

                  return (
                    <SheetClose asChild key={link.path}>
                      <button
                        type="button"
                        onClick={(event) => handleNavClick(link, event)}
                        className={cn(
                          "text-left text-base font-medium rounded-lg p-4 transition-all",
                          isActive ? "bg-[#1e293b] text-white" : "text-gray-900 hover:bg-gray-100"
                        )}
                      >
                        {link.label}
                      </button>
                    </SheetClose>
                  );
                })}
              </nav>

              <div className="mt-auto p-6 border-t border-gray-200">
                <SheetClose asChild>
                  <Button
                    asChild
                    className="w-full rounded-full py-6 text-base font-semibold bg-[#1e293b] text-white hover:bg-[#1e293b]/90 border-0 transition-all"
                  >
                    <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                      Book Audit
                    </a>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}