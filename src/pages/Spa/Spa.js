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

const Spa = () => {

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
            <Header />
            <SectionHero
                image={"../../assets/Spa/Marly_Spa.jpg"}
                title={'Relax at the Marly Spa'}
                descrption={"Escape the bustling city and reset your body and mind at The Marly Spa in style."}
            />
            <section className='container-fluid lg:pr-0'>
                <Zigzig
                    image={"../../assets/Spa/Spa_Tab_1.jpg"}
                    title={'Spa Treatments'}
                    descrption={"The Marly Spa prides itself in offering the highest standard of bespoke wellness and beauty treatments suitable to all skin types. Signature skin treatments include the Gold & Collagen Facial by Carol Joy, the LING New York Wow Triple Peel, and the BABOR Anti-Aging Facial. Alternatively, unwind with a Himalayan Salt Stone Massage tailored to your liking."}
                    btn={'View Spa menu'}
                    btn1={'Book a treament'}
                    isOrder={true}
                />
            </section>
            <section className='container-fluid lg:pl-0'>
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:mt-60px mt-30px lg:py-60px py-30px'>
                    <div className='lg:order-first order-last'>
                        <img className='w-full h-544px object-cover' src="../../assets/Spa/Spa_Tab_2.jpg" alt="" />
                    </div>
                    <div className="flex items-center lg:my-auto my-4 mx-auto">
                        <div className='lg:w-9/12 mx-auto'>
                            <h1 className='flex flex-wrap font-Gilroy font-light text-40px text-blackshade-0 mb-4'>Spa Bookings</h1>
                            <p className='flex flex-wrap font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0 mb-8'>
                                The Marly Spa welcomes both hotel guests and day visitors from 9 am - 6 pm, Mondays to Sundays. Book your appointment in advance to avoid disappointment. Get in touch below:
                            </p>
                            <p className='font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0 mb-8'>
                                <span className="cursor-pointer text-blackshade-0 duration-500 hover:text-blackshade2-0">Operating Hours</span><br />
                                Monday to Sunday: 09:00 – 18:00
                            </p>
                            <p className='flex flex-wrap font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0'>
                                Email: <span className='text-white'>1</span><Mailto email="reservations@themarlyspa.co.za" subject="Hello & Welcome" body="Hello world!"><span className="cursor-pointer text-blackshade-0 duration-500 hover:text-blackshade2-0">reservations@themarlyspa.co.za</span></Mailto>
                            </p>
                            <p className='flex flex-wrap font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0 mb-8'>
                                Tel: <span className='text-white'>1</span><Callto phone="+27 (0) 21 437 1287"><span className="cursor-pointer text-blackshade-0 duration-500 hover:text-blackshade2-0">+27 (0) 21 437 1287</span></Callto>
                            </p>
                            <div className="flex">
                                <Link to="/" exact><div className='cursor-pointer hover:bg-blackshade-0 hover:text-whiteshade-0 font-Century-Gothic text-13px font-normal tracking-wider uppercase border border-blackshade-0 border-opacity-20 rounded-full py-2.5 px-25px text-blackshade-0 duration-1000 ease-in-out'>Contact Us</div></Link>
                                <Link to="/" exact><div className='cursor-pointer font-Century-Gothic text-13px font-normal tracking-wider uppercase after:pb-1 relative after:absolute after:block after:w-full after:border-b after:border-blackshade-0 after:border-opacity-20 after:duration-1000 ease-in-out hover:after:w-0 my-2.5 mx-25px text-blackshade-0'>Book a treament</div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid lg:mt-60px mt-30px spaswiper lg:py-95px md:py-16 py-5">
                <div className="spaswiper1">
                    <h1 className='font-Gilroy font-light text-40px leading-60px text-blackshade-0 text-center pb-69px'>Your sanctuary for self-care and wellbeing</h1>
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
                            <img className='w-full pb-52px h-626px object-cover' src="../../assets/Spa/Spa_Swiper.jpg" alt="Life_in_marly" />
                            <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Experience our AGE DEFYING MANICURE</p>
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <img className='w-full pb-52px h-626px object-cover' src="../../assets/Spa/Spa_Swiper.jpg" alt="Life_in_marly" />
                            <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Experience our AGE DEFYING MANICURE</p>
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <img className='w-full pb-52px h-626px object-cover' src="../../assets/Spa/Spa_Swiper.jpg" alt="Life_in_marly" />
                            <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Experience our AGE DEFYING MANICURE</p>
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <img className='w-full pb-52px h-626px object-cover' src="../../assets/Spa/Spa_Swiper.jpg" alt="Life_in_marly" />
                            <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Experience our AGE DEFYING MANICURE</p>
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <img className='w-full pb-52px h-626px object-cover' src="../../assets/Spa/Spa_Swiper.jpg" alt="Life_in_marly" />
                            <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Experience our AGE DEFYING MANICURE</p>
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <img className='w-full pb-52px h-626px object-cover' src="../../assets/Spa/Spa_Swiper.jpg" alt="Life_in_marly" />
                            <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Experience our AGE DEFYING MANICURE</p>
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <img className='w-full pb-52px h-626px object-cover' src="../../assets/Spa/Spa_Swiper.jpg" alt="Life_in_marly" />
                            <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Experience our AGE DEFYING MANICURE</p>
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <img className='w-full pb-52px h-626px object-cover' src="../../assets/Spa/Spa_Swiper.jpg" alt="Life_in_marly" />
                            <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Experience our AGE DEFYING MANICURE</p>
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <img className='w-full pb-52px h-626px object-cover' src="../../assets/Spa/Spa_Swiper.jpg" alt="Life_in_marly" />
                            <p className='z-10 md:pl-168px sm:pl-60px pl-5 lg:pb-0 pb-52px font-Century-Gothic font-normal text-base leading-5 text-blackshade-0'>Experience our AGE DEFYING MANICURE</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="spaswiper2 lg:mt-60px mt-30px bg-whiteshade2-0 pt-84px pb-60px">
                    <Swiper
                        direction='horizontal'
                        speed={2000}
                        grabCursor={true}
                        parallax={true}
                        delay={6500}
                        disableOnInteraction={false}
                        watchSlidesProgress={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="spaswiper2">
                        <SwiperSlide>
                            <div className='mx-auto w-3/5'>
                                <p className='pb-26px font-Gilroy font-light text-26px text-right text-blackshade-0'>Hands down one of the best massages I’ve had, Zanele is a miracle worker. A must for anyone looking to relax in Camps Bay!</p>
                                <p className='pb-14 font-Century-Gothic font-normal text-base text-right text-blackshade-0'>-Elana Botha</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='mx-auto w-3/5'>
                                <p className='pb-26px font-Gilroy font-light text-26px text-right text-blackshade-0'>Hands down one of the best massages I’ve had, Zanele is a miracle worker. A must for anyone looking to relax in Camps Bay!</p>
                                <p className='pb-14 font-Century-Gothic font-normal text-base text-right text-blackshade-0'>-Elana Botha</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='mx-auto w-3/5'>
                                <p className='pb-26px font-Gilroy font-light text-26px text-right text-blackshade-0'>Hands down one of the best massages I’ve had, Zanele is a miracle worker. A must for anyone looking to relax in Camps Bay!</p>
                                <p className='pb-14 font-Century-Gothic font-normal text-base text-right text-blackshade-0'>-Elana Botha</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
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

export default Spa