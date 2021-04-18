import React from 'react';
import Footer from '../../components/Footer/Footer';
import OurStory from '../../components/OurStory/OurStory';
import Reviews from '../../components/Reviews/Reviews';
import Services from '../../components/Services/Services';
const Home = () => {
    return (
        <>
            <Services />
            <OurStory />
            <Reviews />
            <Footer />
        </>
    );
};

export default Home;