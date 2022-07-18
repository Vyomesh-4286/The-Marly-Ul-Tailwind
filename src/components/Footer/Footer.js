import { React, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Footer = () => {

    const handleNextClick = () => {
        const swiper = document.querySelector('.contentSlider').swiper;
        swiper.slideNext();
    }
    const handlePrevClick = () => {
        const swiper = document.querySelector('.contentSlider').swiper;
        swiper.slidePrev();
    }

    const Callto = ({ phone, children }) => {
        return <a href={`tel:${phone}`}>{children}</a>;
    };

    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

        return <a href={`mailto:${email}${params}`}>{children}</a>;
    };

    return (
        <>
            <footer className='Footer'>
                <div className='lg:py-100px py-50px lg:pl-100px pl-5 bg-blackshade-0 text-white'>
                    <h1 className='mb-3 font-Gilroy text-42px font-normal'>Life is better at #The Marly</h1>
                    <p className='mb-38px font-Century-Gothic text-sm leading-6 font-normal'>A five-star showpiece nestled perfectly in the heart of Camps Bay.</p>
                    <div className="mb-16 swiper-controller flex gap-13px">
                        <a className='button-prev cursor-pointer' onClick={handlePrevClick} ><img src="../../assets/Footer/svg/Arrow-Left.svg" alt="" /></a>
                        <a className='button-next cursor-pointer' onClick={handleNextClick} ><img src="../../assets/Footer/svg/Arrow-Right.svg" alt="" /></a>
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
                        className="contentSlider">
                        <SwiperSlide className='relative'>
                            <img className='w-full' src="../../assets/Footer/Life_in_marly_1.jpg" height={394} alt="Life_in_marly" />
                            <img className='absolute bottom-3.5 left-3.5' src="../../assets/Footer/svg/Instagram.svg" alt="Instagram" />
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <img className='w-full' src="../../assets/Footer/Life_in_marly_2.jpg" height={394} alt="Life_in_marly" />
                            <img className='absolute bottom-3.5 left-3.5' src="../../assets/Footer/svg/Instagram.svg" alt="Instagram" />
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <img className='w-full' src="../../assets/Footer/Life_in_marly_3.jpg" height={394} alt="Life_in_marly" />
                            <img className='absolute bottom-3.5 left-3.5' src="../../assets/Footer/svg/Instagram.svg" alt="Instagram" />
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <img className='w-full' src="../../assets/Footer/Life_in_marly_4.jpg" height={394} alt="Life_in_marly" />
                            <img className='absolute bottom-3.5 left-3.5' src="../../assets/Footer/svg/Instagram.svg" alt="Instagram" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='bg-blackshade1-0 lg:px-100px px-50px'>
                    <div className="accordion pb-100px">
                        <Accordion className='flex justify-center border-b border-whiteshade1-0 border-opacity-40'>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='mb-52px flex items-center justify-center font-Gilroy text-28px font-light text-center text-whiteshade-0 pt-62px'>
                                        Sign up to our special offers and promotions<span className='pl-3 pt-3'><img src="../../assets/Footer/svg/Angle-Down.svg" alt="" /></span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <form action="" className='pt-1 pb-91px'>
                                        <div className='sm:flex justify-center gap-11 items-center'>
                                            <div>
                                                <input type="text" className='font-Century-Gothic text-sm leading-17px text-whiteshade1-0 font-normal bg-transparent pb-3.5 border-b' required placeholder='Name' />
                                            </div>
                                            <div>
                                                <input type="text" className='font-Century-Gothic text-sm leading-17px text-whiteshade1-0 font-normal bg-transparent pb-3.5 border-b' required placeholder='Surname' />
                                            </div>
                                            <div>
                                                <input type="email" className='font-Century-Gothic text-sm leading-17px text-whiteshade1-0 font-normal bg-transparent pb-3.5 border-b' required placeholder='Email address' />
                                            </div>
                                            <div>
                                                <input type="submit" className='cursor-pointer border border-whiteshade-0 rounded-full py-2.5 px-6 font-Century-Gothic text-13px text-whiteshade1-0 font-normal bg-transparent' value="SIGN UP" />
                                            </div>
                                        </div>
                                    </form>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="footermanu flex flex-wrap justify-between lg:pb-100px pb-50px">
                        <div className='lg:w-3/12 md:w-3/12 w-full flex flex-col md:items-start items-center -mt-38px pl-11px'>
                            <Link to="/" exact><img className="cursor-pointer hidden sm:flex" src="../../assets/Footer/svg/The Marly Logo Vert.svg" alt="" /></Link>
                            <Link to="/" exact><img className="cursor-pointer flex sm:hidden pb-3.5" src="../../assets/Footer/svg/The Marly Logo Hori.svg" alt="" /></Link>
                            <p className='sm:max-w-[248px] py-1 font-Century-Gothic text-15px font-normal tracking-0.02 text-whiteshade1-0'>The Promenade, 201 Victoria Rd, Camps Bay, Cape Town, 8005</p>
                            <div className="hidden sm:flex flex-col">
                                <p className='pb-1 font-Century-Gothic text-18px font-normal text-whiteshade-0'>Follow us:</p>
                                <div className='flex md:justify-start justify-center gap-4'>
                                    <a href='https://www.instagram.com/themarlyhotel/?hl=en'><img className="cursor-pointer hover:-translate-y-2 duration-1000 ease-in-out" src="../../assets/Footer/svg/Instagram.svg" alt="" /></a>
                                    <a href='https://www.facebook.com/themarlycampsbay'><img className="cursor-pointer hover:-translate-y-2 duration-1000 ease-in-out" src="../../assets/Footer/svg/Facebook.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-5/12 md:w-6/12 w-full lg:py-0 py-30px pb-0">
                            <div className="sm:hidden flex justify-center space-x-10 py-5">
                                <li className='list-none font-Century-Gothic text-18px tracking-wider text-white'><Link className='hover:opacity-50 duration-500' to="/stay" exact>Stay</Link></li>
                                <li className='list-none font-Century-Gothic text-18px tracking-wider text-white'><Link className='hover:opacity-50 duration-500' to="/spa" exact>SPA</Link></li>
                                <li className='list-none font-Century-Gothic text-18px tracking-wider text-white'><Link className='hover:opacity-50 duration-500' to="/eat" exact>EAT</Link></li>
                            </div>
                            <div className="sm:hidden block text-center">
                                <li className='list-none pt-3.5 uppercase font-Century-Gothic text-sm leading-6 tracking-wider text-white'><Link className='hover:opacity-50 duration-500' to="/ourstory" exact>Our story</Link></li>
                                <li className='list-none pt-3.5 uppercase font-Century-Gothic text-sm leading-6 tracking-wider text-white'><Link className='hover:opacity-50 duration-500' to="/experience" exact>Experience</Link></li>
                                <li className='list-none pt-3.5 uppercase font-Century-Gothic text-sm leading-6 tracking-wider text-white'><Link className='hover:opacity-50 duration-500' to="/facilities" exact>Facilities</Link></li>
                                <li className='list-none pt-3.5 uppercase font-Century-Gothic text-sm leading-6 tracking-wider text-white'><Link className='hover:opacity-50 duration-500' to="/location" exact>Location</Link></li>
                                <li className='list-none pt-3.5 uppercase font-Century-Gothic text-sm leading-6 tracking-wider text-white'><Link className='hover:opacity-50 duration-500' to="/whatson" exact>What’s On</Link></li>
                                <li className='list-none pt-3.5 uppercase font-Century-Gothic text-sm leading-6 tracking-wider text-white'><Link className='hover:opacity-50 duration-500' to="/offer" exact>Promotions</Link></li>
                                <li className='list-none pt-3.5 uppercase font-Century-Gothic text-sm leading-6 tracking-wider text-white'><Link className='hover:opacity-50 duration-500' to="/blog" exact>Blog</Link></li>
                                <li className='list-none pt-3.5 uppercase font-Century-Gothic text-sm leading-6 tracking-wider text-white'><Link className='hover:opacity-50 duration-500' to="/gallery" exact>Gallery</Link></li>
                            </div>
                            <div className="hidden sm:flex md:justify-around justify-center sm:space-x-16">
                                <ul className='lg:pl-0 pl-10 space-y-5'>
                                    <li className='font-Century-Gothic text-15px leading-5 tracking-wider uppercase text-white font-normal'><Link className='hover:opacity-50 duration-500' to="/stay" exact>Stay</Link></li>
                                    <li className='font-Century-Gothic text-15px leading-5 tracking-wider uppercase text-white font-normal'><Link className='hover:opacity-50 duration-500' to="/spa" exact>Spa</Link></li>
                                    <li className='font-Century-Gothic text-15px leading-5 tracking-wider uppercase text-white font-normal'><Link className='hover:opacity-50 duration-500' to="/eat" exact>Eat</Link></li>
                                    <li className='font-Century-Gothic text-15px leading-5 tracking-wider uppercase text-white font-normal'><Link className='hover:opacity-50 duration-500' to="/ourstory" exact>Our story</Link></li>
                                    <li className='font-Century-Gothic text-15px leading-5 tracking-wider uppercase text-white font-normal'><Link className='hover:opacity-50 duration-500' to="/experience" exact>Experience</Link></li>
                                    <li className='font-Century-Gothic text-15px leading-5 tracking-wider uppercase text-white font-normal'><Link className='hover:opacity-50 duration-500' to="/facilities" exact>Facilities</Link></li>
                                </ul>
                                <ul className='space-y-5'>
                                    <li className='font-Century-Gothic text-15px leading-5 tracking-wider uppercase text-white font-normal'><Link className='hover:opacity-50 duration-500' to="/location" exact>Location</Link></li>
                                    <li className='font-Century-Gothic text-15px leading-5 tracking-wider uppercase text-white font-normal'><Link className='hover:opacity-50 duration-500' to="/whatson" exact>What’s On</Link></li>
                                    <li className='font-Century-Gothic text-15px leading-5 tracking-wider uppercase text-white font-normal'><Link className='hover:opacity-50 duration-500' to="/offer" exact>Promotions</Link></li>
                                    <li className='font-Century-Gothic text-15px leading-5 tracking-wider uppercase text-white font-normal'><Link className='hover:opacity-50 duration-500' to="/blog" exact>Blog</Link></li>
                                    <li className='font-Century-Gothic text-15px leading-5 tracking-wider uppercase text-white font-normal'><Link className='hover:opacity-50 duration-500' to="/gallery" exact>Gallery</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='lg:w-3/12 md:w-3/12 w-full lg:py-0 py-30px pb-0 flex flex-col md:items-start items-center order-3'>
                            <div className='space-y-6'>
                                <div className='hidden sm:flex justify-center text-center cursor-pointer font-Century-Gothic text-13px font-normal tracking-wider uppercase border border-whiteshade-0 border-opacity-20 rounded-full py-2.5 px-26px text-white bg-whiteshade-0 bg-opacity-20 hover:border-opacity-100 hover:bg-opacity-100 hover:text-black duration-1000 ease-in-out'><Link to="/contactus" exact>Contact us</Link></div>
                                <div className='flex justify-center sm:hidden gap-4'>
                                    <a href='https://www.instagram.com/themarlyhotel/?hl=en'><img className="cursor-pointer hover:-translate-y-2 duration-1000 ease-in-out w-42px h-42px" src="../../assets/Footer/svg/Instagram.svg" alt="" /></a>
                                    <a href='https://www.facebook.com/themarlycampsbay'><img className="cursor-pointer hover:-translate-y-2 duration-1000 ease-in-out w-42px h-42px" src="../../assets/Footer/svg/Facebook.svg" alt="" /></a>
                                </div>
                                <div className='font-Century-Gothic sm:text-13px sm:leading-18px text-sm leading-6 font-normal tracking-0.02 sm:text-left text-center sm:text-blackshade2-0 text-whiteshade-0'>
                                    <p className='mb-1'>tel: <Callto phone="+27 (0) 21 437 1287"><span className="cursor-pointer text-whiteshade-0 duration-500 hover:text-blackshade2-0">+27 (0) 21 437 1287</span></Callto></p>
                                    <p className='mb-1'>email: <Mailto email="dm@themarly.co.za" subject="Hello & Welcome" body="Hello world!"><span className="cursor-pointer text-whiteshade-0 duration-500 hover:text-blackshade2-0">dm@themarly.co.za</span></Mailto></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-blackshade-0 grid sm:grid-cols-2 grid-cols-1 lg:px-100px px-50px">
                    <div className='flex sm:justify-start justify-center items-center pl-9px sm:order-1 order-2'>
                        <img src="../../assets/Footer/svg/The Kove Collection.svg" alt="" />
                    </div>
                    <div className='flex flex-wrap sm:justify-end justify-center items-center py-29px opacity-70 gap-18px sm:order-2 order-1'>
                        <Link to="/" exact><li className="list-none font-Century-Gothic text-11px tracking-0.02 text-whiteshade1-0 text-center hover:opacity-50 duration-500">Privacy Policy</li></Link>
                        <Link to="/" exact><li className='list-none font-Century-Gothic text-11px tracking-0.02 text-whiteshade1-0 hover:opacity-50 duration-500'>Terms & Conditions</li></Link>
                        <li className='list-none font-Century-Gothic text-11px tracking-0.02 text-whiteshade1-0 text-right'>All rights reserved 2022 The Marly</li>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer