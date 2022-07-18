import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MarlyRooms = () => {

    const handleNextClick = () => {
        const swiper = document.querySelector('.marlyroomsSlider').swiper;
        swiper.slideNext();
    }
    const handlePrevClick = () => {
        const swiper = document.querySelector('.marlyroomsSlider').swiper;
        swiper.slidePrev();
    }
    return (
        <>
            <section className="container-fluid pr-0 lg:mt-60px mt-30px lg:py-60px py-30px">
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:pr-0 pr-5">
                    <div className="lg:col-span-2 col-span-1">
                        <h1 className='mb-13px font-Gilroy font-light text-40px text-blackshade-0'>Explore our rooms</h1>
                        <p className='mb-21px font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0'>Total luxury with uninterupted views of either ocean or mountain</p>
                        <div className="mb-8 swiper-controller flex gap-13px">
                            <a className='button-prev cursor-pointer' onClick={handlePrevClick} ><img src="../../assets/Explore our rooms/svg/Arrow-Left.svg" alt="" /></a>
                            <a className='button-next cursor-pointer' onClick={handleNextClick} ><img src="../../assets/Explore our rooms/svg/Arrow-Right.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-center items-center lg:pb-0 pb-5">
                        <div className='flex'>
                            <Link to="/" exact><div className='cursor-pointer hover:bg-blackshade-0 hover:text-whiteshade-0 font-Century-Gothic text-13px font-normal tracking-wider uppercase border border-blackshade-0 border-opacity-20 rounded-full py-2.5 px-25px text-blackshade-0 duration-1000 ease-in-out'>View all rooms</div></Link>
                        </div>
                    </div>
                </div>
                <Swiper
                    slidesPerView={3.2}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.5
                        },
                        768: {
                            slidesPerView: 2.5
                        },
                        1024: {
                            slidesPerView: 3.2
                        }
                    }}
                    spaceBetween={31}
                    loop={true}
                    className="marlyroomsSlider">
                    <SwiperSlide className='relative'>
                        <img className='w-full h-270px mb-29px' src="../../assets/Explore our rooms/Marly_Rooms_1.jpg" alt="" />
                        <div className="ml-2.5">
                            <h1 className='mb-3.5 font-Gilroy font-light text-2xl leading-26px text-blackshade-0'>Studio Sea Facing</h1>
                            <p className='mb-29px font-Century-Gothic font-normal text-xs leading-5 text-blackshade2-0'>The room is 30m² with a 10m² balcony.</p>
                            <div className='flex'>
                                <Link to="/" exact><div className='cursor-pointer font-Century-Gothic text-13px font-normal tracking-wider uppercase after:pb-1 relative after:absolute after:block after:w-full after:border-b after:border-blackshade-0 after:border-opacity-20 after:duration-1000 ease-in-out hover:after:w-0 my-2.5 text-blackshade-0'><span className='px-1'>explore</span></div></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full h-270px mb-29px' src="../../assets/Explore our rooms/Marly_Rooms_2.jpg" alt="" />
                        <div className="ml-2.5">
                            <h1 className='mb-3.5 font-Gilroy font-light text-2xl leading-26px text-blackshade-0'>Classic Sea Facing</h1>
                            <p className='mb-29px font-Century-Gothic font-normal text-xs leading-5 text-blackshade2-0'>The room is 35m² with a 10m² balcony.</p>
                            <div className='flex'>
                                <Link to="/" exact><div className='cursor-pointer font-Century-Gothic text-13px font-normal tracking-wider uppercase after:pb-1 relative after:absolute after:block after:w-full after:border-b after:border-blackshade-0 after:border-opacity-20 after:duration-1000 ease-in-out hover:after:w-0 my-2.5 text-blackshade-0'><span className='px-1'>explore</span></div></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full h-270px mb-29px' src="../../assets/Explore our rooms/Marly_Rooms_3.jpg" alt="" />
                        <div className="ml-2.5">
                            <h1 className='mb-3.5 font-Gilroy font-light text-2xl leading-26px text-blackshade-0'>Superior Sea Facing</h1>
                            <p className='mb-29px font-Century-Gothic font-normal text-xs leading-5 text-blackshade2-0'>The suite is 45m² with a 20m² balcony. </p>
                            <div className='flex'>
                                <Link to="/" exact><div className='cursor-pointer font-Century-Gothic text-13px font-normal tracking-wider uppercase after:pb-1 relative after:absolute after:block after:w-full after:border-b after:border-blackshade-0 after:border-opacity-20 after:duration-1000 ease-in-out hover:after:w-0 my-2.5 text-blackshade-0'><span className='px-1'>explore</span></div></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full h-270px mb-29px' src="../../assets/Explore our rooms/Marly_Rooms_4.jpg" alt="" />
                        <div className="ml-2.5">
                            <h1 className='mb-3.5 font-Gilroy font-light text-2xl leading-26px text-blackshade-0'>Junior Sea Facing</h1>
                            <p className='mb-29px font-Century-Gothic font-normal text-xs leading-5 text-blackshade2-0'>The suite is 45m² with a 20m² balcony. </p>
                            <div className='flex'>
                                <Link to="/" exact><div className='cursor-pointer font-Century-Gothic text-13px font-normal tracking-wider uppercase after:pb-1 relative after:absolute after:block after:w-full after:border-b after:border-blackshade-0 after:border-opacity-20 after:duration-1000 ease-in-out hover:after:w-0 my-2.5 text-blackshade-0'><span className='px-1'>explore</span></div></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default MarlyRooms