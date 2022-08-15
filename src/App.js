import {motion} from 'framer-motion';
import Home from './components/home/Home';
import About from './components/about/About';
import Collection from './components/collection/Collection';
import Minting from './components/minting/Minting';
import Artists from './components/artists/Artist';
import Roadmap from './components/roadmap/Roadmap';
import Research from './components/research/Research.jsx';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <motion.div initial="hidden" animate="show">
        <Home/>
        <About/>
        <Artists/>
        <Collection/>
        <Minting/>
        <Roadmap/>
        <Research/>
        <Contact/>
        <Footer/>
   </motion.div>
  );
}

export default App;
