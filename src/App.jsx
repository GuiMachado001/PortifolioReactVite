import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValue, useSpring } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';

// --- IMPORTANTE: Importe o Preloader aqui ---
import Preloader from './components/Preloader/Preloader'; 

import Header from './components/Header/Header';
import Stars from './components/Stars/Stars';
import Home from './components/Home/Home';
import SobreMim from './components/SobreMim/SobreMim';
import Parallax from './components/Parallax/Parallax';
import Curriculo from './components/Curriculo/Curriculo';
import Projeto from './components/Projetos/Projetos';
import Social from './components/Social/Social';
import Whave from './components/Whave/Whave';
import Footer from './components/Footer/Footer';

function App() {
  // CONFIGURAÇÃO DO CURSOR
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [hasMouse, setHasMouse] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    AOS.init({ once: true, offset: 100 });
    
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 15);
      mouseY.set(e.clientY - 15);
    };

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setHasMouse(!isTouch);

    if (!isTouch) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* 1. O Preloader deve ser a primeira coisa aqui */}
      <Preloader />

      {/* Cursor Suave */}
      {hasMouse && (
        <motion.div
          className="cursor"
          style={{ 
            translateX: cursorX, 
            translateY: cursorY 
          }}
        />
      )}

      {/* Barra de Progresso */}
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
      <Whave />
      <Footer />
    </>
  );
}

export default App;