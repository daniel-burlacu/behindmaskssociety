import React from 'react';
import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from "react";
import image1 from "../../../../../assets/images/gallery/BehindNeonMasks/130.png";
import image2 from "../../../../../assets/images/gallery/BehindNeonMasks/131.png";
import image3 from "../../../../../assets/images/gallery/BehindNeonMasks/132.png";
import image4 from "../../../../../assets/images/gallery/BehindNeonMasks/133.png";
import image5 from "../../../../../assets/images/gallery/BehindNeonMasks/134.png";
import image6 from "../../../../../assets/images/gallery/BehindNeonMasks/135.png";
import image7 from "../../../../../assets/images/gallery/BehindNeonMasks/136.png";
import image8 from "../../../../../assets/images/gallery/BehindNeonMasks/137.png";
import image9 from "../../../../../assets/images/gallery/BehindNeonMasks/138.png";
import image10 from "../../../../../assets/images/gallery/BehindNeonMasks/139.png";
import image11 from "../../../../../assets/images/gallery/BehindNeonMasks/140.png";
import {Section} from './CarouselCSS';
//import './carousel.css';

const CarouselNeonMasks = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];
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

export default CarouselNeonMasks;