import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Their team helped us look at our irrigation in a completely new way. We feel more confident planning around the dry months.',
    name: 'Anita Reddy',
    location: 'Vegetable grower · Karnataka',
    initials: 'AR',
  },
  {
    quote: 'I appreciate advice that fits our actual farm, not just a textbook. The soil plan gave us a clear place to start.',
    name: 'Ramesh Patil',
    location: 'Mixed-crop farmer · Maharashtra',
    initials: 'RP',
  },
  {
    quote: 'It feels like we have a partner to call when a new season brings new questions. That kind of support makes a difference.',
    name: 'Meena Devi',
    location: 'Smallholder farmer · Rajasthan',
    initials: 'MD',
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-heading testimonials-heading reveal">
          <div className="eyebrow"><span className="eyebrow-line" /> In their own words</div>
          <h2>Growing is better <em>together.</em></h2>
          <p>Fictional illustrative stories, created to show the kinds of conversations we hope to have with growers.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <article className={`testimonial-card reveal reveal-delay-${index}`} key={item.name}>
              <Quote className="quote-icon" size={25} fill="currentColor" />
              <p className="testimonial-quote">“{item.quote}”</p>
              <div className="testimonial-person">
                <div className="avatar">{item.initials}</div>
                <div><strong>{item.name}</strong><span>{item.location}</span></div>
              </div>
              <span className="testimonial-note">Illustrative testimonial</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
