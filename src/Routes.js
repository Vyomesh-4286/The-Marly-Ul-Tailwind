import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './pages/404 Page/Page404';
import Blog from './pages/Blog/Blog';
import Bookingpage from './pages/Bookingpage/Bookingpage';
import ContactUs from './pages/Contact Us/ContactUs';
import Eat from './pages/Eat/Eat';
import Experience from './pages/Experience/Experience';
import Facilities from './pages/Facilities/Facilities';
import Gallery from './pages/Gallery/Gallery';
import Homepage from './pages/Homepage/Homepage';
import Location from './pages/Location/Location';
import Offer from './pages/Offer/Offer';
import OurStory from './pages/Our Story/OurStory';
import Spa from './pages/Spa/Spa';
import Stay from './pages/Stay/Stay';
import ThankYou from './pages/Thank You/ThankYou';
import WhatsOn from './pages/Whats On/WhatsOn';

const Routing = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/stay" element={<Stay />} />
                    <Route path="/spa" element={<Spa />} />
                    <Route path="/facilities" element={<Facilities />} />
                    <Route path="/eat" element={<Eat />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/ourstory" element={<OurStory/>} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/offer" element={<Offer />} />
                    <Route path="/whatson" element={<WhatsOn />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/thankyou" element={<ThankYou />} />
                    <Route path="/404page" element={<Page404 />} />
                    <Route path="/bookingpage" element={<Bookingpage />} />
                </Routes>
            </Router>
        </>
    )
}

export default Routing