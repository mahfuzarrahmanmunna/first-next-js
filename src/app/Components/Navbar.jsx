'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();
    console.log(pathName);
    if (!pathName.includes('dashboard')) {
        return (
            <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold text-primary">MySite</h1>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex gap-6">
                        <li>
                            <Link href="/" className="text-gray-700 hover:text-primary transition">Home</Link>
                        </li>
                        <li>
                            <Link href="/services" className="text-gray-700 hover:text-primary transition">Services</Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-gray-700 hover:text-primary transition">About</Link>
                        </li>
                    </ul>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                {isOpen && (
                    <ul className="md:hidden mt-4 space-y-2 border-t pt-4">
                        <li>
                            <Link href="/" className="block text-gray-700 hover:text-primary px-2 py-1">Home</Link>
                        </li>
                        <li>
                            <Link href="/services" className="block text-gray-700 hover:text-primary px-2 py-1">Services</Link>
                        </li>
                        <li>
                            <Link href="/about" className="block text-gray-700 hover:text-primary px-2 py-1">About</Link>
                        </li>
                    </ul>
                )}
            </nav>
        );
    } else {
        return <></>
    }
};

export default Navbar;
