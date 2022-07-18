import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ImgGrid from '../../components/ImgGrid/ImgGrid'
import SectionHero from '../../components/SectionHero/SectionHero'
import Zigzig from '../../components/Zigzag/Zigzig'

const Eat = () => {
    return (
        <>
            <Header />
            <SectionHero
                image={"../../assets/Eat/Marly_Eat.jpg"}
                title={'Eat at The Marly'}
                descrption={"Discover our seven iconic Camps Bay restaurants that cater to a variety of dining experiences."}
            />
            <section className='container-fluid lg:pr-0'>
                <Zigzig
                    image={"../../assets/Eat/Eat_Tab_1.jpg"}
                    title={'Beachside cuisine'}
                    descrption={"Our 5-star boutique hotel is set on Cape Town's iconic Camps Bay strip and caters for breakfast, lunch, lavish dinners and seaside sundowners. The Marly is surrounded by five of our iconic restaurants that cater to a variety of dining experiences."}
                    btn={'Explore'}
                    isOrder={true}
                    isButton1={true}
                />
            </section>
            <section className='container-fluid lg:pl-0'>
                <Zigzig 
                image={"../../assets/Eat/Eat_Tab_2.jpg"}
                logo={"../../assets/Eat/svg/Eat_Tab_1.svg"}
                isLogo={true}
                isHight={true}
                descrption={"The Marly’s exclusive rooftop pool, bar and lounge. Get better acquainted with the Camps Bay lifestyle with a cocktail in hand, surrounded by breath-taking 360° views of the Atlantic Ocean and Twelve Apostles mountains or relax poolside with a contemporary poolside food & drinks menu."}
                btn={'Book a Table'}
                btn1={'Visit website'}
                isTitle={true}
                />
            </section>
            <section className='container-fluid lg:pr-0'>
                <Zigzig 
                image={"../../assets/Eat/Eat_Tab_3.jpg"}
                logo={"../../assets/Eat/svg/Eat_Tab_2.svg"}
                isLogo={true}
                isHight={true}
                descrption={"Chinchilla is an exclusive rooftop venue and the first of its kind in Camps Bay. Touted as the location for both the discerning diner and the sundowner set, Chinchilla rooftop café & bar is set to simmer this summer –with the view being the only distraction from the food, music and vibe.."}
                btn={'Book a Table'}
                btn1={'Visit website'}
                isOrder={true}
                isTitle={true}
                />
            </section>
            <section className='container-fluid lg:pl-0'>
                <Zigzig 
                image={"../../assets/Eat/Eat_Tab_4.jpg"}
                logo={"../../assets/Eat/svg/Eat_Tab_3.svg"}
                isLogo={true}
                isHight={true}
                descrption={"Bilboa brings with it its own brand of contemporary chic, exclusive location and enviable views across the Atlantic Ocean. Diners are offered a contemporary space, unlike any other along the beachfront. Coupled with an uninterrupted view, this lends Bilboa to an elevated level of sophistication accompanied by a contemporary Mediterranean seafood-inspired offering."}
                btn={'Book a Table'}
                btn1={'Visit website'}
                isTitle={true}
                />
            </section>
            <section className='container-fluid lg:pr-0'>
                <Zigzig 
                image={"../../assets/Eat/Eat_Tab_5.jpg"}
                logo={"../../assets/Eat/svg/Eat_Tab_4.svg"}
                isLogo={true}
                isHight={true}
                descrption={"la Belle Bistro & Bakery in Camps Bay offers guests only the finest rustic foodie flair, fresh and wholesome baked goods and a myriad of culinary delights to indulge any appetite! All whilst basking in the incredible Camps Bay ocean view."}
                btn={'Book a Table'}
                btn1={'Visit website'}
                isOrder={true}
                isTitle={true}
                />
            </section>
            <section className='container-fluid lg:pl-0'>
                <Zigzig 
                image={"../../assets/Eat/Eat_Tab_6.jpg"}
                logo={"../../assets/Eat/svg/Eat_Tab_5.svg"}
                isLogo={true}
                isHight={true}
                descrption={"This new contemporary seaside diner adds a little extra flavour to the Camps Bay golden mile. Surfshack takes up residence directly above Paranga, and thus treats patrons to panoramic ocean vistas complete with stunning sunsets. For lovers of diner classics, a vibey buzz and rustic yet stylish decor, look no further."}
                btn={'Book a Table'}
                btn1={'Visit website'}
                isTitle={true}
                />
            </section>
            <section className='container-fluid lg:pr-0'>
                <Zigzig 
                image={"../../assets/Eat/Eat_Tab_7.jpg"}
                logo={"../../assets/Eat/svg/Eat_Tab_6.svg"}
                isLogo={true}
                isHight={true}
                descrption={"Birthplace of The Kove Collection and located on the world renowned Camps Bay strip, Paranga continues to offer local and international regulars the sophisticated style and supreme selections that define quintessential Cape Town cool."}
                btn={'Book a Table'}
                btn1={'Visit website'}
                isOrder={true}
                isTitle={true}
                />
            </section>
            <section className='container-fluid lg:pl-0'>
                <Zigzig 
                image={"../../assets/Eat/Eat_Tab_8.jpg"}
                logo={"../../assets/Eat/svg/Eat_Tab_7.svg"}
                isLogo={true}
                isHight={true}
                descrption={"Zenzero wraps you shamelessly in ‘La Dolce Vita’ whilst gently caressing with a cool Atlantic breeze. Robust with the full flavours of Italy – fresh produce and zesty, spicy touches – indulge in seafood pastas, signature risottos and the spirited vibe."}
                btn={'Book a Table'}
                btn1={'Visit website'}
                isTitle={true}
                />
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

export default Eat