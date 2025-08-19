import './App.css';
import { Header } from './pages/header';
import { Home } from './pages/home';
import { Sobre } from './pages/sobre';
import { Produtos } from './pages/produtos';
import { Feedbacks } from './pages/feedbacks';

function App() {
  return (
    <div className="relative z-10 min-h-screen overflow-x-hidden bg-[#101820] text-white">
      <Header />
      <div className="absolute z-20">
        <img
          src="/src/assets/Ellipse_2.svg"
          alt="isso AI"
          className="h-[810px] w-[647px]"
        />
      </div>
      <div className="absolute top-20 -right-40 z-20">
        <img
          src="/src/assets/Ellipse_3.svg"
          alt="isso AI"
          className="h-[2000px] w-[1000px]"
        />
      </div>
      <Home />
      <Sobre />
      <Produtos />
      <Feedbacks />
    </div>
  );
}

export default App;
