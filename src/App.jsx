import './App.css';
import { Header } from './pages/header';
import { Home } from './pages/home';
import { Sobre } from './pages/sobre';
import Elipse from '../src/assets/Ellipse_1.svg?react';

function App() {
  return (
    <div className="relative z-10 min-h-screen bg-[#101820] text-white">
      <Header />
      <div className="absolute z-20">
        {/* <Elipse className="w-3 h-3"/> */}
        <img
          src="/src/assets/Ellipse_2.svg"
          alt="isso AI"
          className="h-[810px] w-[647px]"
        />
      </div>
      <Home />
      <Sobre />
    </div>
  );
}

export default App;
