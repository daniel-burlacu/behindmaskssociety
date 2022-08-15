import React from 'react';
import styled from 'styled-components';
import {FaFacebookF,FaDiscord,FaInstagram,FaTwitter, FaYoutubeSquare} from 'react-icons/fa';
import {motion} from 'framer-motion';


const Footer = () => {
  return (
    <Section>
    <footer>
      <div className="permalinks">
        <a href="#">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#artists">ARTISTS</a>
        <a href="#collection">COLLECTION</a>
        <a href="#minting">MINTING</a>
        <a href="#roadmap">ROADMAP</a>
        <a href="#research">RESEARCH</a>
        <a href="#contact">CONTACT</a>
      </div>
      <div className='footer__socials'>
        <a href="https://discord.gg/g6FRMX27"><FaDiscord size={25}/></a>
        <a href="https://www.facebook.com/Behind-Masks-Society-100192442577085"><FaFacebookF size={25}/></a>
        <a href="https://www.instagram.com/behindmaskssociety/"><FaInstagram size={25}/></a>
        <a href="https://twitter.com/BehindMasks_So"><FaTwitter size={25}/></a>
        <a href="https://www.youtube.com/channel/UCp2aZG91-vDbcBRbTMCtUMw"><FaYoutubeSquare size={25}/></a>
      </div>
      
    <div className="footer__copyright">
      <small>&copy; 2022 Behind Masks Society. All Rights Reserved</small>
    </div>
    </footer>
    </Section>
  )
}

const Section = styled.section`
width:100%;
footer{
  background: var(--color-primary);
  padding:3rem;
  text-align:center;
  font-size:0.9rem;
}

footer a{
  color:var(--color-bg);
}

.footer__logo{
  font-size:2rem;
  font-weight:500;
  margin-bottom:2rem;
  display:inline-block;
}

.footer__img{
      width:11rem;
      height: 15rem;
      position: absolute;
      left: calc(50% - 5rem);
      margin-top:-8rem;
      padding:5rem 1.5rem 1.5rem 1.5rem;
}

.permalinks{
  display:inline;
}

.footer__socials{
  display:flex;
  padding-top:5rem;
  justify-content: center;
  gap:1rem;
}

.footer__socials a{
  background: var(--color-bg);
  color:var(--color-white);
  padding:0.8rem;
  border-radius:0.7rem;
  display:flex;
  border:1px solid transparent;
}

.permalinks  > a{
  padding-left:2rem;
}

.permalinks  > a:link { text-decoration: none; }
.permalinks  > a:visited { text-decoration: none; }
.permalinks  > a:hover { text-decoration: none; }
.permalinks  > a:active { text-decoration: none; }

.permalinks a:hover{
  background: transparent;
  color: var(--color-white);
}

.footer__socials a:hover{
  background: transparent;
  color: var(--color-bg);
  border-color:var(--color-bg);
}

.footer__copyright{
  color:var(--color-bg);
}

@media screen and (min-width: 280px) and (max-width: 1080px) {
  height:1200;
  footer{
      width:100%;
  }
  .permalinks{
    padding-right:30px;
    display:flex;
  }
}

/*============= Media queries (SMALL DEVICES) ============== */
@media screen and (max-width: 1900px) {
  .permalinks{
      flex-direction:column ;
      gap:1.5rem;
  }

  .footer__socials{
      margin-bottom:2.6rem;
  }
}

`
export default Footer