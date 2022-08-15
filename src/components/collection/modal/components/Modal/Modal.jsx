import { useEffect } from "react";
import { motion } from "framer-motion";
import { stateLogger } from "../../stateLogger";
import Backdrop from "../Backdrop/index";
import CarouselNeonMasks from '../../components/carousel/CarouselNeonMasks';
import '../../modalapp.css';
import CarouselProductOfPain from "../carousel/CarouselProductOfPain";
import CarouselCosplayMasks from "../carousel/CarouselCosplayMasks";
import CarouselRacerNFT from '../carousel/CarouselRacerNFT';

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Modal = ({ handleClose, text, type }) => {
  // Log state
  useEffect(() => {
    stateLogger("Modal", true);
    return () => stateLogger("Modal", false);
  }, []);

  return (
    <Backdrop onClick={handleClose}>
      
      {type === "flip" && text==="neonmasks" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}   
          className="modal  orange-gradient"
          variants={flip}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalNeonMasks text={"Neon Masks NFT Collection"} />
          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
      )}

      {type === "flip" && text==="productofpain" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}   
          className="modal  orange-gradient"
          variants={flip}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalProductOfPain text={"Product Of Pain Music NFT Albums"} />
          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
      )}

      {type === "flip" && text==="cosplay" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}   
          className="modal  orange-gradient"
          variants={flip}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalCosPlay text={"CosPlay NFT Collection"} />
          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
      )}  

      {type === "flip" && text==="racernft" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}   
          className="modal  orange-gradient"
          variants={flip}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalRacerNFT text={"Racer NFT Colelction"} />
          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
      )} 
    </Backdrop>
  );
};

const ModalNeonMasks = ({ text }) => (
  <div className="modal-text">
    <h3>{text}</h3>
    <CarouselNeonMasks/>
  </div>
);

const ModalProductOfPain = ({ text }) => (
  <div className="modal-text">
    <h3>{text}</h3>
    <CarouselProductOfPain/>
  </div>
);

const ModalCosPlay = ({ text }) => (
  <div className="modal-text">
    <h3>{text}</h3>
    <CarouselCosplayMasks/>
  </div>
);


const ModalRacerNFT = ({ text }) => (
  <div className="modal-text">
    <h3>{text}</h3>
    <CarouselRacerNFT/>
  </div>
);

const ModalButton = ({ onClick, label }) => (
  <motion.button
    className="modal-button"
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

export default Modal;
