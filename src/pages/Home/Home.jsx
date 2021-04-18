import React from 'react';
import Footer from '../../components/Footer/Footer';
import OurStory from '../../components/OurStory/OurStory';
import Reviews from '../../components/Reviews/Reviews';
import Services from '../../components/Services/Services';
import OurGoals from '../../components/OurGoals/OurGoals'
const Home = () => {
    return (
        <>
            <Services />
            <OurStory />
            <Reviews />
            <OurGoals />
            <Footer />
        </>
    );
};

export default Home;