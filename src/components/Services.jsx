import React, { useState } from 'react';
import { ArrowUpRight, Droplets, Leaf, Microscope, Sprout, Tractor, Waves, X } from 'lucide-react';

const services = [
  {
    title: 'Organic farming',
    description: 'Build a healthier farm ecosystem with practical, nature-first growing methods.',
    detail: 'From crop rotations and composting to integrated pest management, our advisors help you plan a transition that fits your land, market, and season.',
    icon: Leaf,
    image: 'photo-1500937386664-56d1dfef3854',
    tag: 'GROW NATURALLY',
  },
  {
    title: 'Seeds & nutrients',
    description: 'Start strong with carefully selected seeds and crop-specific nutrition.',
    detail: 'Get guidance selecting seed varieties for your local conditions, plus a balanced nutrient plan informed by your crop goals and soil.',
    icon: Sprout,
    image: 'photo-1574323347407-f5e1ad6d020b',
    tag: 'A STRONGER START',
  },
  {
    title: 'Smart irrigation',
    description: 'Put water where it matters with efficient, field-ready irrigation.',
    detail: 'Explore drip and precision irrigation options, practical scheduling, and water-use monitoring designed to help reduce waste.',
    icon: Droplets,
    image: 'photo-1560493676-04071c5f467b',
    tag: 'USE WATER WISELY',
  },
  {
    title: 'Expert guidance',
    description: 'Make your next farming decision with an experienced partner by your side.',
    detail: 'Talk through crop planning, farm operations, and sustainability goals with agricultural specialists who understand the realities on the ground.',
    icon: Microscope,
    image: 'photo-1592982537447-7440770cbfc9',
    tag: 'LOCAL KNOW-HOW',
  },
  {
    title: 'Crop care',
    description: 'Keep an eye on crop health, catch issues early, and plan each stage.',
    detail: 'Develop a seasonal crop plan with scouting checklists, integrated disease prevention, and timely recommendations for your growing conditions.',
    icon: Waves,
    image: 'photo-1499529112087-3cb3b73cec95',
    tag: 'HEALTHIER HARVESTS',
  },
  {
    title: 'Farm equipment',
    description: 'Find dependable tools and equipment that make everyday work easier.',
    detail: 'Get help matching practical equipment to your acreage, crops, and budget, with advice on efficient and responsible use.',
    icon: Tractor,
    image: 'photo-1530267981375-f0de937f5f13',
    tag: 'MADE FOR THE FIELD',
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-heading heading-split reveal">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Made for the way you grow</div>
            <h2>Good tools. Good advice.<br /><em>Better growing.</em></h2>
          </div>
          <p>From the first seed to the final harvest, get the right support for your farm and your next big idea.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className={`service-card reveal reveal-delay-${index % 3}`} key={service.title}>
                <div className="service-image">
                  <img
                    src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=760&q=80`}
                    alt=""
                    loading="lazy"
                  />
                  <span className="service-tag">{service.tag}</span>
                </div>
                <div className="service-body">
                  <div className="service-icon"><Icon size={19} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="text-link service-link" type="button" onClick={() => setSelected(service)}>
                    Learn more <ArrowUpRight size={16} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      {selected && (
        <div className="modal-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}>
          <section className="service-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button type="button" className="modal-close" aria-label="Close service details" onClick={() => setSelected(null)}><X size={20} /></button>
            <div className="eyebrow"><span className="eyebrow-line" /> Here to help you grow</div>
            <h2 id="modal-title">{selected.title}</h2>
            <p>{selected.detail}</p>
            <a className="button button-green" href="#contact" onClick={() => setSelected(null)}>Ask our team <ArrowUpRight size={17} /></a>
          </section>
        </div>
      )}
    </section>
  );
}
