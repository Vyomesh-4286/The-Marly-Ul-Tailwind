import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ImgGrid from '../../components/ImgGrid/ImgGrid';
import SectionHero from '../../components/SectionHero/SectionHero'
import Zigzig from '../../components/Zigzag/Zigzig'

const ContactUs = () => {

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
                image={"../../assets/Contact Us/Marly_ContactUs.jpg"}
                title={'Contact Us'}
                descrption={"Get in touch with The Marly"}
            />
            <section className='container-fluid lg:pr-0 lg:py-60px py-30px'>
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    <div className='locationIframe order-2'>
                        <img src="../../assets/Contact Us/ContactUs_Tab.jpg" alt="" />
                    </div>
                    <div className="flex items-center lg:my-auto my-4">
                        <div className='lg:w-9/12 mx-auto'>
                            <h1 className='flex flex-wrap font-Gilroy font-light text-40px text-blackshade-0 mb-4'>Let’s get in touch</h1>
                            <p className='flex flex-wrap font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0'>
                                Tel: <span className='text-white'>1</span><Callto phone="+27 (0) 21 437 1287"><span className="cursor-pointer text-blackshade-0 duration-500 hover:text-blackshade2-0">+27 (0) 21 437 1287</span></Callto>
                            </p>
                            <p className='flex flex-wrap font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0 mb-8'>
                                Email: <span className='text-white'>1</span><Mailto email="dm@themarly.co.za 201" subject="Hello & Welcome" body="Hello world!"><span className="cursor-pointer text-blackshade-0 duration-500 hover:text-blackshade2-0">dm@themarly.co.za 201</span></Mailto>
                            </p>
                            <p className='flex flex-wrap font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0 mb-8'>
                                201 The Promenade, Victoria Road, Camps Bay, South Africa
                            </p>
                            <p className='flex flex-wrap font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0 mb-8'>
                                GPS: 33° 95’31.18″S 18° 37’73’03″E
                            </p>
                            <div className="flex">
                                <Link to="/" exact><div className='cursor-pointer hover:bg-blackshade-0 hover:text-whiteshade-0 font-Century-Gothic text-13px font-normal tracking-wider uppercase border border-blackshade-0 border-opacity-20 rounded-full py-2.5 px-25px text-blackshade-0 duration-1000 ease-in-out'>Make a Booking</div></Link>
                            </div>
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

export default ContactUs