"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Label,
    Button,
} from "@heroui/react";
import { BiChevronDown, BiHeart, BiMenu, BiSearch, BiShoppingBag, BiUser, BiX } from "react-icons/bi";

export default function Navbar() {
    const [cartCount, setCartCount] = useState(3);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Scroll Direction Handler (Hide on scroll down, Show on scroll up)
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false); // Hide on scroll down past header threshold
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true); // Show on scroll up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: "DROP", href: "/drop" },
        { name: "COLLECTION", href: "/all-product" },
        { name: "LOOKBOOK", href: "/lookbook" },
        { name: "OUR STORY", href: "/our-story" },
    ];

    const moreLinks = [
        { name: "FAQ", href: "/faq" },
        { name: "Contact", href: "/contact" },
        { name: "Shipping & Returns", href: "/shipping" },
        { name: "Size Guide", href: "/size-guide" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 bg-[#0a0a0a] border-b border-neutral-900 text-white font-sans tracking-wider transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

                {/* Brand Logo */}
                <div className="flex-shrink-0 flex items-center">
                    <Link href="/" className="text-2xl sm:text-3xl font-black tracking-tighter uppercase italic text-white">
                        ZENJI
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold tracking-widest text-neutral-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-white transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Dropdown>
                        <Button aria-label="Menu" variant="ghost">
                            <span className="inline-flex items-center text-white hover:bg-black">
                                MORE
                                <BiChevronDown className="w-4 h-4 ml-1" />
                            </span>
                        </Button>
                        <Dropdown.Popover>
                            <Dropdown.Menu>
                                {moreLinks.map((item) => (
                                    <DropdownItem
                                        key={item.name}
                                        textValue={item.name}
                                        className="hover:bg-neutral-800 rounded px-3 py-2 text-xs uppercase tracking-wider text-neutral-300 hover:text-white"
                                    >
                                        <Link href={item.href} className="block w-full h-full">
                                            {item.name}
                                        </Link>
                                    </DropdownItem>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>

                </nav>

                {/* Right Actions & Mobile Trigger */}
                <div className="flex items-center space-x-4 sm:space-x-5 text-neutral-200">
                    <button aria-label="Search" className="hover:text-white transition-colors p-1">
                        <BiSearch className="w-5 h-5 stroke-[1.8]" />
                    </button>

                    <button aria-label="Wishlist" className="hover:text-white transition-colors p-1">
                        <BiHeart className="w-5 h-5 stroke-[1.8]" />
                    </button>

                    {/* Cart Counter */}
                    <button aria-label="Cart" className="relative hover:text-white transition-colors p-1">
                        <BiShoppingBag className="w-5 h-5 stroke-[1.8]" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <button aria-label="Account" className="hover:text-white transition-colors p-1 hidden sm:block">
                        <BiUser className="w-5 h-5 stroke-[1.8]" />
                    </button>

                    {/* Mobile HeroUI Dropdown Menu Button */}
                    <div className="lg:hidden pl-1">
                        <Dropdown
                            placement="bottom-end"
                            isOpen={isMobileOpen}
                            onOpenChange={setIsMobileOpen}
                        >
                            <DropdownTrigger
                                aria-label="Open Mobile Menu"
                                className="text-white min-w-0 w-8 h-8 p-0"
                            >
                                <span className="inline-flex items-center justify-center">
                                    {isMobileOpen ? <BiX className="w-6 h-6" /> : <BiMenu className="w-6 h-6" />}
                                </span>
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Mobile Navigation"
                                className="bg-[#121212] border border-neutral-800 text-white rounded-lg p-2 w-56"
                            >
                                {[...navLinks, ...moreLinks].map((link) => (
                                    <DropdownItem
                                        key={link.name}
                                        textValue={link.name}
                                        className="hover:bg-neutral-800 text-xs font-semibold uppercase tracking-wider text-neutral-200 py-2.5"
                                    >
                                        <Link
                                            href={link.href}
                                            className="block w-full"
                                            onClick={() => setIsMobileOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>

            </div>
        </header>
    );
}