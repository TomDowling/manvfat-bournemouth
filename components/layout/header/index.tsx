"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <Link className="flex gap-2 items-center" href="/">
                            <span className="sr-only">Home</span>
                            <Image className="h-8 w-44" src="/logo.svg" alt="Logo" width={176} height={32} />
                            <div className="text-xl hidden md:flex">Bournemouth</div>
                        </Link>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        {/* Mobile Navigation */}
                        <nav
                            aria-label="Global"
                            className={`
                                fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out
                                md:relative md:flex md:h-auto md:w-auto md:bg-transparent md:translate-x-0
                                ${isOpen ? "translate-x-0" : "translate-x-full"}
                            `}>
                            <ul className="flex flex-col items-start gap-6 text-sm p-8 pt-20 md:flex-row md:items-center md:p-0">
                                <li>
                                    <Link
                                        className={`text-gray-500 transition hover:text-gray-500/75 ${
                                            pathname.startsWith("/fixtures") && "text-green-600 hover:text-green-600/75"
                                        }`}
                                        href="/fixtures"
                                        onClick={closeMenu} // Close menu on link click
                                    >
                                        Fixtures
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className={`text-gray-500 transition hover:text-gray-500/75 ${
                                            pathname.startsWith("/teams") && "text-green-600 hover:text-green-600/75"
                                        }`}
                                        href="/teams"
                                        onClick={closeMenu} // Close menu on link click
                                    >
                                        Teams
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className={`text-gray-500 transition hover:text-gray-500/75 ${
                                            pathname.startsWith("/players") && "text-green-600 hover:text-green-600/75"
                                        }`}
                                        href="/players"
                                        onClick={closeMenu} // Close menu on link click
                                    >
                                        Players
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="block md:hidden">
                                <button
                                    className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 z-50 relative" // Added relative and z-index to button
                                    onClick={toggleMenu}>
                                    {!isOpen ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" onClick={closeMenu}></div>}
        </header>
    );
};
