
// import './App.css';
import AppNavBar from './components/AppNavBar';
import React, {useEffect} from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';

import 'aos/dist/aos.css';
// import AOS from 'aos';

// AOS.init({
//   duration: 1000,       // animation duration (ms)
//   once: true,           // only animate once
// });



function App() {

//   useEffect(() => {
//   AOS.init({ duration: 1000, once: true });
// }, []);

  return (
    <div className="">
      <AppNavBar/>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      
      <FeaturesSection />
      <PricingSection />
      <ContactSection />

      <Footer />

      {/* <div className='text-center mt-5'>
        <h1>Welcome to sniper-think</h1>
        <p>This is a demo-layout using bootstrap + react.</p>
      </div> */}
    </div>


  );
}

export default App;
