import React from 'react';
import Header from '../Shared Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Shared Components/Footer';

const Main = () => {
    return (
        <div className='max-w-7xl md:mx-w-7xl mx-auto p-5 bg-orange-50 inter-font'>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Main;