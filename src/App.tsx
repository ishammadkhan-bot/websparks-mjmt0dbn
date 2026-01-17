import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyASL from './components/WhyASL';
import Programs from './components/Programs';
import HowItWorks from './components/HowItWorks';
import Safety from './components/Safety';
import Benefits from './components/Benefits';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Partnership from './components/Partnership';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <WhyASL />
      <Programs />
      <HowItWorks />
      <Safety />
      <Benefits />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partnership" element={<Partnership />} />
      </Routes>
    </Router>
  );
}

export default App;
