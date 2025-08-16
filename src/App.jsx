import './App.css';
import { Header } from './pages/header';
import { Home } from './pages/home';

function App() {
  return (
    <div className="min-h-screen bg-[#101820] text-white">
      <Header />
      <Home />
    </div>
  );
}

export default App;
