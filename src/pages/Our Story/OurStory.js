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

const OurStory = () => {
    return (
        <>
            <Header />
            <SectionHero
                image={"../../assets/Our Story/Marly_Ourstory.jpg"}
                title={'Our Story'}
                descrption={"Brought to life by The Kove Collection’s dedication to outstanding hospitality, The Marly sells a lifestyle, not just luxury accommodation."}
            />
            <section className='container-fluid lg:pr-0'>
                <Zigzig
                    image={"../../assets/Our Story/Ourstory_Tab.jpg"}
                    title={'Life is Better at The Marly'}
                    descrption={"Positioned in the trendy suburb of Camps Bay, The Marly Boutique Hotel & Spa offers a uniquely curated hospitality experience for travelers and locals alike. The 38-room luxury hotel boasts a rooftop swimming pool with remarkable 360-degree views of Cape Town’s iconic mountain ranges, a deluxe spa, gym and a tasteful collection of restaurants, cafés and bars neighboring the property."}
                    isDescrption={true}
                    descrption1={"The Marly can best be described as the perfect balance between understated luxury and playfulness. Paired with excellence in hospitality and a passionate on-the-ground team, you might never want to leave."}
                    btn={'STAY WITH US'}
                    isOrder={true}
                    isButton1={true}
                />
            </section>
            <section className='lg:py-60px py-30px'>
                <div className='relative'>
                    <img className='w-full h-screen object-cover' src="../../assets/Our Story/Marly_Ourstory_1.jpg" alt="" />
                    <div className='container-fluid w-2/3 absolute bottom-0 left-0 pb-100px'>
                        <h1 className='font-Gilroy font-light text-60px text-left text-whiteshade-0 mb-9'>The Marly - a destination in its entirety.</h1>
                        <div className="flex items-center justify-start">
                            <Link to="/" exact><div className='cursor-pointer font-Century-Gothic text-13px font-normal tracking-wider uppercase border border-whiteshade-0 border-opacity-20 rounded-full py-2.5 px-26px text-white bg-whiteshade-0 bg-opacity-20 hover:border-opacity-100 hover:bg-opacity-100 hover:text-black duration-1000 ease-in-out'>Watch video</div></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid spaswiper lg:py-95px md:py-16 py-5">
                <h1 className='font-Gilroy font-light text-40px leading-60px text-blackshade-0 text-center pb-69px'>Explore The Marly’s hidden gems</h1>
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
                    className="spaswiper1">
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Our Story/Ourstory_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Exceptional views of South Africa’s most famous mountain</p>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Our Story/Ourstory_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Exceptional views of South Africa’s most famous mountain</p>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Our Story/Ourstory_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Exceptional views of South Africa’s most famous mountain</p>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Our Story/Ourstory_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Exceptional views of South Africa’s most famous mountain</p>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className='container-fluid lg:mt-60px mt-30px lg:py-60px py-30px bg-whiteshade1-0 bg-opacity-30'>
                <h1 className='pb-20 font-Gilroy font-light text-40px leading-60px text-center text-blackshade-0'>Explore the best of The Marly</h1>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-30px">
                    <ImgGrid
                        image={"../../assets/Best of The Marly/Best_Marly_1.jpg"}
                        title={'Location'}
                        descrption={"Located in sought-after Camps Bay, The Marly lies only seven minutes from Cape Town City Centre."}
                        btn={'Explore'}
                        isHight={true}
                        isWidth={true}
                    />
                    <ImgGrid
                        image={"../../assets/Best of The Marly/Best_Marly_4.jpg"}
                        title={'Stay'}
                        descrption={"Set the tone of your stay with a luxury sea-facing or mountain-facing studio, room or suite."}
                        btn={'Explore'}
                        isHight={true}
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

export default OurStory