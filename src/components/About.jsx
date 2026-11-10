import React from 'react';
import { ArrowUpRight, Check, Sprout } from 'lucide-react';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-visual reveal">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=85"
            alt="Fresh green rows across a sunlit agricultural field"
            loading="lazy"
          />
          <div className="image-caption"><span className="caption-dot" /> Growing well, for generations to come</div>
          <div className="about-stamp"><Sprout size={27} /><span>Rooted in<br />good earth</span></div>
        </div>
        <div className="about-copy reveal">
          <div className="eyebrow"><span className="eyebrow-line" /> A little about us</div>
          <h2>Farming has a bright future.<br /><em>Let&apos;s grow it together.</em></h2>
          <p className="about-lead">At GreenHarvest, we bring practical innovation to the people who grow our food. We pair local expertise with tools that make farms more productive, resilient, and ready for tomorrow.</p>
          <div className="purpose-grid">
            <div>
              <h3>Our mission</h3>
              <p>Give every grower access to the knowledge and technology to thrive.</p>
            </div>
            <div>
              <h3>Our vision</h3>
              <p>A healthier food system, built on farms that work with nature.</p>
            </div>
          </div>
          <ul className="about-values">
            <li><Check size={16} /> Solutions designed for real fields and real seasons</li>
            <li><Check size={16} /> Long-term soil and water stewardship</li>
          </ul>
          <a className="text-link" href="#services">How we help farmers <ArrowUpRight size={17} /></a>
        </div>
      </div>
    </section>
  );
}
