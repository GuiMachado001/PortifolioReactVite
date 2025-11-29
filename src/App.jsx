import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValue, useSpring } from "framer-motion"; 
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import Preloader from './components/Preloader/Preloader';
import Header from './components/Header/Header';
import Stars from './components/Stars/Stars';
import Home from './components/Home/Home';
import SobreMim from './components/SobreMim/SobreMim';
import Parallax from './components/Parallax/Parallax';
import Curriculo from './components/Curriculo/Curriculo';
import Projeto from './components/Projetos/Projetos';
import Achievements from './components/Achievements/Achievements';
import Social from './components/Social/Social';
import Whave from './components/Whave/Whave';
import Footer from './components/Footer/Footer';

function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const [loading, setLoading] = useState(true);

  const [hasMouse, setHasMouse] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    AOS.init({ once: true, offset: 100 });
    

    return () => {
    };
  },);

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />

      {hasMouse && (
        <motion.div
          className="cursor"
          style={{ x: mouseX, y: mouseY }}
        />
      )}

      <motion.div 
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      <Header />
      {/* <Stars /> */}
      

      <Home startAnimation={!loading} />
      
      <SobreMim />
      <Parallax />
      <Curriculo />
      <Projeto />
      <Achievements />
      <Social />
      <Whave />
      <Footer />
    </>
  );
}

export default App;