import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='py-4'>
            <ul className='flex justify-between'>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/services'>
                        Services
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;