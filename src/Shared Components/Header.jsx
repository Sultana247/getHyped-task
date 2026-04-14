import React from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { BsFire } from "react-icons/bs";
import { Link } from 'react-router';
const Header = () => {
    const menuItems = (
        <>
            <Link to="/expertises"><button className='px-2 rounded-lg'>Expertises</button></Link>
            <Link to="/work"><button className='px-2 rounded-lg'>Work</button></Link>
            <Link to="/about"><button className='px-2 rounded-lg'>About</button></Link>
            <Link to="/contact"><button className='px-2 rounded-lg'>Contact</button></Link>  
        </>
    )
    return (
        <div>
            <div className="navbar items-center">
                <div className="navbar-start">
                  <img src="https://i.ibb.co.com/F4Qs5vyp/logo.png" alt="get hyped logo" className="h-15 w-40 lg:w-45" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 bg-white rounded-lg py-2 gap-3 font-bold text-sm">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-fuchsia-200 rounded-lg px-2 py-2 text-2xl">
                            <HiOutlineMenuAlt4></HiOutlineMenuAlt4>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {menuItems}
                        </ul>
                    </div>
                    <div className='hidden lg:block'>
                        <button className="btn px-2 py-3 rounded-2xl flex justify-center bg-fuchsia-200">Get Results <div className='bg-white rounded-lg px-2 py-2' ><BsFire className='text-orange-600'></BsFire></div></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;