import React from 'react';
import Steafan  from '../../assets/images/team-img1.jpg';
import Daniel from '../../assets/images/team-img2.jpg';
import styled from 'styled-components';
import { motion } from "framer-motion";
import {aboutTitleAnimationFromRight,aboutTitleAnimationFromLeft, aboutCelTextAnimation} from '../../utils/animation.js';
import {} from '../../utils/animation.js';
import {FaFacebookF,FaDiscord,FaInstagram,FaTwitter, FaYoutubeSquare, FaSoundcloud, FaGithubSquare} from 'react-icons/fa';
import {useScroll} from '../../utils/useScrol';

const About = () => {
  const [element, controls] = useScroll();
  
  return (
    <Section id="about" ref={element}>
      <div  className='about__title'>
        <motion.h1
        animate={controls}
         variants={aboutTitleAnimationFromRight}
         transition={{ delay: 0.3, duration: 0.8, type: "tween" }} 
         
        >About us</motion.h1>
      </div>
      <motion.div
        className="about">
             <div className="about__us">
                  <div className="about__us__title">
                    <motion.h2
                      variants={aboutTitleAnimationFromLeft}
                      transition={{ delay: 0.3, duration: 0.6, type: "tween" }} 
                      animate={controls}
                      className="alignCenter"
                    >Product Of Pain</motion.h2>
                  </div>
                  
                  <motion.div
                    variants={aboutTitleAnimationFromRight}
                    transition={{ delay: 0.8, duration: 0.6, type: "tween" }} 
                    animate={controls}
                    className="about__us__image">
                    <img src={Steafan} alt="Service" className="image__about"/> 
                    <div className="socials-links">
                      <div >
                        <a href="https://discord.gg/g6FRMX27" target="_blank" rel="noreferrer"><FaDiscord  className="color__social__link" size={35}/></a>
                      </div>
                      <div>
                        <a href="https://www.facebook.com/theproductofpain" target="_blank" rel="noreferrer"><FaFacebookF className="color__social__link" size={35}/></a>
                      </div>
                      <div>
                        <a href="https://www.instagram.com/prxductxfpain/" target="_blank" rel="noreferrer"><FaInstagram className="color__social__link" size={35}/></a>
                      </div>
                      <div>
                        <a href="https://soundcloud.com/productofpain" target="_blank" rel="noreferrer"><FaSoundcloud className="color__social__link" size={35}/></a>
                      </div>
                      <div>
                        <a href=""><FaTwitter className="color__social__link" size={35}/></a>
                      </div>
                      <div>
                        <a href="https://www.youtube.com/c/PRODUCTOFPAIN" target="_blank" rel="noreferrer"><FaYoutubeSquare className="color__social__link" size={35}/></a>
                      </div>
                    </div>
                  </motion.div>
                  <motion.p 
                    variants={aboutCelTextAnimation}
                    transition={{ delay: 0.4, duration: 0.6, type: "tween" }} 
                    animate={controls}
                    className="about__us__description">
                      Musician, Producer and Artist."It is possible to commit no mistakes and still lose. That is not a weakness. That is life.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" </motion.p> 
              </div>
              <div className="about__us">
                  <div className="about__us__title">
                    <motion.h2
                     variants={aboutTitleAnimationFromLeft}
                     transition={{ delay: 1, duration: 0.6, type: "tween" }} 
                     animate={controls}
                     className="alignCenter"
                    >Behind Masks Society</motion.h2>
                  </div>
                  
                  <motion.div
                    variants={aboutTitleAnimationFromRight}
                    transition={{ delay: 0.2, duration: 0.6, type: "tween" }} 
                    animate={controls}
                    className="about__us__image">
                    <img src={Daniel} alt="Service" className="image__about"/> 
                    <div className="socials-links">
                      <div >
                        <a href="https://discord.gg/g6FRMX27" target="_blank" rel="noreferrer"><FaDiscord  className="color__social__link" size={35}/></a>
                      </div>
                      <div>
                        <a href="https://www.facebook.com/Behind-Masks-Society-100192442577085" target="_blank" rel="noreferrer"><FaFacebookF className="color__social__link" size={35}/></a>
                      </div>
                      <div>
                        <a href="https://www.instagram.com/behindmaskssociety/" target="_blank" rel="noreferrer"><FaInstagram className="color__social__link" size={35}/></a>
                      </div>
                      <div>
                        <a href=""><FaSoundcloud className="color__social__link" size={35}/></a>
                      </div>
                      <div>
                        <a href="https://twitter.com/BehindMasks_So" target="_blank" rel="noreferrer"><FaTwitter className="color__social__link" size={35}/></a>
                      </div>
                      <div>
                        <a href="https://www.youtube.com/channel/UCp2aZG91-vDbcBRbTMCtUMw" target="_blank" rel="noreferrer"><FaYoutubeSquare className="color__social__link" size={35}/></a>
                      </div>
                    </div>
                  </motion.div>
                  <motion.p  
                    variants={aboutCelTextAnimation}
                    transition={{ delay: 0.2, duration: 0.6, type: "tween" }} 
                    animate={controls}
                    className="about__us__description">
                      Now days is just about how cool you look and how happy you are at your workplace, in your personal life. But in reality we all suffer from depression.
                  </motion.p> 
            </div>
    </motion.div>
    </Section>
  )
}

const Section = styled.section`
min-height: 100vh;
background:linear-gradient(blue, transparent),
           linear-gradient(to top left, red, transparent),
           linear-gradient(to top right, white, transparent);

.about__title{
  padding-top: 8rem;
  text-align: center;
  h1{
    font-size: 5rem;
    line-height: 2.5rem;
    margin-bottom: 3rem;
    color: var(--secondary-color);
  }
}

.about {
  grid-template-columns: repeat(2, 1fr);
  display:flex;
  align-items: center;
  height: 100%;
  margin: 0 14rem;
  gap: 5rem;
  &__us {

    padding: 2rem;
    &:nth-of-type(2) {
      .about__us__title {
        span {
          color: #000;
        }
      }
      .about__us__description {
        color: #000;
      }
    }
    .image__about{
      border-radius:2rem;
      border:9px solid;
    }
    .image__about:hover{
      animation: shakeanimation;
      animation-duration: 1s;
      transform: translate3d(0, 0, 0);
    }
    .about__us__image {
      padding:1.2rem;
      border-radius: 2rem;
      border:7px solid;
      background:linear-gradient(blue, transparent),
      linear-gradient(to top left, red, transparent),
      linear-gradient(to top right, white, transparent);
      margin-bottom: 3rem;
      display:flex;
      .socials-links{
        margin-left:5rem;
        margin-top:1.5rem;
        .color__social__link{
          color:var(--primary-color)
        }
        .color__social__link:hover{
          background: transparent;
          color: var(--color-white);
        }
      }
    }
    &__title {
      span {
        color: var(--primary-color);
        font-weight: bolder;
      }
      h2 {
        font-size: 2.5rem;
        line-height: 2.5rem;
        margin-bottom: 5rem;
        color: var(--secondary-color);
      }
      .alignCenter{
        text-align:center;
      }

    }
    &__description {
      color: var(--primary-color);
      margin-bottom: 2rem;
      padding:1.2rem;
      border-radius: 2rem;
      border:7px solid;
    }
  }
}

@media screen and (max-width: 1900px) {
  .about {
    grid-template-columns: repeat(2, 1fr);
    display:flex;
    height: 100%;
    margin: 0 16rem;
    gap: 5rem;

    &__us {
      padding: 1rem;

      .image__about{
        border-radius:2rem;
        overflow:hidden;
      }
      .about__us__image {
        padding:1.2rem;
        border-radius: 2rem;
        border:7px solid;
        background:linear-gradient(blue, transparent),
        linear-gradient(to top left, red, transparent),
        linear-gradient(to top right, white, transparent);
        margin-bottom: 1rem;
        display:flex;
        .socials-links{
          margin-left:4rem;
          margin-top:1.5rem;
          .color__social__link{
            color:var(--primary-color)
          }
          .color__social__link:hover{
            background: transparent;
            color: var(--color-white);
          }
        }
      }
      &__title {
        span {
          color: var(--primary-color);
          font-weight: bolder;
        }
        h2 {
          font-size: 2.5rem;
          line-height: 2.5rem;
          margin-bottom: 2rem;
          color: var(--secondary-color);
        }
      }
      &__description {
        color: var(--primary-color);
        margin-bottom: 2rem;
        padding:1.2rem;
        border-radius: 2rem;
        border:7px solid;
      }
    }
  }
}

@media screen and (min-width: 280px) and (max-width: 1080px) {

  .about__title{
    padding-top: 4rem;
    text-align: center;
    h1{
      font-size: 3rem;
      line-height: 2.5rem;
      margin-bottom: 1.5rem;
      color: var(--secondary-color);
    }
  }

  .about {
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    display:inline;
    height: 100%;
    gap: 5rem;
    &__us {

      padding: 2rem;
      .image__about{
        width:230px;
        height:230px;
        border-radius:2rem;
        overflow:hidden;
      }
      .about__us__image {
        padding:1rem;
        border-radius: 2rem;
        border:7px solid;
        background:linear-gradient(blue, transparent),
        linear-gradient(to top left, red, transparent),
        linear-gradient(to top right, white, transparent);
        margin-bottom: 1rem;
        display:flex;
        .socials-links{
          margin-left:2rem;
          margin-top:1.5rem;
          .color__social__link{
            color:var(--primary-color)
          }
          .color__social__link:hover{
            background: transparent;
            color: var(--color-white);
          }
        }
      }
      &__title {
        span {
          color: var(--primary-color);
          font-weight: bolder;
        }
        h2 {
          font-size: 2.5rem;
          line-height: 2.5rem;
          margin-bottom: 2rem;
          color: var(--secondary-color);
        }
      }
      &__description {
        color: var(--primary-color);
        margin-bottom: 2rem;
        padding:1.2rem;
        border-radius: 2rem;
        border:7px solid;
      }
    }
  }
}

@keyframes shakeanimation {
  15%, 85% {
    transform: translate3d(-2px, 0, 0);
  }
  
  25%, 75% {
    transform: translate3d(4px, 0, 0);
  }
 
  30%, 50%, 70% {
    transform: translate3d(-8px, 0, 0);
  }
 
  40%, 60% {
    transform: translate3d(8px, 0, 0);
  }
}
 

`
export default About



