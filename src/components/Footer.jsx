import React from 'react';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Sprout } from 'lucide-react';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: Facebook },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-about">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark"><Sprout size={24} strokeWidth={2.2} /></span>
            <span className="brand-name">green<span>harvest</span><small>AGRICULTURE</small></span>
          </a>
          <p>Thoughtful technology and hands-on expertise, helping farming communities grow a more resilient future.</p>
          <div className="social-links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} aria-label={label} href={href} target="_blank" rel="noreferrer"><Icon size={17} /></a>
            ))}
          </div>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <a href="#about">About us</a><a href="#services">Products & services</a><a href="#solutions">Farming solutions</a><a href="#contact">Contact us</a>
        </div>
        <div className="footer-column">
          <h3>What we do</h3>
          <a href="#services">Organic farming</a><a href="#services">Seeds & nutrients</a><a href="#services">Smart irrigation</a><a href="#services">Expert guidance</a>
        </div>
        <div className="footer-contact">
          <h3>Let&apos;s grow something good.</h3>
          <p>Questions, ideas, or just curious? We&apos;re a message away.</p>
          <a className="footer-email" href="mailto:hello@greenharvest.example">hello@greenharvest.example <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} GreenHarvest Agriculture. Demo brand and content.</span>
        <span>Rooted in nature. Ready for what&apos;s next.</span>
      </div>
    </footer>
  );
}
