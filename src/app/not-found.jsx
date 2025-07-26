import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <h1>404 NOT FOUND</h1>
            <Link href='/'>
                
                Go Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;