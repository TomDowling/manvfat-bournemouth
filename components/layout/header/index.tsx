"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();
    // const currentPage =

    console.log("pathname", pathname);

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
                        <nav aria-label="Global" className={`gap-6 ${isOpen ? "flex" : "hidden md:flex"}`}>
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link
                                        className={`text-gray-500 transition hover:text-gray-500/75 ${
                                            pathname.startsWith("/fixtures") && "text-green-600 hover:text-green-600/75"
                                        }`}
                                        href="/fixtures">
                                        Fixtures
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className={`text-gray-500 transition hover:text-gray-500/75 ${
                                            pathname.startsWith("/teams") && "text-green-600 hover:text-green-600/75"
                                        }`}
                                        href="/teams">
                                        Teams
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className={`text-gray-500 transition hover:text-gray-500/75 ${
                                            pathname.startsWith("/players") && "text-green-600 hover:text-green-600/75"
                                        }`}
                                        href="/players">
                                        Players
                                    </Link>
                                </li>
                            </ul>

                            {/* <button className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hidden md:flex">
                                Login
                            </button> */}
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="block md:hidden">
                                <button
                                    className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
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
                                        <>X</>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
