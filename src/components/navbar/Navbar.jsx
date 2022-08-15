import React, { useState } from 'react';
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useScroll } from "../../utils/useScrol";
import { motion } from "framer-motion";
import { navAnimation } from "../../utils/animation";


const Navbar = () => {
  const [isNavOpen,setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();
  
  return <Nav ref={element}
    variants={navAnimation}
    transition={{ delay: 0.1 }}
    animate={controls} 
    state={isNavOpen ? 1 : 0}
  >
    <div className="brand__container">
      <a href="#" className='brand'>
        <img src={logo} alt="logo" />
      </a>  
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={ () => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            color='#fff'
            onClick={ (e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
            />
        )}
      </div>
    </div>
    <div className={`links ${isNavOpen ? "show" : ""}`}>
    <ul>
        <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#artists">Artists</a>
          </li>
          <li>
            <a href="#collection">Collection</a>
          </li>
          <li>
            <a href="#minting">Minting</a>
          </li>
          <li>
            <a href="#roadmap">Roadmap</a>
          </li>
          <li>
            <a href="#research">Research</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          
        </ul>
    </div>
  </Nav>
}

const Nav = styled(motion.nav)`
  display: flex;
  background:#000;
  justify-content: space-between;
  margin: 0 2rem;
  padding-top: 1.5rem;
  padding-bottom:0.5rem;
  border-radius: 2rem;
  position:fixed;
  z-index:1;
  .brand__container {
    margin: 0 2rem;
    .toggle {
      display: none;
    }
    img{
        width:40%;
        height:60%;
    }
  }
  .links {
    padding-right:30px;
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;
      .active{
        a {
          border-bottom: 0.2rem solid var(--secondary-color);
        }
      }
      
      li {
        a {
          color:var(--secondary-color);
          text-decoration: none;
          font-weight: 400;
          font-size: 0.9rem;
          text-transform: uppercase;
        }
        a:hover{
          color:var(--color-white);
          border-bottom: 0.2rem solid var(--color-white);
        }
      }
    }
  }
  
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0.5rem;
    position:fixed;
    width:90%;
    .brand__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left:10px;
      margin-top:-10px;
      width: 100%;
      img{
        width:30%;
        height:30%;
      }
      .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "100%" : "0%")};
      height: 100vh;
      background-color:var(--color-blue);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li{
          a{
            color:var(--secondary-color);
          } 
        }
      }
     
    }
  }
`;

export default Navbar