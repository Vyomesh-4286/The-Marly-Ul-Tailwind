import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ImgGrid from '../../components/ImgGrid/ImgGrid'
import SectionHero from '../../components/SectionHero/SectionHero'
import Zigzig from '../../components/Zigzag/Zigzig'

const WhatsOn = () => {
    return (
        <>
            <Header />
            <SectionHero
                image={"../../assets/Whats On/Marly_WhatsOn.jpg"}
                title={'What’s On'}
                descrption={"Discover the latest events happening at The Marly and in Cape Town"}
            />
            <section className='container-fluid lg:pr-0'>
                <Zigzig
                    image={"../../assets/Whats On/WhatsOn_Tab.jpg"}
                    title={'Your guide to Cape Town’s most anticipated events'}
                    descrption={"With the Marly Boutique Hotel as your home base, discover Cape Town’s exciting social calendar on your next visit to the Mother City. Here are a few of our favourite events to look forward to this season."}
                    btn={'Make a Booking'}
                    isButton1={true}
                    isOrder={true}
                    isMargin={true}
                />
            </section>
            <section className='container-fluid lg:mt-60px mt-30px lg:py-60px py-30px grid lg:grid-cols-2 grid-cols-1 lg:gap-y-100px gap-8'>
                <ImgGrid
                    image={"../../assets/Whats On/WhatsOn_ImgGrid_1.jpg"}
                    title={'Gin & Tonic Festival | 15 April'}
                    descrption={"Sample South Africa’s finest craft gin and tonics at the annual Gin and Tonic Festival hosted at the Old Biscuit Mill. Accompanied by live music, bespoke cocktails and a vibrant crowd, what’s not to love? Book your tickets today."}
                    btn={'Explore'}
                    isWidth1={true}
                />
                <ImgGrid
                    image={"../../assets/Whats On/WhatsOn_ImgGrid_2.jpg"}
                    title={'Two Ocean’s Marathon | 16-17 April'}
                    descrption={"Renowned as “the world’s most beautiful marathon”, the Two Ocean’s Marathon returns for the 52nd time this April. Whether you are participating or just supporting, make The Marly your home base for one of South Africa’s oldest sporting events. "}
                    btn={'Explore'}
                    isWidth1={true}
                />
                <ImgGrid
                    image={"../../assets/Whats On/WhatsOn_ImgGrid_3.jpg"}
                    title={'Green Point Park Secret Sunrise | 30 April'}
                    descrption={"Join the Secret Sunrise community with sunrise yoga sessions in the Green Point Park’s lush gardens on the last Saturday of each month. This is the perfect time to reconnect with your body and mind through a vinyasa yoga flow, breathwork and meditation. "}
                    btn={'Explore'}
                    isWidth1={true}
                />
                <ImgGrid
                    image={"../../assets/Whats On/WhatsOn_ImgGrid_4.jpg"}
                    title={'Restaurant Week 2022 | 1 April - 1 May'}
                    descrption={"In celebration of Autumn, Cape Town kicks of Restaurant Week 2022 from 1 April to bring you exceptional 3-course dining offers at 120 of South Africa’s best restaurants. Bookings open on 25 March 2022."}
                    btn={'Explore'}
                    isWidth1={true}
                />
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

export default WhatsOn