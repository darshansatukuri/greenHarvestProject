import React, { useEffect, useState } from 'react';
import { ArrowUp, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import FarmingSolutions from './components/FarmingSolutions.jsx';
import Statistics from './components/Statistics.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 560);
    window.addEventListener('scroll', onScroll, { passive: true });

    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar MenuIcon={Menu} CloseIcon={X} />
      <main>
        <Hero />
        <About />
        <Services />
        <FarmingSolutions />
        <Statistics />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <button
        className={`back-to-top ${showTop ? 'is-visible' : ''}`}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp size={19} aria-hidden="true" />
      </button>
    </>
  );
}
