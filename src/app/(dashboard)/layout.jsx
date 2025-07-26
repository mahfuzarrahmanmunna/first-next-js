import React from 'react';

const DashboardLayouts = ({ children }) => {
    return (
        <div className='grid grid-cols-12'>
            {/* side nav */}
            <div className='col-span-3'>
                user dashboard
            </div>
            {/* dashboard content */}
            <div className='col-span-9'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayouts;