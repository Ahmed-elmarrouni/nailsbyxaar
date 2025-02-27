
// ! ----------------------
import './App.css';
import 'react-slideshow-image/dist/styles.css';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/1-navbar/navbar';
import Footer from './components/8-footer/footer';

import Main from './components/2-main/main';
import Work from './components/5-work/work';
import Reviews from './components/6-reviews/reviews';
import Services from './components/4-services/services';
import Contact from './components/7-contact/contact';
import About from './components/3-about/about';
import ScrollButton from './components/scrollButton/scroll-button';
import { LanguageProvider } from './contexts/LanguageContext';
import { useRef, useEffect } from 'react';

import TermsAndConditions from './components/9-legal/termsAndConditions';
import TermsOfService from './components/9-legal/termsOfService';
import SitePrivacy from './components/9-legal/sitePrivacy.jsx';
import { Analytics } from "@vercel/analytics/react"

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("scroll");

    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Wait a bit to ensure the page loads before scrolling
    }
  }, [location]);

  return null;
}

function App() {
  const contactRef = useRef(null);

  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <ScrollToSection /> {/* ✅ Handles scrolling after navigation */}
        <Routes>
          {/* ✅ Home Page with Main Components */}
          <Route path="/" element={
            <>
              <Analytics />
              <Main />
              <About />
              <Work />
              <Services onSelectOffer={(offer) => contactRef.current(offer)} />
              <Reviews />
              <Contact ref={contactRef} />
            </>
          } />

          {/* ✅ Legal Pages */}
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<SitePrivacy />} />
        </Routes>

        <Footer />
        <ScrollButton />
      </Router>
    </LanguageProvider>
  );
}

export default App;
