import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ImgGrid from '../../components/ImgGrid/ImgGrid'
import SectionHero from '../../components/SectionHero/SectionHero'

const Gallery = () => {

    const [openTab, setOpenTab] = React.useState(1);

    return (
        <>
            <Header />
            <SectionHero
                image={"../../assets/Gallery/Marly_Gallery.jpg"}
                title={'Gallery'}
                descrption={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
            />
            <section className="flex flex-wrap container-fluid lg:pt-100px md:pt-16 pt-5">
                <h1 className='mb-4 font-Gilroy font-light text-40px text-blackshade-0'>Discover the beauty that is The Marly</h1>
                <p className='w-1/2 font-Century-Gothic font-normal text-sm leading-6 text-blackshade2-0'>Id aliquet lectus proin nibh nisl condimentum id. Dui id ornare arcu odio ut sem nulla pharetra. Velit euismod in pellentesque massa placerat. </p>
                <div className="w-full lg:pt-100px md:pt-16 pt-5">
                    <ul
                        className="w-346px flex mb-0 list-none flex-wrap pb-69px flex-row"
                        role="tablist"
                    >
                        <li className="flex-auto text-center">
                            <a
                                className={"px-1 font-Century-Gothic font-normal text-13px tracking-wider uppercase text-blackshade-0 text-center " +
                                    (openTab === 1 ? "border-b-2 border-blackshade2-0 pb-0.5" : "border-0")}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                All
                            </a>
                        </li>
                        <li className="flex-auto text-center">
                            <a
                                className={"px-1 font-Century-Gothic font-normal text-13px tracking-wider uppercase text-blackshade-0 text-center " +
                                    (openTab === 2 ? "border-b-2 border-blackshade2-0 pb-0.5" : "border-0")}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                stay
                            </a>
                        </li>
                        <li className="flex-auto text-center">
                            <a
                                className={"px-1 font-Century-Gothic font-normal text-13px tracking-wider uppercase text-blackshade-0 text-center " +
                                    (openTab === 3 ? "border-b-2 border-blackshade2-0 pb-0.5" : "border-0")}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                spa
                            </a>
                        </li>
                        <li className="flex-auto text-center">
                            <a
                                className={"px-1 font-Century-Gothic font-normal text-13px tracking-wider uppercase text-blackshade-0 text-center " +
                                    (openTab === 4 ? "border-b-2 border-blackshade2-0 pb-0.5" : "border-0")}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                }}
                                data-toggle="tab"
                                href="#link4"
                                role="tablist"
                            >
                                experiences
                            </a>
                        </li>
                        <li className="flex-auto text-center">
                            <a
                                className={"px-1 font-Century-Gothic font-normal text-13px tracking-wider uppercase text-blackshade-0 text-center " +
                                    (openTab === 5 ? "border-b-2 border-blackshade2-0 pb-0.5" : "border-0")}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(5);
                                }}
                                data-toggle="tab"
                                href="#link4"
                                role="tablist"
                            >
                                experiences
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-y-8 gap-30px'>
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_1.jpg" alt="" />
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_2.jpg" alt="" />
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_3.jpg" alt="" />
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_4.jpg" alt="" />
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_5.jpg" alt="" />
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_6.jpg" alt="" />
                                </div>
                                <div className="flex justify-center lg:pt-100px pt-8">
                                    <div className='cursor-pointer hover:bg-blackshade-0 hover:text-whiteshade-0 font-Century-Gothic text-13px font-normal tracking-wider uppercase border border-blackshade-0 border-opacity-20 rounded-full py-2.5 px-25px text-blackshade-0 duration-1000 ease-in-out'>load more</div>
                                </div>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-y-100px gap-8'>
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_6.jpg" alt="" />
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_5.jpg" alt="" />
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_4.jpg" alt="" />
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_3.jpg" alt="" />
                                </div>
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-y-100px gap-8'>
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_4.jpg" alt="" />
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_3.jpg" alt="" />
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_2.jpg" alt="" />
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_1.jpg" alt="" />
                                </div>
                            </div>
                            <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-y-100px gap-8'>
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_6.jpg" alt="" />
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_5.jpg" alt="" />
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_2.jpg" alt="" />
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_1.jpg" alt="" />
                                </div>
                            </div>
                            <div className={openTab === 5 ? "block" : "hidden"} id="link3">
                                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-y-100px gap-8'>
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_2.jpg" alt="" />
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_1.jpg" alt="" />
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_4.jpg" alt="" />
                                    <img className='w-full h-625px object-cover' src="../../assets/Gallery/Img_5.jpg" alt="" />
                                </div>
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

export default Gallery