import { useState, useEffect } from 'react';
import { motion, useScroll } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import Header from './components/Header/Header';
import Stars from './components/Stars/Stars';
import Home from './components/Home/Home';
import SobreMim from './components/SobreMim/SobreMim';
import Parallax from './components/Parallax/Parallax';
import Curriculo from './components/Curriculo/Curriculo';
import Projeto from './components/Projetos/Projetos';
import Social from './components/Social/Social';
import Footer from './components/Footer/Footer';

function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hasMouse, setHasMouse] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    // Detecta se o dispositivo é touch
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setHasMouse(!isTouch);

    if (!isTouch) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // cleanup (sempre roda, mesmo em touch)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Cursor animado só no desktop */}
      {hasMouse && (
        <motion.div
          className="cursor"
          animate={{ x: pos.x - 15, y: pos.y - 15 }}
          transition={{ duration: 0 }}
        />
      )}

      {/* Barra de scroll */}
      <motion.div 
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      <Header />
      <Stars />
      <Home />
      <SobreMim />
      <Parallax />
      <Curriculo />
      <Projeto />
      <Social />
      <Footer />
    </>
  );
}

export default App;
