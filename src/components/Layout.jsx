import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import DisclaimerModal from './DisclaimerModal';

const Layout = () => {
    return (
        <div className="layout-wrapper">
            <DisclaimerModal />
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
