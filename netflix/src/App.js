import './App.css';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import HeroHeader from './components/HeroHeader';
import "./components/Navbar"
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <HeroHeader/>
      <FAQ/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;