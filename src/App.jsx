import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
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

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Cursor animado */}
      <motion.div
        className="cursor"
        animate={{ x: pos.x - 15, y: pos.y - 15 }}
        transition={{ duration: 0 }} // sem delay
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
