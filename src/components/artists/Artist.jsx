import React from "react";
import styled from "styled-components";
import sev from "../../assets/images/sev.png";
import dani from "../../assets/images/dani.png";
import background from "../../assets/gifs/artists.gif";
import { motion } from "framer-motion";
import { useScroll } from "../../utils/useScrol";
import {
  aboutTitleAnimationFromRight,
  aboutTitleAnimationFromLeft
} from "../../utils/animation.js";
import {FaInfo} from 'react-icons/fa';

const Artist = () => {
  const [element, controls] = useScroll();
  return (
    <Section id="artists" ref={element}>
      <div className="artists__title">
        <motion.h1
          animate={controls}
          variants={aboutTitleAnimationFromRight}
          transition={{ delay: 0.3, duration: 0.8, type: "tween" }}
        >
          Artists Page
        </motion.h1>
      </div>
      <motion.div className="about">
        <div className="about__us">
          <div className="about__us__title">
            <motion.h2
              variants={aboutTitleAnimationFromRight}
              transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
              animate={controls}
              className="alignCenter"
            >
              <div className="socials-links">
                  <a href="https://danielburlacu.behindmaskssociety.com/" target="_blank" rel="noreferrer"><FaInfo  className="color__social__link" size={35}/>DANI</a>
              </div>        
            </motion.h2>
          </div>
          <motion.div
            variants={aboutTitleAnimationFromRight}
            transition={{ delay: 0.8, duration: 0.6, type: "tween" }}
            animate={controls}
            className="about__us__image"
          >
            <img src={dani} alt="Service" className="image__about" />
          </motion.div>
        </div>
        <div className="about__us">
          <div className="about__us__title">
            <motion.h2
              variants={aboutTitleAnimationFromLeft}
              transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
              animate={controls}
              className="alignCenter"
            >
              <div className="socials-links">
                  <a href="https://productOfPain.behindmaskssociety.com" target="_blank" rel="noreferrer"><FaInfo  className="color__social__link" size={35}/>SEV</a>
              </div>        
            </motion.h2>
          </div>
          <motion.div
            variants={aboutTitleAnimationFromLeft}
            transition={{ delay: 0.8, duration: 0.6, type: "tween" }}
            animate={controls}
            className="about__us__image"
          >
            <img src={sev} alt="Service" className="image__about" />
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

const Section = styled.section`
  height: 1000px;
  position: relative;
  background: url(${background}) #000 repeat center;
  .artists__title {
    padding-top: 8rem;
    text-align: center;
    h1 {
      font-size: 5rem;
      line-height: 2.5rem;
      color: #fff;
    }
  }

  .about {
    margin-top:5rem;
    grid-template-columns: repeat(2, 1fr);
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 14rem;
    gap: 2rem;

    a{
      color:#fff;
    }
    a:link { text-decoration: none; }
    a:visited { text-decoration: none; }
    a:hover { text-decoration: none; }
    a:active { text-decoration: none; }
    a:hover{
      background: transparent;
      color: #000;
    }

    &__us {
      padding: 8rem;
      margin-top:-250px;
        .about__us__title {
          .socials-links {
            margin-right: 2rem;
            margin-top: 1.5rem;
            .color__social__link {
              color: #fff;
            }
            .color__social__link:hover {
              background: transparent;
              color: #000;
            }

          }
          span {
            color: #000;
          }
        }
        .about__us__description {
          color: #000;
        }
      
      .image__about {
        width:400px;
        height:400px;
        border-radius: 2rem;
        border: 9px solid;
      }
      .image__about:hover {
        animation: shakeanimation;
        animation-duration: 1s;
        transform: translate3d(0, 0, 0);
      }
      .about__us__image {
        padding: 1.2rem;
        border-radius: 2rem;
        border: 7px solid;
        background: linear-gradient(black, transparent),
          linear-gradient(to top left, gray, transparent),
          linear-gradient(to top right, white, transparent);
        margin-bottom: 6rem;
        display: flex;

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
          color: #fff;
        }
        .alignCenter {
          text-align: center;
        }
      }
      &__description {
        color: var(--primary-color);
        margin-bottom: 2rem;
        padding: 1.2rem;
        border-radius: 2rem;
        border: 7px solid;
      }
    }
  }

  @media screen and (max-width: 1900px) {

    .artists__title {
      padding-top: 6.5rem;
    }

    .about {
      &__us {
        padding: 4rem;
        margin-top:-250px;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    height:1400px;
    .artists__title{
      padding-top: 6rem;
      text-align: center;
      h1{
        font-size: 3rem;
        line-height: 2.5rem;
        margin-bottom: 10rem;
        color: var(--color-white);
      }
    }
    .about {
      padding-right:20rem;
      grid-template-columns: repeat(1, 1fr);
      display: inline-table;
      align-items: center;
      height: 100%;
      margin: -4rem -6rem;
      a{
        color:#fff;
      }
      a:link { text-decoration: none; }
      a:visited { text-decoration: none; }
      a:hover { text-decoration: none; }
      a:active { text-decoration: none; }
      a:hover{
        background: transparent;
        color: #000;
      }
  
      &__us {
        padding: 8rem;
        margin-top:-250px;
          .about__us__title {
            .socials-links {
              margin-right: 2rem;
              .color__social__link {
                color: #fff;
              }
              .color__social__link:hover {
                background: transparent;
                color: #000;
              }
            }
          }

        
        .image__about {
          width:300px;
          height:300px;
          border-radius: 2rem;
          border: 9px solid;
        }
        .image__about:hover {
          animation: shakeanimation;
          animation-duration: 1s;
          transform: translate3d(0, 0, 0);
        }
        .about__us__image {
          padding: 1.2rem;
          border-radius: 2rem;
          border: 7px solid;
          background: linear-gradient(black, transparent),
            linear-gradient(to top left, gray, transparent),
            linear-gradient(to top right, white, transparent);
          margin-bottom: 2rem;
          display: flex;
  
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
            color: #fff;
          }
          .alignCenter {
            text-align: center;
          }
        }
      }
  }
`;
export default Artist;
