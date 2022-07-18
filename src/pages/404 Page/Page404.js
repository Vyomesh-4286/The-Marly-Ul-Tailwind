import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SectionHero from '../../components/SectionHero/SectionHero'

const Page404 = () => {
    return (
        <>
            <Header />
            <SectionHero
                image={"../../assets/404 Page/Marly_404Page.jpg"}
                title={'404'}
                descrption={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
                btn={'Back to home'}
                isButton={true}
                isWidth={true}
            />
            <Footer />
        </>
    )
}

export default Page404