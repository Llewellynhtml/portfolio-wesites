import React from 'react';
import Hero from './hero';
import Skills from './Skills';
import Progress from './progress';
import Timeline from './Timeline';
import './Home.css';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Hero />
            <Skills />
            <section>
                <Progress />
                <Timeline/>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
