import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const SectionHero = ({ image, isWidth, title, descrption, btn, isButton }) => {
    return (
        <>
            <section className='relative bg-opacity-55 drop-shadow-shadow044 bg-blend-overlay'>
                <img className='w-full h-screen object-cover' src={image} alt="" />
                <div className={`${isWidth && '!w-35%'} w-2/3 absolute bottom-0 left-1/2 pb-100px -translate-x-1/2`}>
                    <h1 className='font-Gilroy font-light text-60px text-center text-whiteshade-0 mb-9'>{title}</h1>
                    <p className='font-Century-Gothic font-normal text-18px leading-25px text-center text-whiteshade-0'>{descrption}</p>
                    {isButton &&
                        <div className="mt-9 flex items-center justify-center">
                            <Link to="/" exact><div className='cursor-pointer font-Century-Gothic text-13px font-normal tracking-wider uppercase border border-whiteshade-0 border-opacity-20 rounded-full py-2.5 px-26px text-white bg-whiteshade-0 bg-opacity-20 hover:border-opacity-100 hover:bg-opacity-100 hover:text-black duration-1000 ease-in-out'>{btn}</div></Link>
                        </div>
                    }
                </div>
            </section>
        </>
    )
}

export default SectionHero