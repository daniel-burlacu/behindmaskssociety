import React from "react";
import styled from "styled-components";
import home from "../../assets/images/homeOverlay.png";
import mobileHome from "../../assets/mobileImage/MobileBackground.png";
import Navbar from "../navbar/Navbar";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "../../utils/animation";
import { FaTwitter, FaFacebookF, FaDiscord, FaInstagram } from "react-icons/fa";
import {useScroll} from '../../utils/useScrol';

const Home = () => {
  const [element, controls] = useScroll();
  return (
    <Section id="home" ref={element}>
      <Navbar />
      <motion.div
        className="home"
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
        animate={controls}
      >
        <div className="content">
          <div className="title">
            <h1>Welcome to our community !</h1>
          </div>
          <div className="subTitle"></div>
        </div>
      </motion.div>

      <motion.div
        className="info"
        variants={homeInfoAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
        animate={controls}
      >
        <div className="grid">
          <div className="col">
            <a href="https://twitter.com/BehindMasks_So" alt="">
              <FaTwitter size={50} />
            </a>
          </div>
          <div className="col">
            <a href="https://www.facebook.com/Behind-Masks-Society" alt="">
              <FaFacebookF size={50} />
            </a>
          </div>
          <div className="col">
            <a href="https://www.instagram.com/behindmaskssociety" alt="">
              <FaInstagram size={50} />
            </a>
          </div>
          <div className="col">
            <a href="https://discord.gg/5zHAkAXj" alt="">
              <FaDiscord size={50} />
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const Section = styled.section`
  background: url(${home}) #000 no-repeat center;
  min-height: 100vh;
  background-size: cover;
  .home {
    height: 100%;
    padding-top: 10rem;
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      color: #fff;
      gap: 1.2rem;
      padding-left: 28rem;
      margin-top: -2rem;
      .title {
        h1 {
          font-size: 4rem;
          line-height: 5.3rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: 2.5rem;
    top:52.5rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      margin-top: -1.5rem;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      bottom: -1rem;
      color: #fff;
      .col {
        a {
          color: #fff;
        }
        a:hover {
          background: transparent;
          color: rgb(0, 213, 255);
        }
      }
    }
  }

  @media screen and (max-width: 1900px) {
    min-height: 100vh;

    .home {
      height: 100%;
      padding-top: 10rem;
      .content {
        padding-left: 21rem;
        margin-top: -2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 5.3rem;
          }
        }
      }
    }

    .info {
      position: absolute;
      bottom: 2.5rem;
      top:41rem;
      right: 0;
      background-color: var(--secondary-color);
      padding: 4rem;
      .grid {
        margin-top: -1.5rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        bottom: -1rem;
        color: #fff;
        .col {
          a {
            color: #fff;
          }
          a:hover {
            background: transparent;
            color: rgb(0, 213, 255);
          }
        }
      }
    }
  }
  
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    background: url(${mobileHome}) #000 no-repeat center;
    min-height: 100vh;
    .home {
      background-size: 100px 20px;
      
      .content {
        margin-top: -5rem;
        padding-left: 5rem;
        .title {
          h1 {
            font-size: 2rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      margin-top: 32.4rem;
      position: initial;
      .grid {
        margin-top: 0rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        bottom: -1rem;
        color: #fff;
      }
    }
  }
`;

export default Home;
