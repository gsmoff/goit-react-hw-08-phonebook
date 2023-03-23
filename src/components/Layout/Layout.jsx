import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navigation from '../Navigation/Navigation';

const Layout = () => {
    return (
        <div className="container">
            <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
            <Navigation />
            <Suspense>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default Layout;
