import React from 'react';
import Hero from './hero';
import Skills from './Skills';
import Progress from './progress';
import Timeline from './Timeline';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Hero />
            <Skills />
            <section>
                <h2>My Working Process</h2>
                <Progress />
                 <Link to="/projects">
                    <button>See All</button>
                </Link> 
                <Timeline/>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
