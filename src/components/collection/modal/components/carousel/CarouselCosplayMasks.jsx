import React from 'react';
import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from "react";
import cosplay1 from '../../../../../assets/images/gallery/CosplayNunMasks/2868.png';
import cosplay2 from '../../../../../assets/images/gallery/CosplayNunMasks/2872.png';
import cosplay3 from '../../../../../assets/images/gallery/CosplayNunMasks/2873.png';
import cosplay4 from '../../../../../assets/images/gallery/CosplayNunMasks/2875.png';
import cosplay5 from '../../../../../assets/images/gallery/CosplayNunMasks/2877.png';
import cosplay6 from '../../../../../assets/images/gallery/CosplayNunMasks/2878.png';
import cosplay7 from '../../../../../assets/images/gallery/CosplayNunMasks/2879.png';
import cosplay8 from '../../../../../assets/images/gallery/CosplayNunMasks/2888.png';
import cosplay9 from '../../../../../assets/images/gallery/CosplayNunMasks/2898.png';
import cosplay10 from '../../../../../assets/images/gallery/CosplayNunMasks/2902.png';
import cosplay11 from '../../../../../assets/images/gallery/CosplayNunMasks/2906.png';
import cosplay12 from '../../../../../assets/images/gallery/CosplayNunMasks/2874.png';
import {Section} from './CarouselCSS';

//import './carousel.css';

const CarouselCosplayMasks = () => {
  const images = [cosplay1, cosplay2, cosplay3,cosplay4, cosplay5, cosplay6, cosplay7, cosplay8, cosplay9,cosplay10, cosplay11, cosplay12];
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

export default CarouselCosplayMasks;