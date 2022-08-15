import React from "react";

import ProgressBarEmpty from "../../assets/progressBar/progressBarEmpty.png";
import Percentage25 from "../../assets/progressBar/25percentage.png";
import Percentage40 from "../../assets/progressBar/40percentage.png";
import Percentage50 from "../../assets/progressBar/50percentage.png";
import Percentage65 from "../../assets/progressBar/65percentage.png";
import Percentage75 from "../../assets/progressBar/75percentage.png";
import Percentage85 from "../../assets/progressBar/85percentage.png";
import Percentage100 from "../../assets/progressBar/100percentage.png";
import gif from '../../assets/gifs/pathGif.gif';

import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "../../utils/useScrol";
import { roadMapLight } from "../../utils/animation";

const Roadmap = () => {
  const [element, controls] = useScroll();
  return (
    <Section id="roadmap"  ref={element}>
      <div className="roadmap">
        <div className="container">
          <div className="content">
            <h1>Behind Masks Society</h1>
            <h1>RoadMap</h1>
            <motion.div animate={controls}>
                <motion.div
                  className="card"
                  initial={{ boxShadow: "0px 0px 80px 30px #fff"}}
                  variants={roadMapLight}
                  animate={controls}
                  transition={{ delay: 0.12, duration: 1 }}
                >
                  <img width="400" height="60" src={ProgressBarEmpty} alt="" />
                  <h2>Start</h2>
                  <p>
                    At the beginning there was only darkness, we will create
                    light ! WhiteList, Airdrops and lot's of goodies !
                  </p>
                </motion.div>
        
                <motion.div
                  className="card"
                  initial={{ boxShadow: "0px 0px 80px 30px #fff"}}
                  variants={roadMapLight}
                  animate={controls}
                  transition={{ delay: 0.16, duration: 1.5 }}
                >
                  <img width="400" height="60" src={Percentage25} alt="" />
                  <h2>25% More ETH</h2>
                  <p>
                    At 25% sold out we will add 5 ETH to the community treasury.
                  </p>
                </motion.div>
          
                <motion.div
                  className="card"
                  initial={{ boxShadow: "0px 0px 80px 30px #fff"}}
                  variants={roadMapLight}
                  animate={controls}
                  transition={{ delay: 0.20, duration: 2 }}
                >
                  <img width="400" height="60" src={Percentage40} alt="" />
                  <h2>40% More ETH + Airdrop </h2>
                  <p>
                    At 40% sold out we will add another 10 ETH to the community
                    treasury. 10 Lucky holders will be airdropped one
                    BehindNeonMasks NFT!
                  </p>
                </motion.div>
          
                <motion.div
                  className="card"
                  initial={{ boxShadow: "0px 0px 80px 30px #fff"}}
                  variants={roadMapLight}
                  animate={controls}
                  transition={{ delay: 0.24, duration: 2.5 }}
                >
                  <img width="400" height="60" src={Percentage50} alt="" />
                  <h2>50% Merch Drop</h2>
                  <p>
                    At 50% sold out we will begin planning a future merch drop.
                    Including an exclusive statue collectible.
                  </p>
                </motion.div>
            
                <motion.div
                  className="card"
                  initial={{ boxShadow: "0px 0px 80px 30px #fff"}}
                  variants={roadMapLight}
                  animate={controls}
                  transition={{ delay: 0.30, duration: 3 }}
                >
                  <img width="400" height="60" src={Percentage65} alt="" />
                  <h2>65% Airdrop</h2>
                  <p>
                    At 65% sold out 20 lucky holders will be airdropped one
                    Astro Bull!
                  </p>
                </motion.div>
              
                <motion.div
                  className="card"
                  initial={{ boxShadow: "0px 0px 80px 30px #fff"}}
                  variants={roadMapLight}
                  animate={controls}
                  transition={{ delay: 0.34, duration: 3.5 }}
                >
                  <img width="400" height="60" src={Percentage75} alt="" />
                  <h2>75% More ETH </h2>
                  <p>
                    At 75% sold out we will add another 10 ETH to the community
                    treasury.
                  </p>
                </motion.div>
            
                <motion.div
                  className="card"
                  initial={{ boxShadow: "0px 0px 80px 30px #fff"}}
                  variants={roadMapLight}
                  animate={controls}
                  transition={{ delay: 0.40, duration: 4 }}
                >
                  <img width="400" height="60" src={Percentage85} alt="" />
                  <h2>85% Community Grant </h2>
                  <p>
                    At 85% sold out there will be a Community Grant of 20 ETH.
                  </p>
                </motion.div>
  
                <motion.div
                  className="card"
                  initial={{ boxShadow: "0px 0px 80px 30px #fff"}}
                  variants={roadMapLight}
                  animate={controls}
                  transition={{ delay: 0.44, duration: 4.5 }}
                >
                  <img width="400" height="60" src={Percentage100} alt="" />
                  <h2>100% Done</h2>
                  <p>
                    At 100% sold out 10 lucky holder will receive a secure place
                    in our next release and in the whitelist + 1 airdrop !
                  </p>
                </motion.div>
              
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background: url(${gif}) no-repeat center center/cover;
  height: 1700px;
  margin: auto;
  .roadmap {
    padding-left:600px;

    .container {
      position: relative;
      width: 800px;
      padding: 4rem 0rem;
      .content {
        padding-top:20px;
        width: 800,
        height: 150,

        margin: 2rem 0;
      }
    }
    h1 {
      font-size: 3rem;
      color: #2fd8ef;
      text-align: center;
    }
    h2 {
      font-size: 1.5rem;
      color: #2fd8ef;
      text-align: center;
    }
    .card {
      border-radius: 20px;
      border: 4px solid rgba(255, 255, 255, 0.443);
      boxShadow: 0px -300px 80px 100px rgba(255, 255, 255, .3);
      margin-top:20px;
      padding: 1rem;
      p {
        color: #2fd8ef;
        font-size: 1rem;
      }
      span {
        color: var(--primary-color);
        font-size: 1rem;
        font-weight: 700;
      }
    }
    img {
      border-radius: 50px;
      margin-top: -2rem;
    }
  }

  @media screen and (max-width: 1900px) {

    height: 1600px;
    margin: auto;
    .roadmap {
      padding-left:430px;
  
      .container {
        position: relative;
        width: 800px;
        padding: 4rem 0rem;
        .content {
          width: 800,
          height: 150,
  
          margin: 2rem 0;
        }
      }
      h1 {
        font-size: 3rem;
        color: #2fd8ef;
        text-align: center;
      }
      h2 {
        font-size: 1.5rem;
        color: #2fd8ef;
        text-align: center;
      }

  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
  height: 2100px;
  margin-left:-415px;
  .roadmap {
    .container {
      position: relative;
      width: 380px;
      padding: 4rem 0rem;
      .content {
        margin: 2rem 0;
        width: 380px;
        height: 50px;
      }
    }
    ol {
      grid-template-columns: repeat(4, 1fr);
      color: #2fd8ef;
    }
    h1 {
      font-size: 3rem;
      color: #2fd8ef;
      text-align: center;
    }
    h2 {
      font-size: 1.5rem;
      color: #2fd8ef;
      text-align: center;
    }
    .card {
      order-radius: 20px;
      border: 4px solid rgba(255, 255, 255, 0.443);;
      margin-top:20px;
      padding: 1rem;
      p1 {
        color: #2fd8ef;
        font-size: 1rem;
        margin: 12px;
      }
      span {
        color: var(--primary-color);
        font-size: 1rem;
        font-weight: 700;
      }
    }
    img {
      border-radius: 50px;
      margin-top: -1rem;
      margin-left:-1.55rem;
    }
  }

  }
`;

export default Roadmap;
