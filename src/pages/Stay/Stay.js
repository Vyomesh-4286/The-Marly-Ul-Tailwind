import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ImgGrid from '../../components/ImgGrid/ImgGrid'
import SectionHero from '../../components/SectionHero/SectionHero'
import Zigzig from '../../components/Zigzag/Zigzig'

const Stay = () => {

    const [openTab, setOpenTab] = React.useState(1);

    return (
        <>
            <Header />
            <SectionHero
                image={"../../assets/Stay/Marly_Stay.jpg"}
                title={'Stay at The Marly'}
                descrption={"Set the tone of your stay with a sea-facing or mountain-facing room in the heart of Camps Bay."}
            />
            <section className="flex flex-wrap">
                <div className="w-full">
                    <div className="bg-whiteshade2-0 lg:pt-100px md:pt-16 pt-5">
                        <h1 className='container-fluid font-Gilroy text-40px font-normal text-blackshade-0'>Explore our room types:</h1>
                        <div className='container-fluid'>
                            <ul
                                className="w-310px flex mb-0 list-none flex-wrap pt-7 pb-69px flex-row"
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
                                        sea facing
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
                                        Mountain facing
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <section className='container-fluid lg:pl-0'>
                                    <Zigzig
                                        image={"../../assets/Stay/Stay_Tab_1.jpg"}
                                        title={'Studio Sea Facing Room'}
                                        descrption={"Make yourself at home in our 30m² Sea Facing Studio Rooms with uninterrupted ocean views and a cozy 10m² balcony. Expect a spacious bedroom with an en-suite bathroom complete with Smart TV, Marshall speaker, Nespresso coffee machine and minibar. "}
                                        btn={'Explore'}
                                        btn1={'Book Your Stay'}
                                    />
                                </section>
                                <section className='container-fluid lg:pr-0'>
                                    <Zigzig
                                        image={"../../assets/Stay/Stay_Tab_2.jpg"}
                                        title={'Classic Sea Facing Room'}
                                        descrption={"Enjoy the comfort of our 35m² Classic Sea Facing Room featuring a spacious bedroom with lounge area, en-suite bathroom and a 10m² balcony with sea views. Equipped with Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                        btn={'Explore'}
                                        btn1={'Book Your Stay'}
                                        isOrder={true}
                                    />
                                </section>
                                <section className='container-fluid lg:pl-0'>
                                    <Zigzig
                                        image={"../../assets/Stay/Stay_Tab_3.jpg"}
                                        title={'Junior Sea Facing Suite'}
                                        descrption={"The Junior Sea Facing Suite of 45m² features a bedroom with a separate lounge area, an en-suite bathroom with a large rain shower and a 20m² balcony with sun loungers and expansive sea views. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                        btn={'Explore'}
                                        btn1={'Book Your Stay'}
                                    />
                                </section>
                                <section className='container-fluid lg:pr-0'>
                                    <Zigzig
                                        image={"../../assets/Stay/Stay_Tab_4.jpg"}
                                        title={'Superior Sea Facing Suite'}
                                        descrption={"Generously sized at 45m² - 54m²  with a 27m² balcony, the Superior Sea Facing Suites feature a spacious bedroom, lounge area, dining room table and en-suite bathroom with bath and shower. The balcony boasts endless sea views, an outdoor shower, dining table and sun loungers. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                        btn={'Explore'}
                                        btn1={'Book Your Stay'}
                                        isOrder={true}
                                    />
                                </section>
                                <section className='container-fluid lg:pl-0'>
                                    <Zigzig
                                        image={"../../assets/Stay/Stay_Tab_5.jpg"}
                                        title={'Deluxe Sea Facing Suite'}
                                        descrption={"Enjoy the luxury of the Deluxe Sea Facing Suite of 45m² - 66m² with a 44m² balcony complete with jacuzzi, shower, dining table, sun loungers and marvelous ocean views. The room features a spacious bedroom, lounge area and en-suite bathroom with bath and shower. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                        btn={'Explore'}
                                        btn1={'Book Your Stay'}
                                    />
                                </section>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <section className='container-fluid lg:pl-0'>
                                    <Zigzig
                                        image={"../../assets/Stay/Stay_Tab_3.jpg"}
                                        title={'Junior Sea Facing Suite'}
                                        descrption={"The Junior Sea Facing Suite of 45m² features a bedroom with a separate lounge area, an en-suite bathroom with a large rain shower and a 20m² balcony with sun loungers and expansive sea views. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                        btn={'Explore'}
                                        btn1={'Book Your Stay'}
                                    />
                                </section>
                                <section className='container-fluid lg:pr-0'>
                                    <Zigzig
                                        image={"../../assets/Stay/Stay_Tab_4.jpg"}
                                        title={'Superior Sea Facing Suite'}
                                        descrption={"Generously sized at 45m² - 54m²  with a 27m² balcony, the Superior Sea Facing Suites feature a spacious bedroom, lounge area, dining room table and en-suite bathroom with bath and shower. The balcony boasts endless sea views, an outdoor shower, dining table and sun loungers. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                        btn={'Explore'}
                                        btn1={'Book Your Stay'}
                                        isOrder={true}
                                    />
                                </section>
                                <section className='container-fluid lg:pl-0'>
                                    <Zigzig
                                        image={"../../assets/Stay/Stay_Tab_5.jpg"}
                                        title={'Deluxe Sea Facing Suite'}
                                        descrption={"Enjoy the luxury of the Deluxe Sea Facing Suite of 45m² - 66m² with a 44m² balcony complete with jacuzzi, shower, dining table, sun loungers and marvelous ocean views. The room features a spacious bedroom, lounge area and en-suite bathroom with bath and shower. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                        btn={'Explore'}
                                        btn1={'Book Your Stay'}
                                    />
                                </section>
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                <section className='container-fluid lg:pl-0'>
                                    <Zigzig
                                        image={"../../assets/Stay/Stay_Tab_5.jpg"}
                                        title={'Deluxe Sea Facing Suite'}
                                        descrption={"Enjoy the luxury of the Deluxe Sea Facing Suite of 45m² - 66m² with a 44m² balcony complete with jacuzzi, shower, dining table, sun loungers and marvelous ocean views. The room features a spacious bedroom, lounge area and en-suite bathroom with bath and shower. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                        btn={'Explore'}
                                        btn1={'Book Your Stay'}
                                    />
                                </section>
                                <section className='container-fluid lg:pr-0'>
                                    <Zigzig
                                        image={"../../assets/Stay/Stay_Tab_4.jpg"}
                                        title={'Superior Sea Facing Suite'}
                                        descrption={"Generously sized at 45m² - 54m²  with a 27m² balcony, the Superior Sea Facing Suites feature a spacious bedroom, lounge area, dining room table and en-suite bathroom with bath and shower. The balcony boasts endless sea views, an outdoor shower, dining table and sun loungers. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                        btn={'Explore'}
                                        btn1={'Book Your Stay'}
                                        isOrder={true}
                                    />
                                </section>
                                <section className='container-fluid lg:pl-0'>
                                    <Zigzig
                                        image={"../../assets/Stay/Stay_Tab_3.jpg"}
                                        title={'Junior Sea Facing Suite'}
                                        descrption={"The Junior Sea Facing Suite of 45m² features a bedroom with a separate lounge area, an en-suite bathroom with a large rain shower and a 20m² balcony with sun loungers and expansive sea views. All suites feature a Smart TV, Marshall speaker, Nespresso coffee machine and minibar."}
                                        btn={'Explore'}
                                        btn1={'Book Your Stay'}
                                    />
                                </section>
                            </div>
                        </div>
                    </div>
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
                        isButton={true}
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
                        isButton={true}
                        isWidth={true}
                    />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Stay