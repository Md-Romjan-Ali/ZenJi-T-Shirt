"use client";

import Link from "next/link";
import { useState, useEffect, useContext, useRef } from "react";
import { useTheme } from "next-themes";
import {
  BiChevronDown,
  BiHeart,
  BiMenu,
  BiMoon,
  BiSearch,
  BiShoppingBag,
  BiSun,
  BiUser,
  BiX,
} from "react-icons/bi";
import { AuthContext } from "./AuthContext";

export default function Navbar() {
  const { orders = [] } = useContext(AuthContext) || {};
  const cartCount = orders.reduce((total, order) => total + order.quantity, 0);
  const { resolvedTheme, setTheme } = useTheme();

  // Mobile Menu & Desktop Dropdown States
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const moreDropdownRef = useRef(null);

  // Close Desktop "MORE" Dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        moreDropdownRef.current &&
        !moreDropdownRef.current.contains(event.target)
      ) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll Direction Handler (Hide on scroll down, Show on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsMoreOpen(false);
        setIsMobileOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "COLLECTION", href: "/all-product" },
    { name: "LOOKBOOK", href: "/look-book" },
    { name: "OUR STORY", href: "/our-story" },
  ];

  const moreLinks = [
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#050505] border-b border-neutral-200 dark:border-neutral-800/80 text-neutral-900 dark:text-white font-sans tracking-wider transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-black tracking-tighter uppercase italic text-neutral-950 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors"
          >
            ZENJI
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-bold tracking-widest text-neutral-700 dark:text-neutral-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-red-600 dark:hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}

          {/* Fully Responsive "MORE" Dropdown Menu */}
          <div className="relative" ref={moreDropdownRef}>
            <button
              type="button"
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="inline-flex items-center uppercase text-xs font-bold tracking-widest text-neutral-700 dark:text-neutral-300 hover:text-red-600 dark:hover:text-white transition-colors focus:outline-none"
            >
              <span>MORE</span>
              <BiChevronDown
                className={`w-4 h-4 ml-0.5 transition-transform duration-200 ${
                  isMoreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* "MORE" Menu Popover */}
            {isMoreOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-white dark:bg-[#0e0e0e] border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl py-2 z-50 transition-all">
                {moreLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMoreOpen(false)}
                    className="block px-4 py-2.5 text-xs uppercase font-semibold tracking-wider text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right Action Icons & Mobile Menu Trigger */}
        <div className="flex items-center space-x-2 sm:space-x-4 text-neutral-800 dark:text-neutral-200">
          
          {/* Theme Toggle */}
          <button
            suppressHydrationWarning
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-red-600 dark:hover:text-red-500 transition-colors"
          >
            {resolvedTheme === "dark" ? (
              <BiSun className="h-5 w-5" />
            ) : (
              <BiMoon className="h-5 w-5" />
            )}
          </button>

          {/* Search Button */}
          <button
            aria-label="Search"
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-red-600 dark:hover:text-red-500 transition-colors"
          >
            <BiSearch className="w-5 h-5 stroke-[1.8]" />
          </button>

          {/* Wishlist Link */}
          <Link
            href="/favourites"
            aria-label="Wishlist"
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-red-600 dark:hover:text-red-500 transition-colors"
          >
            <BiHeart className="w-5 h-5 stroke-[1.8]" />
          </Link>

          {/* Cart Counter */}
          <Link
            href="/orders"
            aria-label={`Cart with ${cartCount} items`}
            className="relative p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-red-600 dark:hover:text-red-500 transition-colors"
          >
            <BiShoppingBag className="w-5 h-5 stroke-[1.8]" />
            {cartCount > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Account Icon */}
          <button
            aria-label="Account"
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-red-600 dark:hover:text-red-500 transition-colors hidden sm:block"
          >
            <BiUser className="w-5 h-5 stroke-[1.8]" />
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="lg:hidden pl-1">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle Mobile Menu"
              className="p-2 rounded-lg text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 focus:outline-none"
            >
              {isMobileOpen ? (
                <BiX className="w-7 h-7" />
              ) : (
                <BiMenu className="w-7 h-7" />
              )}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Accordion Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white dark:bg-[#080808] border-b border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4 shadow-2xl transition-all">
          <div className="flex flex-col space-y-3">
            {[...navLinks, ...moreLinks].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-sm font-bold uppercase tracking-widest py-2 text-neutral-800 dark:text-neutral-200 hover:text-red-600 dark:hover:text-red-500 border-b border-neutral-100 dark:border-neutral-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}