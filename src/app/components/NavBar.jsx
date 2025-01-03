"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Logo from "./Logo";

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
];

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 flex items-center justify-between px-8 py-4 border-b border-[#33353F]">
            {/* Logo Section */}
            <div className="flex items-center cursor-pointer">
                <img
                    src="/images/webLogo.png" // Path to your logo
                    alt="Logo"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="h-16 w-16 object-contain transform hover:rotate-360 hover:scale-90 transition-transform duration-500"
                />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
                <ul className="flex space-x-8">
                    {navLinks.map((link, index) => (
                        <li key={index} className="list-none text-white hover:opacity-75 transition-opacity">
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="block md:hidden">
                {!navbarOpen ? (
                    <button
                        onClick={() => setNavbarOpen(true)}
                        className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
                    >
                        <Bars3Icon className="h-5 w-5" />
                    </button>
                ) : (
                    <button
                        onClick={() => setNavbarOpen(false)}
                        className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
                    >
                        <XMarkIcon className="h-5 w-5" />
                    </button>
                )}
            </div>

            {/* Mobile Menu Overlay */}
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default NavBar;