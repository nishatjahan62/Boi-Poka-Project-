import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/footer/footer';
import { Toaster } from 'react-hot-toast';

const Roots = () => {
    <Toaster/>
    return (
        <div className='  '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        
        </div>
    );
};

export default Roots;