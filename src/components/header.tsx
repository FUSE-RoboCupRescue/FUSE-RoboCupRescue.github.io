"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const banner = document.getElementById("banner");
        if (!banner) return;
        const observer = new IntersectionObserver(
            ([entry]) => setIsScrolled(!entry.isIntersecting),
            { root: null, threshold: 0 }
        );
        observer.observe(banner);
        return () => observer.disconnect();
    }, []);

    return (
        <header>
            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex sticky top-0 z-50 transition-all duration-300 px-7 py-4 font-light ${isScrolled ? "bg-gray-900/80 backdrop-blur-md" : "bg-black"}`}>
                <ul className="flex gap-10 text-white text-lg">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link href={href} className="hover:text-gray-400 transition-colors">
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Navigation */}
            <nav className="lg:hidden sticky top-0 z-50 bg-black px-7 py-6 flex justify-between items-center">
                {/* Mobile Menu Toggle */}
                <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-white focus:outline-none">
                    {isNavOpen ? (
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        <div className="space-y-2">
                            <span className="block h-0.5 w-8 bg-white"></span>
                            <span className="block h-0.5 w-8 bg-white"></span>
                            <span className="block h-0.5 w-8 bg-white"></span>
                        </div>
                    )}
                </button>

                {/* Mobile Menu */}
                <div className={`${isNavOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-black text-white p-6 shadow-lg transition-transform duration-300`}>
                    <ul className="space-y-6 text-lg">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href} className="block hover:text-gray-400 transition-colors" onClick={() => setIsNavOpen(false)}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/benefits", label: "Benefits" },
    { href: "/team", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/contact", label: "Contact" },
];
