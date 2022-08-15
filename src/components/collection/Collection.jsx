import React from 'react';
import Modal from './modal/ModalApp';
import styled from 'styled-components';
import {useScroll} from '../../utils/useScrol';
import { FcImageFile} from "react-icons/fc";
import {motion} from 'framer-motion';
import{homeAnimation} from '../../utils/animation'

const Collection = () => {
  const [element, controls] = useScroll();
  return (
     <Section id="collection" ref={element}>
       <motion.h1
         variants={homeAnimation}
         transition={{ delay: 0.6, duration: 0.24, type: "tween" }} 
         animate={controls}>
        NFT Collection
         <span className="light-blue"> <FcImageFile/> Released</span>
       </motion.h1>
        <Modal/>
     </Section>
  )
}

const Section = styled.section`

h1{
  margin-top:6rem;
  margin-left:18rem;
  position:absolute;
  font-size: 100px;
  color: var(--secondary-color);
}

@media screen and (max-width: 1900px) {
h1{
  margin-top:6rem;
  margin-left:8rem;
  position:absolute;
  font-size: 100px;
  color: var(--secondary-color);
}
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
  position:relative;
  h1{
    margin-top:6rem;
    margin-left:2rem;
    font-size: 25px;
    color: var(--secondary-color);
  }
}

`

export default Collection