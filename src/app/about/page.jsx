import Link from 'next/link';
import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <h1>About us page</h1>
            <Link href='/about/address'>Address</Link>
        </div>
    );
};

export default AboutUs;