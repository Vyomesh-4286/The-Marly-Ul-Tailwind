import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import 'swiper/css';

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SectionHero from '../../components/SectionHero/SectionHero'
import Zigzig from '../../components/Zigzag/Zigzig'

const Homepage = () => {

    const handlePrevClick1 = () => {
        const swiper = document.querySelector('.homepagecontentSlider').swiper;
        swiper.slidePrev();
    }

    return (
        <>
            <Header />
            <SectionHero
                image={"../../assets/Homepage/Marly_Homepage.jpg"}
                title={'Discover Cape Town’s most renowned seaside stay'}
                btn={'Watch video'}
                isButton={true}
                isShadow={true}
            />
            <section className='container-fluid lg:pl-0'>
                <Zigzig
                    image={"../../assets/Homepage/Homepage_Tab_1.jpg"}
                    title={'Studio Sea Facing Room'}
                    descrption={"Named after the 17th Century “Chateau de Marly” which was synomymous with leisure for Louis XIV and his family, The Marly Boutique Hotel continues its reputation of luxury and playfulness in modern-day Cape Town. The beauty of the property is that there is simply no need to leave. "}
                    btn={'discover Our Story'}
                    isButton1={true}
                />
            </section>
            <section className='container-fluid lg:pr-0 lg:py-60px py-30px bg-whiteshade2-0 grid lg:grid-cols-2 grid-cols-1 gap-4'>
                <div className='m-auto flex my-4'>
                    <div className='lg:max-w-[417px]'>
                        <h1 className='flex flex-wrap font-Gilroy font-light text-40px text-blackshade-0 mb-4'>The most celebrated boutique hotel in Camps Bay</h1>
                        <p className='flex flex-wrap font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0 mb-8'>Elevated above the vibrant Camps Bay Beach strip, The Marly Boutique Hotel and Spa offers guests an urban hideaway that celebrates sophisticated design, beachfront living and five-star service. Set the tone of your stay with a sea-facing or mountain-facing suite and experience the essence of the Mother City.</p>
                        <div className="flex">
                            <div className='cursor-pointer font-Century-Gothic text-13px font-normal tracking-wider uppercase border border-blackshade-0 border-opacity-20 rounded-full py-2.5 px-25px text-blackshade-0 hover:bg-blackshade-0 hover:text-whiteshade-0 duration-1000 ease-in-out'>Explore Our rooms</div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-29px'>
                    <div className="swiper-controller my-auto lg:ml-0 ml-4">
                        <a className='button-prev cursor-pointer' onClick={handlePrevClick1} ><img className='max-w-max' src="../../assets/Homepage/svg/Arrow-Left.svg" alt="" /></a>
                    </div>
                    <Swiper slidesPerView={1.8}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.1
                            },
                            768: {
                                slidesPerView: 1.3
                            },
                            1024: {
                                slidesPerView: 1.5
                            },
                            1280: {
                                slidesPerView: 1.8
                            }
                        }}
                        spaceBetween={30}
                        loop={true}
                        className="homepagecontentSlider">
                        <SwiperSlide className='relative'>
                            <img className='w-full h-489px object-cover' src="../../assets/Homepage/Homepage_Swiper_1.jpg" alt="Life_in_marly" />
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <img className='w-full h-489px object-cover' src="../../assets/Homepage/Homepage_Swiper_2.jpg" alt="Life_in_marly" />
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <img className='w-full h-489px object-cover' src="../../assets/Homepage/Homepage_Swiper_1.jpg" alt="Life_in_marly" />
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <img className='w-full h-489px object-cover' src="../../assets/Homepage/Homepage_Swiper_2.jpg" alt="Life_in_marly" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className='container-fluid lg:pl-0'>
                <Zigzig
                    image={"../../assets/Homepage/Homepage_Tab_2.jpg"}
                    title={'Bask in luxury at The Marly Spa'}
                    descrption={"Step inside a world of calm at The Marly Spa with a selection of artisan massages and beauty therapies to choose from. Elegantly curated, the spa features 4 treatment rooms, nail stations and tranquil spaces for private meditation. "}
                    btn={'Explore Our spa'}
                    isButton1={true}
                />
            </section>
            <section className="container-fluid lg:mt-60px mt-30px homepageswiper bg-whiteshade1-0 lg:py-95px md:py-16 py-5">
                <h1 className='font-Gilroy font-light text-40px leading-60px text-blackshade-0 text-center pb-69px'>Ultimate beachside luxury</h1>
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
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Homepage/Homepage_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Discover our magnificant rooftop pool</p>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Homepage/Homepage_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Discover our magnificant rooftop pool</p>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Homepage/Homepage_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Discover our magnificant rooftop pool</p>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Homepage/Homepage_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Discover our magnificant rooftop pool</p>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Homepage/Homepage_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Discover our magnificant rooftop pool</p>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Homepage/Homepage_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Discover our magnificant rooftop pool</p>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Homepage/Homepage_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Discover our magnificant rooftop pool</p>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Homepage/Homepage_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Discover our magnificant rooftop pool</p>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Homepage/Homepage_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Discover our magnificant rooftop pool</p>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Homepage/Homepage_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Discover our magnificant rooftop pool</p>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Homepage/Homepage_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Discover our magnificant rooftop pool</p>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full pb-52px h-626px object-cover' src="../../assets/Homepage/Homepage_Swiper.jpg" alt="Life_in_marly" />
                        <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Discover our magnificant rooftop pool</p>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className='container-fluid lg:pr-0'>
                <Zigzig
                    image={"../../assets/Homepage/Homepage_Tab_3.jpg"}
                    title={'Taste your way through Cape Town'}
                    descrption={"Be spoilt for choice with our collection of restaurants, cafés and bars on The Marly’s doorstep. Curate your food journey to your liking - from fine-dining at Bilboa and cocktails at Chinchilla, to breakfast at La Belle Bistro and elegant dining at Paranga, the table is yours."}
                    btn={'Explore Our restaurants'}
                    isOrder={true}
                    isButton1={true}
                />
            </section>
            <Footer />
        </>
    )
}

export default Homepage