import './App.css'
import { useEffect } from 'react'
import Header from './components/Header/Header'
import Stars from './components/Stars/Stars'
import Home from './components/Home/Home'
import SobreMim from './components/SobreMim/SobreMim'
import Parallax from './components/Parallax/Parallax'
import Curriculo from './components/Curriculo/Curriculo'
import Projeto from './components/Projetos/Projetos'


import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div>
      <Header />
      <Stars />
      <Home />
      <SobreMim />
      <Parallax />
      <Curriculo />
      <Projeto />
    </div>
  );
}

export default App;
