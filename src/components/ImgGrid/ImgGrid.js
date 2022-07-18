import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const ImgGrid = ({ image, isHight, title, descrption, isWidth, isWidth1 , btn }) => {
    return (
        <>
            <div className='ImgGrid'>
                <img className={`pb-35px w-full h-357px object-cover ${isHight && 'h-489px'}`} src={image} alt="" />
                <h1 className='pb-21px font-Gilroy font-light text-3xl leading-26px text-center text-blackshade-0'>{title}</h1>
                <div className="flex flex-wrap justify-center">
                    <p className={`w-1/2 ${isWidth && '!w-3/4'} ${isWidth1 && '!w-5/6'} pb-25px font-Century-Gothic font-normal text-xs leading-5 text-center text-blackshade2-0`}>{descrption}</p>
                </div>
                <div className="flex justify-center">
                    <Link to="/" exact><div className='cursor-pointer hover:bg-blackshade-0 hover:text-whiteshade-0 font-Century-Gothic text-13px font-normal tracking-wider uppercase border border-blackshade-0 border-opacity-20 rounded-full py-2.5 px-25px text-blackshade-0 duration-1000 ease-in-out'>{btn}</div></Link>
                </div>
            </div>
        </>
    )
}

export default ImgGrid