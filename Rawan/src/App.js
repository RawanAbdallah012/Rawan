import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideNav from './components/SideNav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Footer from './components/Footer';
// Import Lenis
import Lenis from '@studio-freight/lenis';

function App() {

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 3.2,        // Animation duration (higher = slower, smoother)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      direction: 'vertical', // Scroll direction
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,   // Mouse wheel speed
      smoothTouch: false,   // Smooth scroll on touch devices (disable for better mobile UX)
      touchMultiplier: 2,   // Touch scroll speed
      infinite: false,
    });

    // Animation frame for smooth scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <div className='container-fluid'>
              <div className="blur-overlay"></div>
              <div className='row'>
                <SideNav />
                <Hero />
                <div className='col-lg-3 col-md-3 col-12'></div>
                <Projects />
                <div className='col-lg-3 col-md-3 col-12'></div>
                <Services />
                <div className='col-lg-3 col-md-3 col-12'></div>

                <Footer />
              </div>
            </div>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;