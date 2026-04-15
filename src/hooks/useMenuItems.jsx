import React from 'react';
import { Link } from 'react-router';
const useMenuItems = () => {
    return (
        <>
         <Link to="/expertises" className='container '>
                <button className='px-2 py-2 rounded-lg norm-text'>
                    Expertises
                </button>
                <div className='red-layer'></div>
                <div class="overlay">
                    <div class="text">Expertises</div>
                </div>
            </Link>
            <Link to="/work" className='container '>
                <button className='px-2 py-2 rounded-lg norm-text'>
                    Work
                </button>
                <div className='red-layer'></div>
                <div class="overlay">
                    <div class="text">Work</div>
                </div>
            </Link>
            <Link to="/about" className='container '>
                <button className='px-2 py-2 rounded-lg norm-text'>
                    About
                </button>
                <div className='red-layer'></div>
                <div class="overlay">
                    <div class="text">About</div>
                </div>
            </Link>
            <Link to="/contact" className='container '>
                <button className='px-2 py-2 rounded-lg norm-text'>
                    Contact
                </button>
                <div className='red-layer'></div>
                <div class="overlay">
                    <div class="text">Contact</div>
                </div>
            </Link>
            </>
    );
};

export default useMenuItems;