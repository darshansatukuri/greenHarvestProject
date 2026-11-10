import React from 'react';
import { ArrowUpRight, Bug, Droplets, ScanLine, Sprout } from 'lucide-react';

const solutions = [
  {
    number: '01',
    icon: ScanLine,
    title: 'Smart farming',
    text: 'Make clearer, more confident decisions with timely field insights, simple monitoring tools, and expert support.',
    label: 'BETTER FIELD DECISIONS',
  },
  {
    number: '02',
    icon: Droplets,
    title: 'Water management',
    text: 'Plan irrigation around your crops and local conditions to conserve a precious resource without compromising growth.',
    label: 'EVERY DROP COUNTS',
  },
  {
    number: '03',
    icon: Sprout,
    title: 'Soil health',
    text: 'Understand what is happening beneath the surface with soil testing and balanced, responsible nutrient planning.',
    label: 'START FROM THE SOIL',
  },
];

export default function FarmingSolutions() {
  return (
    <section className="section solutions-section" id="solutions">
      <div className="container">
        <div className="solutions-intro reveal">
          <div>
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Thoughtful farming, made practical</div>
            <h2>From the ground up,<br /><em>let&apos;s grow smarter.</em></h2>
          </div>
          <p>Great farming isn&apos;t one-size-fits-all. We bring together good data, local knowledge, and sustainable practices that work in your field.</p>
        </div>
        <div className="solutions-grid">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <article className={`solution-card reveal reveal-delay-${index}`} key={solution.number}>
                <div className="solution-card-top"><span>{solution.number}</span><Icon size={23} /></div>
                <span className="solution-label">{solution.label}</span>
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
              </article>
            );
          })}
        </div>
        <div className="solutions-foot reveal">
          <div className="solutions-foot-icon"><Bug size={19} /><Sprout size={19} /></div>
          <p><strong>A healthier crop starts before a problem appears.</strong><br />We include disease prevention and sustainable practices in every growing plan.</p>
          <a className="button button-outline-light" href="#contact">Find your solution <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}
