import React from 'react';
import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from "react";
import productofpain1 from '../../../../../assets/images/gallery/ProductOfPain/0.png';
import productofpain2 from '../../../../../assets/images/gallery/ProductOfPain/1.png';
import productofpain3 from '../../../../../assets/images/gallery/ProductOfPain/2.png';

import {Section} from './CarouselCSS';

//import './carousel.css';

const CarouselProductOfPain = () => {
  const images = [productofpain1, productofpain2, productofpain3];
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

export default CarouselProductOfPain;