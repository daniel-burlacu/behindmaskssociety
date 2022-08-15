import React from "react";
import { motion } from "framer-motion";
import background from "../../assets/images/minting.png";
import sev from "../../assets/images/team-img1.jpg";
import daniCrypto from "../../assets/images/gallery/BehindNeonMasks/134.png";
import daniFEDev from "../../assets/images/gallery/CosplayNunMasks/2877.png";
import theMask from "../../assets/images/gallery/RacerNFT/Fool.png";
import styled from "styled-components";

const Minting = () => {
  return (
    <Section id="minting">
      <div className="minting">
        <h1>Minting Page</h1>
        <div className="container">
          <motion.div
                style={{
                width: 250,
                height: 280,
                borderRadius: 30,
                backgroundColor: "#7900C5",
                y: -18,
                }}
                animate={{ y: 35 }}
                transition={{
                delay: 1,
                duration: 2,
                ease: [0.92, 0.92, 0.92, 0.92],
                repeat: Infinity,
                repeatType: "reverse",
                }}
                className="card"
            >
            <div className="cardText">
              <h2>Behind Neon Masks </h2>
            </div>
            <motion.img
              src={daniCrypto}
              alt="sev"
              style={{
                width: 200,
                height: 200,
                borderRadius: 20,
              }}
            />
        <div className="align__social_links">
            <div className="social-links">
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                href="https://mintBNM.behindmaskssociety.com" target="_blank" rel="noreferrer"
              >
                <p>Mint</p>
              </motion.a>
            </div>
            </div>
          </motion.div>
          <motion.div
            style={{
              width: 250,
              height: 280,
              borderRadius: 20,
              backgroundColor: "#4C0096",
              y: -15,
            }}
            animate={{ y: 35 }}
            transition={{
              delay: 1.5,
              duration: 2.5,
              ease: [0.122, 0.122, 0.122, 0.122],
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="card"
          >
            <div className="cardText">
              <h2>Behind Cosplay Masks </h2>
            </div>

            <motion.img
              src={daniFEDev}
              alt="daniFEDev"
              style={{
                width: 200,
                height: 200,
                borderRadius: 20,
              }}
            />
            <div className="align__social_links">
            <div className="social-links">
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                href="https://mintcnm.behindmaskssociety.com/" target="_blank" rel="noreferrer"
              >
                <p>Mint</p>
              </motion.a>
            </div>
            </div>
          </motion.div>
          <motion.div
            style={{
              width: 250,
              height: 280,
              borderRadius: 30,
              backgroundColor: "#4E00C5",
              y: -10,
            }}
            animate={{ y: 35 }}
            transition={{
              delay: 2,
              duration: 3,
              ease: [0.102, 0.102, 0.102, 0.102],
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="card"
          >
            <div className="cardText">
              <h2>{"Racer & The Fool NFT"}</h2>
            </div>

            <motion.img
              src={theMask}
              alt="sev"
              style={{
                width: 200,
                height: 200,
                borderRadius: 20
                
              }}
            />
            <div className="align__social_links">
            <div className="social-links">
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                href="https://droplistbmws1000rrcouple.behindmaskssociety.com/" target="_blank" rel="noreferrer"
              >
                <p>The Game</p>
              </motion.a>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background: url(${background}) no-repeat center center/cover;
  height: 950px;
  .minting .container {
    text-align: center;
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 60px);
    grid-gap: 250px;
    margin-top: 120px;
    padding-left: 550px;
  }

  .minting .container .card {
    border: 4px solid black;
    position: relative;
    margin: auto;
    margin-top: 10px;
  }

  .minting .container .card .cardText {
    text-align: center;
    position: absolute;
    margin-left: 10px;
    margin-top: 75px;
  }

  .minting .container .align__social_links{
    padding-left:60px;
  }

  .minting .container .social-links {
    width:60%;
    text-align: center;
    display: grid;
    margin-top: 80px;
    gap:1rem;
  }


  .social-links > a {
    border-radius: 5px;
    border: 2px solid black;
    background:var(--color-lightblue);
    color: var(--secondary-color);
  }

  .social-links > a:link { text-decoration: none; }
  .social-links > a:visited { text-decoration: none; }
  .social-links > a:hover { text-decoration: none; }
  .social-links > a:active { text-decoration: none; }

  .minting h1 {
    font-size: 8rem;
    color: #2fd8ef;
    text-align: center;
    padding-top: 100px;
  }

  .minting h2 {
    font-size: 1.4rem;
    color: #2fd8ef;
  }

  .minting .container .content {
    margin: 2rem 0;
    width: 800px;
    height: 50px;
  }

  .minting img {
    border: 6px solid black;
    border-radius: 50px;
    margin-top: -8rem;
  }

  .minting .card p {
    font-size: 1.5rem;
  }

  .minting .card span {
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: 700;
  }

  @media screen and (max-width: 1900px) {
    height: 800px;
  
    .minting .container {
      text-align: center;
      position: relative;
      display: grid;
      grid-template-columns: repeat(3, 60px);
      grid-gap: 250px;
      margin-top: 120px;
      padding-left: 400px;
    }
  
    .minting .container .card {
      border: 4px solid black;
      position: relative;
      margin: auto;
      margin-top: 10px;
    }
  
    .minting .container .card .cardText {
      text-align: center;
      position: absolute;
      margin-left: 10px;
      margin-top: 75px;
    }
  
    .minting .container .align__social_links{
      padding-left:60px;
    }
  
    .minting .container .social-links {
      width:60%;
      text-align: center;
      display: grid;
      margin-top: 80px;
      gap:1rem;
    }

    .minting h1 {
      font-size: 8rem;
      color: #2fd8ef;
      text-align: center;
      padding-top: 100px;
    }
  
    .minting h2 {
      font-size: 1.4rem;
      color: #2fd8ef;
    }
  
    .minting .container .content {
      margin: 2rem 0;
      width: 800px;
      height: 50px;
    }
  
  
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    height:1600px;

    .minting .container {
      top:-450px;
      text-align: center;
      display: inline-block;
      padding-left:80px;
    }

    .minting .container .card {
      border: 4px solid black;
      position: relative;
      margin: auto;
      margin-top: 120px;
    }

  }
`;

export default Minting;
