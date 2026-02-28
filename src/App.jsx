import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import PracticeAreas from './pages/PracticeAreas';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="practice-areas" element={<PracticeAreas />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
