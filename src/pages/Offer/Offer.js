import React from 'react'
import MarlyRooms from '../../components/Explore our rooms/MarlyRooms'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ImgGrid from '../../components/ImgGrid/ImgGrid'
import SectionHero from '../../components/SectionHero/SectionHero'
import Zigzig from '../../components/Zigzag/Zigzig'

const Offer = () => {

    const [openTab, setOpenTab] = React.useState(1);

    return (
        <>
            <Header />
            <SectionHero
                image={"../../assets/Offer/Marly_Offer.jpg"}
                title={'Promotions at The Marly'}
                descrption={"Make your stay at The Marly a little sweeter with our bespoke special offers"}
            />
            <section className='container-fluid lg:pr-0'>
            <Zigzig
                image={"../../assets/Offer/Offer_Tab.jpg"}
                title={'Discover our current luxury offerings'}
                descrption={"Take advantage of our seasonal offers to experience The Marly lifestyle for yourself. Curated with the finest attention to detail, our special offers includes discounted rates on accommodation and exceptional value adds, on us."}
                btn={'Make a Booking'}
                isButton1={true}
                isOrder={true}
                isMargin={true}
            />
            </section>
            <section className="flex flex-wrap">
                <div className="w-full container-fluid">
                    <ul
                        className="w-40 flex mb-0 list-none flex-wrap pt-7 pb-69px flex-row"
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
                                Spa
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-y-100px gap-8'>
                                    <ImgGrid
                                        image={"../../assets/Offer/Offer_ImgGrid_1.jpg"}
                                        title={'Easter Hideaway Offer'}
                                        descrption={"Join us for Easter this April and receive a complimentary spa treatment, dinner experience, and hidden delights for two."}
                                        btn={'Explore'}
                                    />
                                    <ImgGrid
                                        image={"../../assets/Offer/Offer_ImgGrid_2.jpg"}
                                        title={'Mother’s Day Offer'}
                                        descrption={"Celebrate Mother’s Day at The Marly and receive a complimentary bottle of champagne, Mani’s for two and breakfast at La Belle Bistro."}
                                        btn={'Explore'}
                                    />
                                    <ImgGrid
                                        image={"../../assets/Offer/Offer_ImgGrid_3.jpg"}
                                        title={'Winter Staycation Offer'}
                                        descrption={"Stay at The Marly Boutique Hotel during our winter months and receive a complimentary two-course dinner at Paranga."}
                                        btn={'Explore'}
                                    />
                                    <ImgGrid
                                        image={"../../assets/Offer/Offer_ImgGrid_4.jpg"}
                                        title={'Reopening Offer'}
                                        descrption={"Stay with us between 9 August and 30 September and receive a South African Resident rate of R2,050 per night."}
                                        btn={'Explore'}
                                    />
                                    <ImgGrid
                                        image={"../../assets/Offer/Offer_ImgGrid_5.jpg"}
                                        title={'Promotion number five'}
                                        descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                        btn={'Explore'}
                                    />
                                    <ImgGrid
                                        image={"../../assets/Offer/Offer_ImgGrid_6.jpg"}
                                        title={'Promotion number six'}
                                        descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                        btn={'Explore'}
                                    />
                                </div>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-y-100px gap-8'>
                                    <ImgGrid
                                        image={"../../assets/Offer/Offer_ImgGrid_4.jpg"}
                                        title={'Reopening Offer'}
                                        descrption={"Stay with us between 9 August and 30 September and receive a South African Resident rate of R2,050 per night."}
                                        btn={'Explore'}
                                    />
                                    <ImgGrid
                                        image={"../../assets/Offer/Offer_ImgGrid_5.jpg"}
                                        title={'Promotion number five'}
                                        descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                        btn={'Explore'}
                                    />
                                    <ImgGrid
                                        image={"../../assets/Offer/Offer_ImgGrid_6.jpg"}
                                        title={'Promotion number six'}
                                        descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                        btn={'Explore'}
                                    />
                                    <ImgGrid
                                        image={"../../assets/Offer/Offer_ImgGrid_3.jpg"}
                                        title={'Winter Staycation Offer'}
                                        descrption={"Stay at The Marly Boutique Hotel during our winter months and receive a complimentary two-course dinner at Paranga."}
                                        btn={'Explore'}
                                    />
                                </div>
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-y-100px gap-8'>
                                    <ImgGrid
                                        image={"../../assets/Offer/Offer_ImgGrid_6.jpg"}
                                        title={'Promotion number six'}
                                        descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                        btn={'Explore'}
                                    />
                                    <ImgGrid
                                        image={"../../assets/Offer/Offer_ImgGrid_5.jpg"}
                                        title={'Promotion number five'}
                                        descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                                        btn={'Explore'}
                                    />
                                    <ImgGrid
                                        image={"../../assets/Offer/Offer_ImgGrid_2.jpg"}
                                        title={'Mother’s Day Offer'}
                                        descrption={"Celebrate Mother’s Day at The Marly and receive a complimentary bottle of champagne, Mani’s for two and breakfast at La Belle Bistro."}
                                        btn={'Explore'}
                                    />
                                    <ImgGrid
                                        image={"../../assets/Offer/Offer_ImgGrid_1.jpg"}
                                        title={'Easter Hideaway Offer'}
                                        descrption={"Join us for Easter this April and receive a complimentary spa treatment, dinner experience, and hidden delights for two."}
                                        btn={'Explore'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <MarlyRooms />
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

export default Offer