import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import CardsTwo from '../CardsTwo'
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <CardsTwo/>
      <Footer />
    </>
  );
}

export default Home;
