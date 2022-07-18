import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SectionHero from '../../components/SectionHero/SectionHero'
import Zigzig from '../../components/Zigzag/Zigzig'
import ImgGrid from '../../components/ImgGrid/ImgGrid';

const Location = () => {
    return (
        <>
            <Header />
            <SectionHero
                image={"../../assets/Location/Marly_Location.jpg"}
                title={'Discover Camps Bay'}
                descrption={"Experience a luxury stay like no other at one of South Africa’s most premier and exclusive beaches"}
            />
            <section className='container-fluid lg:pr-0'>
                <Zigzig
                    image={"../../assets/Location/Location_Tab.jpg"}
                    title={'Experience Camps Bay'}
                    descrption={"Camps Bay, under the Twelve Apostles mountain range, is a chic suburb on the trendy Atlantic Seaboard. Sidewalk cafes, bars and a casual, relaxed atmosphere make this spot a beachcomber’s paradise; while the sparkling nightlife attracts the young and the young at heart. It’s a mere seven minutes from the centre of Cape Town, one of the world’s most beautiful cities."}
                    descrption1={"Camps Bay gives its name to one of the city’s largest and most picturesque beaches."}
                    isOrder={true}
                    isButton={true}
                    isDescrption={true}
                />
            </section>
            <section className="container-fluid lg:mt-60px mt-30px homepageswiper bg-whiteshade1-0 lg:py-100px md:py-16 py-5">
                <Swiper
                    direction='horizontal'
                    speed={2000}
                    grabCursor={true}
                    parallax={true}
                    delay={6500}
                    disableOnInteraction={false}
                    watchSlidesProgress={true}
                    pagination={{
                        type: "fraction",
                        formatFractionCurrent: function (number) {
                            return ('' + number + ' ').slice(-8);
                        },
                        formatFractionTotal: function (number) {
                            return ('' + ' ' + number).slice(-3);
                        },
                        renderFraction: function (currentClass, totalClass) {
                            return '<span class="' + currentClass + '"></span>' +
                                '<img class="pt-3 pl-2.5 pr-3.5" src="../../assets/Homepage/svg/Bar.svg" alt="" />' +
                                '<span class="' + totalClass + '"></span>';
                        }
                    }}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    className="homepagecontentSlider1">
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Location/Location_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Perfect positioning on  Camps Bay’s beachfront</p>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Location/Location_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Perfect positioning on  Camps Bay’s beachfront</p>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Location/Location_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Perfect positioning on  Camps Bay’s beachfront</p>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Location/Location_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Perfect positioning on  Camps Bay’s beachfront</p>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className='container-fluid lg:py-100px md:py-16 py-5 xl:pr-52'>
                <h1 className='mb-6 font-Gilroy font-light text-40px text-blackshade-0'>Discover points of interest near The Marly</h1>
                <p className='w-1/2 mb-72px font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0'>The Marly will exceed all your expectations and is the ideal setting from where to explore all that the beautiful Mother City and surrounds have to offer.</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-x-130px xl:gap-62px gap-12">
                    <div className='flex'>
                        <div className="flex items-center">
                            <img src="../../assets/Location/svg/Location_1.svg" alt="" />
                        </div>
                        <div className='pl-50px'>
                            <h1 className='font-Gilroy font-light text-26px leading-56px lg:leading-9 xl:leading-56px text-blackshade-0'>V&A Waterfront</h1>
                            <p className='font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0'>6km away</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className="flex items-center">
                            <img src="../../assets/Location/svg/Location_2.svg" alt="" />
                        </div>
                        <div className='pl-50px'>
                            <h1 className='font-Gilroy font-light text-26px leading-56px lg:leading-9 xl:leading-56px text-blackshade-0'>Table Mountain</h1>
                            <p className='font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0'>6km away</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className="flex items-center">
                            <img src="../../assets/Location/svg/Location_3.svg" alt="" />
                        </div>
                        <div className='pl-50px'>
                            <h1 className='font-Gilroy font-light text-26px leading-56px lg:leading-9 xl:leading-56px text-blackshade-0'>Point of Interest</h1>
                            <p className='font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0'>6km away</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className="flex items-center">
                            <img src="../../assets/Location/svg/Location_4.svg" alt="" />
                        </div>
                        <div className='pl-50px'>
                            <h1 className='font-Gilroy font-light text-26px leading-56px lg:leading-9 xl:leading-56px text-blackshade-0'>Point of Interest</h1>
                            <p className='font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0'>6km away</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className="flex items-center">
                            <img src="../../assets/Location/svg/Location_5.svg" alt="" />
                        </div>
                        <div className='pl-50px'>
                            <h1 className='font-Gilroy font-light text-26px leading-56px lg:leading-9 xl:leading-56px text-blackshade-0'>Point of interest</h1>
                            <p className='font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0'>6km away</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className="flex items-center">
                            <img src="../../assets/Location/svg/Location_6.svg" alt="" />
                        </div>
                        <div className='pl-50px'>
                            <h1 className='font-Gilroy font-light text-26px leading-56px lg:leading-9 xl:leading-56px text-blackshade-0'>Point of Interest</h1>
                            <p className='font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0'>6km away    </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid lg:pl-0 lg:py-60px py-30px'>
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    <div className='locationIframe'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.538037660702!2d18.375366915283678!3d-33.95300793063319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6652830846a1%3A0xfffb179bfc23627f!2sThe%20Marly%20Boutique%20Hotel%20and%20Spa!5e0!3m2!1sen!2sin!4v1657784083976!5m2!1sen!2sin" className='w-full h-510px border-0 grayscale' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="flex items-center lg:my-auto my-4 mx-auto">
                        <div className='lg:w-9/12 mx-auto'>
                            <h1 className='flex flex-wrap font-Gilroy font-light text-40px text-blackshade-0 mb-4'>How to find us</h1>
                            <p className='flex flex-wrap font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0 mb-8'>The Marly is located a mere 7 minutes from the Cape Town city centre, in the iconic seaside suburb of Camps Bay.
                            </p>
                            <p className='flex flex-wrap font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0 mb-8'>
                                201 The Promenade, Victoria Road, Camps Bay, South Africa
                            </p>
                            <p className='flex flex-wrap font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0 mb-8'>
                                GPS: 33° 95’31.18″S 18° 37’73’03″E
                            </p>
                            <div className='flex'>
                                <Link to="/" exact><div className='cursor-pointer hover:bg-blackshade-0 hover:text-whiteshade-0 font-Century-Gothic text-13px font-normal tracking-wider uppercase border border-blackshade-0 border-opacity-20 rounded-full py-2.5 px-25px text-blackshade-0 duration-1000 ease-in-out'>view on map</div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid lg:mt-60px mt-30px lg:py-60px py-30px bg-whiteshade1-0 bg-opacity-30'>
                <h1 className='pb-20 font-Gilroy font-light text-40px leading-60px text-center text-blackshade-0'>Explore the best of The Marly</h1>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-30px">
                    <ImgGrid
                        image={"../../assets/Best of The Marly/Best_Marly_4.jpg"}
                        title={'Stay'}
                        descrption={"Set the tone of your stay with a luxury sea-facing or mountain-facing studio, room or suite."}
                        btn={'Explore'}
                        isHight={true}
                        isWidth={true}
                    />
                    <ImgGrid
                        image={"../../assets/Best of The Marly/Best_Marly_2.jpg"}
                        title={'Experiences'}
                        descrption={"Stay in luxury, eat whole-heartedly and unwind in tranquility at The Marly."}
                        btn={'Explore'}
                        isHight={true}
                        isButton={true}
                        isWidth={true}
                    />
                    <ImgGrid
                        image={"../../assets/Best of The Marly/Best_Marly_3.jpg"}
                        title={'Promotions'}
                        descrption={"Discover our special offers for every occasion, season and traveler."}
                        btn={'Explore'}
                        isHight={true}
                        isWidth={true}
                    />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Location