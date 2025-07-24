import './App.css'
import { useEffect } from 'react'
import Header from './components/Header/Header'
import Stars from './components/Stars/Stars'
import Home from './components/Home/Home'
import SobreMim from './components/SobreMim/SobreMim'

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();  // só inicializa com configurações padrão
  }, []);

  return (
    <div>
      <Header />
      <Stars />
      <Home />
      <SobreMim />
    </div>
  );
}

export default App;
