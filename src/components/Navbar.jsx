import React, { useState } from 'react';
import { Sprout } from 'lucide-react';

const links = [
  ['Home', '#home'],
  ['About us', '#about'],
  ['Products & services', '#services'],
  ['Farming solutions', '#solutions'],
  ['Contact us', '#contact'],
];

export default function Navbar({ MenuIcon, CloseIcon }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="GreenHarvest home">
          <span className="brand-mark"><Sprout size={24} strokeWidth={2.2} /></span>
          <span className="brand-name">green<span>harvest</span><small>AGRICULTURE</small></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="primary-links"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon size={23} /> : <MenuIcon size={23} />}
        </button>
        <div className={`nav-content ${open ? 'nav-open' : ''}`} id="primary-links">
          <div className="nav-links">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>{label}</a>
            ))}
          </div>
          <a className="button button-green nav-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
