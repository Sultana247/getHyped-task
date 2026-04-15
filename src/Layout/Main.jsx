import React from 'react';
import Header from '../Shared Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Shared Components/Footer';

const Main = () => {
    return (
        <div className='max-w-7xl md:max-w-svw mx-h-screen  bg-orange-50 inter-font'>
        <div className='px-5 pt-5'>
            <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
        </div>
    );
};

export default Main;