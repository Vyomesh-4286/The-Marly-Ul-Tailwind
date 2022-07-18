import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Header = () => {

    const handelClick = () => {
        const bar_1 = document.querySelector('.bar_1');
        const bar_2 = document.querySelector('.bar_2');
        const bar_3 = document.querySelector('.bar_3');
        const manuname = document.querySelector('.manuname');
        const icon = document.querySelector('.manuicon');

        bar_1.classList.toggle('animation1');
        bar_2.classList.toggle('hide');
        bar_3.classList.toggle('animation2');
        manuname.classList.toggle('hide');
        icon.classList.toggle('icon');
    }
    return (
        <>
            <header className='container-fluid absolute z-10 w-full grid lg:grid-cols-3 gap-3 grid-cols-2 bg-gradient-header bg-opacity-20 py-10'>
                <div className='flex space-x-5 items-center lg:order-1 order-2 lg:justify-start justify-end'>
                    <div className='manuicon cursor-pointer border rounded-full text-white flex items-center' onClick={handelClick}>
                        <span className='manuname font-Century-Gothic text-13px font-normal tracking-wider'>MANU</span>
                        <div class="flex items-center flex-wrap">
                            <div class="manubar w-5 flex flex-wrap">
                                <span class="bar bar_1 w-full"></span>
                                <span class="bar bar_2 my-1 w-full"></span>
                                <span class="bar bar_3 w-full"></span>
                            </div>
                        </div>
                    </div>
                    <ul className='hidden lg:flex items-center text-white gap-5'>
                        <li className='relative cursor-pointer font-Century-Gothic font-normal text-xs leading-47px tracking-widest hover:opacity-50 duration-500'><Link to="/stay" exact>STAY</Link></li>
                        <li className='relative cursor-pointer font-Century-Gothic font-normal text-xs leading-47px tracking-widest hover:opacity-50 duration-500'><Link to="/spa" exact>SPA</Link></li>
                        <li className='relative cursor-pointer font-Century-Gothic font-normal text-xs leading-47px tracking-widest hover:opacity-50 duration-500'><Link to="/eat" exact>EAT</Link></li>
                    </ul>
                </div>
                <div className='flex items-center lg:order-2 order-1 lg:justify-center justify-start'>
                    <Link to="/" exact><img className="cursor-pointer" src="../../assets/Header/The Marly Logo Hori.svg" alt="The Malry Logo" /></Link>
                </div>
                <div className='hidden lg:flex items-center order-3 justify-end'>
                    <Link to="/bookingpage" exact><div className='cursor-pointer font-Century-Gothic text-13px font-normal tracking-wider uppercase border border-whiteshade-0 border-opacity-20 rounded-full py-2.5 px-26px text-white bg-whiteshade-0 bg-opacity-20 hover:bg-opacity-100 hover:border-opacity-100 hover:text-black duration-1000 ease-in-out'>Make a booking</div></Link>
                </div>
            </header>
        </>
    )
}

export default Header