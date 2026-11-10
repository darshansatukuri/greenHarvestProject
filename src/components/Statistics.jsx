import React from 'react';
import { Sprout } from 'lucide-react';

const statistics = [
  ['2,400+', 'Farmers supported'],
  ['18', 'Practical solutions'],
  ['320+', 'Projects completed'],
  ['86', 'Sustainability initiatives'],
];

export default function Statistics() {
  return (
    <section className="stats-section">
      <div className="container stats-inner">
        <div className="stats-title reveal">
          <div className="eyebrow"><span className="eyebrow-line" /> Growing impact</div>
          <h2>Small steps.<br /><em>Real progress.</em></h2>
          <p>Illustrative figures showing the kind of progress we work toward with farming communities.</p>
          <div className="stats-note"><Sprout size={16} /> Demonstration figures — not audited results</div>
        </div>
        <div className="stats-grid reveal">
          {statistics.map(([number, label], index) => (
            <div className="stat-item" key={label}>
              <span className="stat-index">0{index + 1}</span>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
