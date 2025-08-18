import './App.css';
import { Header } from './pages/header';
import { Home } from './pages/home';
import { Sobre } from './pages/sobre';

function App() {
  return (
    <div className="min-h-screen bg-[#101820] text-white">
      <Header />
      <Home />
      <Sobre />
    </div>
  );
}

export default App;
