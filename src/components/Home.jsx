import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import TechStackMarquee from './TechStackMarquee';
import BentoServices from './BentoServices';
import IndustrySolutions from './IndustrySolutions';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="bg-background min-h-screen text-white selection:bg-neonCyan/30 selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <TechStackMarquee />
                <BentoServices />
                <IndustrySolutions />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
