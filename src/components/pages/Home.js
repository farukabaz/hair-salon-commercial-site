import React from 'react';
import '../../App.css';
import CardsProducts from '../CardsProducts';
import CardsResults from '../CardsResults'
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <CardsProducts />
      <CardsResults/>
      <Footer />
    </>
  );
}

export default Home;
