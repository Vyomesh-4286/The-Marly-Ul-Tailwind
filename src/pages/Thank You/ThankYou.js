import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SectionHero from '../../components/SectionHero/SectionHero'

const ThankYou = () => {
    return (
        <>
            <Header />
            <SectionHero
                image={"../../assets/Thank You/Marly_ThankYou.jpg"}
                title={'Thank You'}
                descrption={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
                btn={'Back to home'}
                isButton={true}
                isWidth={true}
            />
            <Footer />
        </>
    )
}

export default ThankYou