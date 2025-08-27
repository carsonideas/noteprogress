import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import person1 from '../assets/people_images/person1.jpg';
import person2 from '../assets/people_images/person2.jpg';
import person3 from '../assets/people_images/person3.jpg';
import person4 from '../assets/people_images/person4.jpg';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <FinalCTA />
    </>
  );
};

export default Home;

