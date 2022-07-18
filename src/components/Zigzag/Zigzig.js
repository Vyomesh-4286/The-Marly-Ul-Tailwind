import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Zigzig = ({ image, isHight, isMargin, isOrder, isLogo, logo, title, isTitle , descrption, isDescrption, descrption1, isButton, btn, isButton1, btn1 }) => {
    return (
        <>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:mt-60px mt-30px lg:py-60px py-30px'>
                <div className={`${isOrder && '!order-2'} lg:order-first order-last`}>
                    <img className={`w-full h-544px ${isHight && 'h-396px'} object-cover`} src={image} alt="" />
                </div>
                <div className="flex items-center lg:my-auto my-4">
                    <div className={`lg:w-9/12 mx-auto ${isMargin && '!mx-0'}`}>
                        {isLogo &&
                            <img className='object-cover mb-7' src={logo} alt="" />
                        }
                        <h1 className={`${isTitle && 'hidden'} flex flex-wrap font-Gilroy font-light text-40px text-blackshade-0 mb-4`}>{title}</h1>
                        <p className='flex flex-wrap font-Century-Gothic font-normal text-sm leading-24px text-blackshade2-0 mb-8'>{descrption}</p>
                        {isDescrption &&
                            <p className='flex flex-wrap font-Century-Gothic font-normal text-sm leading-24px text-blackshade2-0 mb-8'>{descrption1}</p>
                        }
                        <div className={`flex ${isButton && 'hidden'}`}>
                            <Link to="/" exact><div className='cursor-pointer hover:bg-blackshade-0 hover:text-whiteshade-0 font-Century-Gothic text-13px font-normal tracking-wider uppercase border border-blackshade-0 border-opacity-20 rounded-full py-2.5 px-25px text-blackshade-0 duration-1000 ease-in-out'>{btn}</div></Link>
                            <Link to="/" exact><div className={`${isButton1 && 'hidden'} cursor-pointer font-Century-Gothic text-13px font-normal tracking-wider uppercase after:pb-1 relative after:absolute after:block after:w-full after:border-b after:border-blackshade-0 after:border-opacity-20 after:duration-1000 ease-in-out hover:after:w-0 my-2.5 mx-25px text-blackshade-0`}>{btn1}</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Zigzig