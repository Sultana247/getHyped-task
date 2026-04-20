
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { BsFire } from "react-icons/bs";
import { Link } from 'react-router';
import './Header.css';
import { Reoverlay, ModalWrapper } from 'reoverlay';
import useMenuItems from '../hooks/useMenuItems';
const Header = () => {
    const menuItems= useMenuItems();
    const menuMobile =
        <>
            <Link to={'/expertises'}><button className='btn rounded-xl bg-white px-5 py-6 text-2xl'>Expertises</button></Link>
            <Link to={'/work'}><button className='btn rounded-xl bg-white px-5 py-6 text-2xl'>Work</button></Link>
            <Link to={'/about'}><button className='btn rounded-xl bg-white px-5 py-6 text-2xl'>About</button></Link>
            <Link to={'/contact'}><button className='btn rounded-xl bg-white px-5 py-6 text-2xl'>Contact</button></Link>
        </>

      


    return (
       
      <div>
            <div className="navbar items-center mb-18 fixed z-100">
                <div className="navbar-start">
                    <img src="https://i.ibb.co.com/F4Qs5vyp/logo.png" alt="get hyped logo" className="h-15 w-40 lg:w-45 z-10" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 bg-white rounded-lg py-1 items-center  font-bold text-sm">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <div role="button" className="btn btn-ghost lg:hidden bg-fuchsia-200 rounded-lg px-2 py-2 text-2xl" >
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="" onClick={() => document.getElementById('my_modal_3').showModal()}>
                                <HiOutlineMenuAlt4></HiOutlineMenuAlt4>
                            </button>
                            <dialog id="my_modal_3" className="modal p-5 ">
                                
                                <div className="modal-box modal-animation rounded-xl bg-fuchsia-300 h-full w-full max-w-none max-h-none m-0  p-5 flex flex-col justify-center relative">

                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5 bg-white text-2xl">✕</button>
                                        <img
                                            src="https://i.ibb.co.com/F4Qs5vyp/logo.png"
                                            alt="get hyped logo"
                                            className="h-15 w-40 lg:w-45 absolute left-5 top-5"
                                        />
                                    </form>

                                    <div className=''>
                                        <ul className='flex flex-col gap-4 font-bold z-20 text-center  pt-5'>
                                        {menuMobile}
                                    </ul>
                                    </div>
                                    <div className='flex justify-center'>
                                        <button className="btn md:w-1/3 py-8 mt-10 md:mt-0 rounded-2xl flex justify-center getresult-btn bg-black text-white text-2xl">Get Results <div className='bg-white rounded-lg px-2 py-2' ><BsFire className='text-orange-600'></BsFire></div></button>
                                    </div>
                                </div>
                                
                            </dialog>

                        </div>



                    </div>
                    <div className='hidden lg:block'>
                        <button className="btn px-2 py-3 rounded-2xl flex justify-center bg-fuchsia-300">Get Results <div className='bg-white rounded-lg px-2 py-2' ><BsFire className='text-orange-600'></BsFire></div></button>
                    </div>
                </div>
            </div>
        </div>
   
        
    );
};

export default Header;