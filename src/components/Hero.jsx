import React from 'react';
import { ArrowDown, ArrowUpRight, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-photo" role="img" aria-label="Golden morning light over a lush cultivated farm" />
      <div className="hero-shade" />
      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> A better way to grow</div>
          <h1>Growing a greener future through <em>smart agriculture.</em></h1>
          <p>Good things grow when generations of farming wisdom meet thoughtful technology. We help you make every season count.</p>
          <div className="hero-actions">
            <a className="button button-yellow" href="#solutions">Explore our solutions <ArrowUpRight size={17} /></a>
            <a className="button button-outline-light" href="#contact">Talk to an expert</a>
          </div>
          <div className="hero-note"><Leaf size={17} /> Rooted in nature. Ready for what&apos;s next.</div>
        </div>
        <div className="hero-aside">
          <div className="hero-aside-rule" />
          <span>GROW FORWARD</span>
          <span>— TOGETHER</span>
        </div>
        <a className="hero-scroll" href="#about"><span>Scroll to discover</span><ArrowDown size={16} /></a>
        <div className="hero-index"><span>01</span> / 06</div>
      </div>
    </section>
  );
}
