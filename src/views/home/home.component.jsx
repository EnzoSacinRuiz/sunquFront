import './home.styles.css';
import NavbarComponent from '../../components/navbar/navbar.component';
import TypewritterComponent from '../../components/home/typewriter';
import CarouselComponent from '../../components/home/carousel/carousel.component';
import CardsHome from '../../components/home/cardsHome/cardsHome';
import ClientsHome from '../../components/home/clients/clients.component';

import React, { useState, useEffect } from 'react';
import axios from 'axios';





function Home() {
  

  const [details, setDetails] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8000/api/products/')
          .then(res => {
              setDetails(res.data);
          })
          .catch(err => {
              console.error(err);
              // Optionally, handle the error in some way
          });
  }, []); 

    const phrases = ['¿Qué nos mueve?', 'Propósito'];
    const [phraseIndex, setPhraseIndex] = useState(0);
  
    useEffect(() => {
          console.log(details);

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

            <CardsHome details={details}/>

            <ClientsHome/>

            
            
        </div>

        
    );
}

export default Home;
