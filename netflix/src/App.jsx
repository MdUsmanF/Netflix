import './index.css';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import HeroHeader from './components/HeroHeader';
import "./components/Navbar"
import Features from './components/Features';

function App() {
  return (
    <div>
      <HeroHeader/>
      <Features/>
      <FAQ/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
