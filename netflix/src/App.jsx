import './index.css';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import HeroHeader from './components/HeroHeader';
import "./components/Navbar"
import Features from './components/Features';

function App() {
  return (
    <div className='font-[Helvetica]'>
      <HeroHeader/>
      <Features/>
      <div className="w-full bg-black flex justify-center pt-16">
        <div className="p-4 md:w-1/2 lg:w-full xl:w-3/4">
          <FAQ />
        </div>
      </div>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
