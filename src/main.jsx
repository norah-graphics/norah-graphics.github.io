import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import About from './About'
import Home from './Projects';
import HanaMaak from './HanaMaak/HanaMaak';
import ScrollToTop from './comps/scroll_top'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/">
     <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/HanaMaak" element={<HanaMaak />} />

        
        <Route path="*" element={<Home />} /> 
      </Routes>
    </BrowserRouter> 
  </StrictMode>,
)
