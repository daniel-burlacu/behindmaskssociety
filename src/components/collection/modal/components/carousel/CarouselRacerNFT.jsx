import React from 'react';
import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from "react";
import racer1 from '../../../../../assets/images/gallery/RacerNFT/America.png';
import racer2 from '../../../../../assets/images/gallery/RacerNFT/Valencia.png';
import racer3 from '../../../../../assets/images/gallery/RacerNFT/UK.png';
import racer4 from '../../../../../assets/images/gallery/RacerNFT/Thailand.png';
import racer5 from '../../../../../assets/images/gallery/RacerNFT/Qatar.png';
import racer6 from '../../../../../assets/images/gallery/RacerNFT/Portugal.png';
import racer7 from '../../../../../assets/images/gallery/RacerNFT/Osterreich.png';
import racer8 from '../../../../../assets/images/gallery/RacerNFT/Mugello.png';
import racer9 from '../../../../../assets/images/gallery/RacerNFT/Misano.png';
import racer10 from '../../../../../assets/images/gallery/RacerNFT/Malaysia.png';
import racer11 from '../../../../../assets/images/gallery/RacerNFT/Jerez.png';
import racer12 from '../../../../../assets/images/gallery/RacerNFT/Japan.png';
import racer13 from '../../../../../assets/images/gallery/RacerNFT/Indonesia.png';
import racer14 from '../../../../../assets/images/gallery/RacerNFT/Germany.png';
import racer15 from '../../../../../assets/images/gallery/RacerNFT/France.png';
import racer16 from '../../../../../assets/images/gallery/RacerNFT/Fool.png';
import racer17 from '../../../../../assets/images/gallery/RacerNFT/Finland.png';
import racer18 from '../../../../../assets/images/gallery/RacerNFT/Catalunya.png';
import racer19 from '../../../../../assets/images/gallery/RacerNFT/Austalia.png';
import racer20 from '../../../../../assets/images/gallery/RacerNFT/Assen.png';
import racer21 from '../../../../../assets/images/gallery/RacerNFT/Argentina.png';
import racer22 from '../../../../../assets/images/gallery/RacerNFT/Aragon.png';
import {Section} from './CarouselCSS';

//import './carousel.css';

const CarouselRacerNFT = () => {
  const images = [racer1, racer2, racer3,racer4, racer5, racer6, racer7,
                  racer8, racer9,racer10, racer11, racer12, racer13, racer14,
                  racer15, racer16, racer17, racer18, racer19, racer20, racer21,
                  racer22];
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[]);

  return (
    <Section>
      <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div 
          className="inner-carousel"
          drag="x"
          dragConstraints={{right:0, left:-width}}  
        >
          {images.map((image)=>{
            return(
            <motion.div className="item" key={image}>
              <img src={image} alt=""/>
            </motion.div>
            )
          })
          }
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default CarouselRacerNFT;