import React from 'react';

const ShareBrand = ({ link }) => {
    return (

        <div className="card bg-transparent border border-gray-400 rounded-2xl justify-center items-center ml-1 lg:ml-4">
            <div className="card-body">
                <img src={link} alt="" className='w-10 h-10 lg:w-65 lg:h-65 object-contain' />
            </div>

        </div>
    );
};

export default ShareBrand;