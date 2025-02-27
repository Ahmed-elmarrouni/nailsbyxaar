import './App.css'
import 'react-slideshow-image/dist/styles.css'

import Navbar from './components/1-navbar/navbar'
import Main from './components/2-main/main'
import Footer from './components/8-footer/footer'
import Work from './components/5-work/work';
import Reviews from './components/6-reviews/reviews'
import Services from './components/4-services/services'
import Contact from './components/7-contact/contact'
import About from './components/3-about/about'
import ScrollButton from './components/scrollButton/scroll-button'
import { LanguageProvider } from './contexts/LanguageContext';
import { useRef } from 'react';

function App() {
  const contactRef = useRef(null);  // <-- Declare the ref here

  return (

    <>
      <LanguageProvider >

        <Navbar />
        <Main />
        <About />
        <Work />
        <Services onSelectOffer={(offer) => contactRef.current(offer)} />  {/* Pass ref function */}
        <Reviews />
        <Contact ref={contactRef} />
        <Footer />
        <ScrollButton />
      </LanguageProvider>

    </>
  )
}

export default App
