"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Link from "next/link";

const navLinks = [
    { title: "About", path: "/#about" },
    { title: "Projects", path: "/#projects" },
    { title: "Contact", path: "/#contact" },
    { title: "Resume", path: "/resume" },
];

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-10 bg-[#121212] backdrop-blur-sm border-b border-[#33353F] transition-all duration-500 ease-out ${
            navbarOpen ? 'h-screen' : 'h-auto'
        }`}>
            {/* Header Section - Always visible */}
            <div className="flex items-center justify-between px-8 py-4">
                {/* Logo Section */}
                <Link
                    href="/"
                    onClick={(e) => {
                        if (window.location.pathname === "/") {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                        if (navbarOpen) setNavbarOpen(false);
                    }}
                    className="flex items-center cursor-pointer"
                >
                    <img
                        src="/images/webLogo.png"
                        alt="Logo"
                        className="h-16 w-16 object-contain transform hover:rotate-360 hover:scale-90 transition-transform duration-500"
                    />
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8">
                        {navLinks.map((link, index) => (
                            <li key={index} className="list-none text-white hover:opacity-75 transition-opacity">
                                {link.newTab ? (
                                    <a
                                        href={link.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:opacity-75 transition-opacity font-medium"
                                    >
                                        {link.title}
                                    </a>
                                ) : (
                                    <NavLink href={link.path} title={link.title} />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <div className="block md:hidden">
                    <button
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
                    >
                        {navbarOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content - Slides down when open */}
            <div className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
                navbarOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}>
                {/* Navigation Links - Centered in expanded area */}
                <div className="flex flex-col items-center justify-center h-full px-8 pb-8" style={{ minHeight: 'calc(100vh - 96px)' }}>
                    <ul className="flex flex-col items-center space-y-8">
                        {navLinks.map((link, index) => (
                            <li key={index} className="text-center">
                                <a
                                    href={link.path}
                                    onClick={() => setNavbarOpen(false)}
                                    className="text-white text-2xl font-bold hover:opacity-75 transition-opacity"
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;