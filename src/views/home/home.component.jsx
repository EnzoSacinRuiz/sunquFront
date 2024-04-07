import './home.styles.css';
import NavbarComponent from '../../components/navbar/navbar.component';
import TypewritterComponent from '../../components/home/typewriter';
import CarouselComponent from '../../components/home/carousel/carousel.component';
import CardsHome from '../../components/home/cardsHome/cardsHome';
import ClientsHome from '../../components/home/clients/clients.component';

import React, { useState, useEffect } from 'react';





function Home() {

    const phrases = ['¿Qué nos mueve?', 'Propósito'];
    const [phraseIndex, setPhraseIndex] = useState(0);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, 5000); // Change text every 5 seconds
  
      return () => clearTimeout(timer);
    }, [phraseIndex]);
    return (
        
        <div>
            <NavbarComponent/>

            <CarouselComponent/>
 

            <TypewritterComponent phrases={phrases} phraseIndex={phraseIndex} />

            <CardsHome/>

            <ClientsHome/>

            
            
        </div>

        
    );
}

export default Home;
