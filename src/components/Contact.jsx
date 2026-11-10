import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';

const initialForm = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSubmitted(false);
  };

  const submitForm = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your full name.';
    if (!form.email.trim()) nextErrors.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = 'Enter a valid email address.';
    if (!form.phone.trim()) nextErrors.phone = 'Please enter your phone number.';
    else if (!/^[+]?[\d\s().-]{7,20}$/.test(form.phone.trim()) || form.phone.replace(/\D/g, '').length < 7) nextErrors.phone = 'Enter a valid phone number.';
    if (!form.message.trim()) nextErrors.message = 'Please tell us a little about how we can help.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Your next season starts here</div>
          <h2>Let&apos;s talk about<br /><em>what you&apos;re growing.</em></h2>
          <p>Have a question, a challenge, or an idea you&apos;re ready to explore? Our team would love to hear from you.</p>
          <div className="contact-details">
            <a href="mailto:hello@greenharvest.example"><span><Mail size={18} /></span><div><small>Email us</small><strong>hello@greenharvest.example</strong></div></a>
            <a href="tel:+918001234567"><span><Phone size={18} /></span><div><small>Give us a call</small><strong>+91 800 123 4567</strong></div></a>
            <div><span><MapPin size={18} /></span><div><small>Find us</small><strong>Pune, Maharashtra, India</strong></div></div>
          </div>
          <p className="contact-demo-note">Demonstration contact details for this fictional company.</p>
        </div>
        <div className="contact-form-wrap reveal">
          <div className="form-heading"><h3>Start a conversation</h3><span>We&apos;ll take it from here.</span></div>
          {submitted ? (
            <div className="form-success" role="status">
              <CheckCircle2 size={37} />
              <h3>Thanks for reaching out, {form.name.split(' ')[0]}.</h3>
              <p>Your demo submission was completed successfully. No message was sent to a real company.</p>
              <button type="button" className="text-link" onClick={() => { setForm(initialForm); setSubmitted(false); }}>Send another message <ArrowUpRight size={16} /></button>
            </div>
          ) : (
            <form onSubmit={submitForm} noValidate>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="full-name">Full name <span>*</span></label>
                  <input id="full-name" name="name" autoComplete="name" value={form.name} onChange={updateForm} placeholder="Your name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
                  {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
                </div>
                <div className="field">
                  <label htmlFor="email">Email address <span>*</span></label>
                  <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={updateForm} placeholder="you@example.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
                  {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
                </div>
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number <span>*</span></label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={updateForm} placeholder="+91 98765 43210" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} />
                {errors.phone && <span className="field-error" id="phone-error">{errors.phone}</span>}
              </div>
              <div className="field">
                <label htmlFor="message">How can we help? <span>*</span></label>
                <textarea id="message" name="message" rows="4" value={form.message} onChange={updateForm} placeholder="Tell us a little about your farm or idea..." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
                {errors.message && <span className="field-error" id="message-error">{errors.message}</span>}
              </div>
              <button className="button button-yellow form-submit" type="submit">Send your message <ArrowUpRight size={17} /></button>
              <p className="form-disclaimer">Demo only — this form shows a confirmation and does not send or store information.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
