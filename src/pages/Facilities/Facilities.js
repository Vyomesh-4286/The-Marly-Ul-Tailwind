import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SectionHero from '../../components/SectionHero/SectionHero'
import Zigzig from '../../components/Zigzag/Zigzig'
import ImgGrid from '../../components/ImgGrid/ImgGrid';
import MarlyRooms from '../../components/Explore our rooms/MarlyRooms'

const Facilities = () => {
    return (
        <>
            <Header />
            <SectionHero
                image={"../../assets/Facilities/Marly_Facilities.jpg"}
                title={'Facilities at The Marly'}
                descrption={"Elements for a perfect stay. Experience facilities that entertain and delight at The Marly."}
            />
            <section className='container-fluid lg:pr-0'>
                <Zigzig
                    image={"../../assets/Facilities/Facilities_Tab_1.jpg"}
                    title={'Unwind in style'}
                    descrption={"Relax into luxury at The Marly Spa. Featuring 4 tranquil treatment rooms and separate manicure stations, the spa is the ideal place to meditate, escape city stresses or simply treat oneself."}
                    btn={'Explore'}
                    isOrder={true}
                    isButton1={true}
                />
            </section>
            <section className='container-fluid lg:pl-0'>
                <Zigzig
                    image={"../../assets/Facilities/Facilities_Tab_2.jpg"}
                    title={'Plunge into luxury'}
                    descrption={"For those wanting to experience Camps Bay to the fullest, The Marly’s elegant rooftop pool and lounge area offers 360° views of the Atlantic Ocean and the iconic Twelve Apostles mountain range. This exclusive location is open to both guests of The Marly as well as visitors and will offer a curated champagne menu, relaxed beats and a view to rival no other."}
                    isButton={true}
                />
            </section>
            <section className='container-fluid lg:pr-0'>
                <Zigzig
                    image={"../../assets/Facilities/Facilities_Tab_3.jpg"}
                    title={'Health at hand'}
                    descrption={"Get that Camps Bay glow or power up for the day ahead with a tailored workout in The Marly’s gym. Offering guests a comprehensive exercise experience, our gym is sure to keep you looking and feeling your best."}
                    isOrder={true}
                    isButton={true}
                />
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

export default Facilities