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
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[rgba(18,18,18,0.70)] backdrop-blur-sm flex items-center justify-between px-8 py-4 border-b border-[#33353F]">
            {/* Logo Section */}
            <Link
                href="/"
                onClick={(e) => {
                    if (window.location.pathname === "/") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                }}
                className="flex items-center cursor-pointer"
            >
                <img
                    src="/images/webLogo.png"
                    alt="Logo"
                    className="h-16 w-16 object-contain transform hover:rotate-360 hover:scale-90 transition-transform duration-500"
                />
            </Link>

            {/* Navigation Links */}
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
                        className="absolute top-4 right-4 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200 z-50"
                    >
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                )}
            </div>


            {/* Mobile Menu Overlay */}
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default NavBar;