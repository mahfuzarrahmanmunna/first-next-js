"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutUs = () => {
    const router = useRouter();
    const isLoggedIn = false
    const handleNavigation = () => {
        if (isLoggedIn) {
            router.push('/about/address')
        }
        else {
            router.push('/')
        }
    }
    return (
        <div>
            <h1>About us page</h1>
            <Link href='/about/address'>Address</Link><br />
            <button type='button' onClick={handleNavigation}>Address Page</button>
        </div>
    );
};

export default AboutUs;