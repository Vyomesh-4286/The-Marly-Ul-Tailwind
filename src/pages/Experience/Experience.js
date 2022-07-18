import React from 'react'
import MarlyRooms from '../../components/Explore our rooms/MarlyRooms'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ImgGrid from '../../components/ImgGrid/ImgGrid'
import SectionHero from '../../components/SectionHero/SectionHero'
import Zigzig from '../../components/Zigzag/Zigzig'

const Experience = () => {
    return (
        <>
            <Header />
            <SectionHero
                image={"../../assets/Experience/Marly_Experience.jpg"}
                title={'Experiences at The Marly'}
                descrption={"The Marly aims to provide our guests with experiences that make for a stay to be remembered."}
            />
            <section className='container-fluid lg:pr-0'>
                <Zigzig
                    image={"../../assets/Experience/Experience_Tab.jpg"}
                    title={'Welcome to the good life at The Marly'}
                    descrption={"A destination for the modern-day traveler, The Marly Boutique Hotel and Spa encapsulates Cape Town living at its finest. Uniquely curated to satisfy all the senses, our in-house experiences match the high standards of our exceptional location and city."}
                    btn={'Make a Booking'}
                    isButton1={true}
                    isOrder={true}
                    isMargin={true}
                />
            </section>
            <section className='container-fluid lg:mt-60px mt-30px lg:py-60px py-30px grid lg:grid-cols-2 grid-cols-1 lg:gap-y-100px gap-8'>
                <ImgGrid
                    image={"../../assets/Experience/Experience_ImgGrid_1.jpg"}
                    title={'Taste'}
                    descrption={"Take a seat at one of our six restaurants to sample Cape Town’s finest food and wine. "}
                    btn={'Explore'}
                />
                <ImgGrid
                    image={"../../assets/Experience/Experience_ImgGrid_2.jpg"}
                    title={'Feel'}
                    descrption={"Unwind and relax at the elegant Marly Spa for bespoke treatments and beauty offerings. "}
                    btn={'Explore'}
                />
                <ImgGrid
                    image={"../../assets/Experience/Experience_ImgGrid_3.jpg"}
                    title={'Move'}
                    descrption={"Energise your body and mind with a morning workout at The Marly’s state-of-the-art gym. "}
                    btn={'Explore'}
                />
                <ImgGrid
                    image={"../../assets/Experience/Experience_ImgGrid_4.jpg"}
                    title={'See'}
                    descrption={"Discover Cape Town’s iconic attractions, discover our neighborhood on foot or explore further afield. "}
                    btn={'Explore'}
                />
                <ImgGrid
                    image={"../../assets/Experience/Experience_ImgGrid_5.jpg"}
                    title={'Experience number five'}
                    descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                    btn={'Explore'}
                />
                <ImgGrid
                    image={"../../assets/Experience/Experience_ImgGrid_6.jpg"}
                    title={'Experience number six'}
                    descrption={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit magna aliqua"}
                    btn={'Explore'}
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

export default Experience