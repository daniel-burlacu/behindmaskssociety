import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useModal from "./hooks/useModal";
import { framerLogger } from "./stateLogger";
import Modal from "./components/Modal/Modal";
import { FcImageFile } from "react-icons/fc";
import NeonMaskImage from "../../../assets/images/gallery/BehindNeonMasks/136.png";
import ColdPlayNuns from "../../../assets/images/gallery/CosplayNunMasks/2878.png";
import SevAlbum from "../../../assets/images/team-img1.jpg";
import Fool from "../../../assets/images/gallery/RacerNFT/Thailand.png";
import "../modal/modalapp.css";

const ModalApp = () => {
  // Modal state
  const { modalOpen, close, open } = useModal();
  const [modalText, setModalText] = useState("");
  // Modal type
  const modalType = "flip";

  const handleNeonMasks = (e) => {
    setModalText("neonmasks");
    open();
  };

  const handleProductOfPain = (e) => {
    setModalText("productofpain");
    open();
  };

  const handleCosPlay = (e) => {
    setModalText("cosplay");
    open();
  };

  const handleRacerNFT = (e) => {
    setModalText("racernft");
    open();
  };

  return (
    <div className="modalapp" id="collections">
      <div className="main">
        <div className="kbd">
          <div className="buttons__alignment">
            <div>
              <motion.button
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1, opacity: 0.5 }}
                whileTap={{ scale: 0.9 }}
                className="save-button"
                onClick={() => {
                  handleNeonMasks();
                }}
              >
                <motion.img src={NeonMaskImage} alt="albumNeonMasksImage" />
                <motion.p className="img__description" animate={{opacity:1}}>Neon Masks</motion.p>
              </motion.button>
            </div>
            <div>
              <motion.button
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1, opacity: 0.5 }}
                whileTap={{ scale: 0.9 }}
                className="save-button"
                onClick={() => {
                  handleProductOfPain();
                }}
              >
                <motion.img src={SevAlbum} alt="ProductOfPain" />
                <motion.p className="img__description" animate={{opacity:1}}>Product Of <br/>Pain</motion.p>
              </motion.button>
            </div>
            <div>
           
              <motion.button
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1, opacity: 0.5 }}
                whileTap={{ scale: 0.9 }}
                className="save-button"
                onClick={() => {
                  handleCosPlay();
                }}
              >
                <motion.img src={ColdPlayNuns} alt="ColdPlayNuns" />
                <motion.p className="img__description" animate={{opacity:1}}>CosPlay Nuns</motion.p>
              </motion.button>
              
            </div>
            <div>
              <motion.button
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1, opacity: 0.5 }}
                whileTap={{ scale: 0.9 }}
                className="save-button"
                onClick={() => {
                  handleRacerNFT();
                }}
              >
                <motion.img src={Fool} alt="Fool" />
                <motion.p className="img__description" animate={{opacity:1}}>NFT Racer</motion.p>
              </motion.button>
            </div>
          </div>
        </div>

        <ModalContainer>
          {console.log("My text is:" + modalText)}
          {modalOpen && (
            <Modal
              modalOpen={modalOpen}
              text={modalText}
              type={modalType}
              handleClose={close}
            />
          )}
        </ModalContainer>
      </div>
    </div>
  );
};

const ModalContainer = ({ children, label }) => (
  // Enables the animation of components that have been removed from the tree
  <AnimatePresence
    // Disable any initial animations on children that
    // are present when the component is first rendered
    initial={false}
    // Only render one component at a time.
    // The exiting component will finish its exit
    // animation before entering component is rendered
    exitBeforeEnter={true}
    // Fires when all exiting nodes have completed animating out
    onExitComplete={() => framerLogger(label)}
  >
    {children}
  </AnimatePresence>
);

export default ModalApp;
