// CtaForm.jsx — Final CTA section with two-column layout: copy/bullets/phone on left,
// walkthrough request form on right.

const { useState } = React;
const { IconCheck, IconPhone, IconArrowR } = window.SpritzIcons;

function CtaForm() {
  const [form, setForm] = useState({ fullName: "", company: "", email: "", phone: "", industry: "", size: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section className="cta" id="cta">
      <div className="spritz-container">
        <div className="cta-layout">
          <div className="cta-content spritz-reveal">
            <div className="spritz-kicker-bar">Get Started</div>
            <h2 className="cta-h2">Request your <span className="accent">walkthrough.</span></h2>
            <p>Fill out the form and we'll be in touch within one business day to schedule an on-site visit. No pricing pressure, no obligation — just a real conversation about your space.</p>
            <div className="cta-bullets">
              {[
                "Response within one business day, often same-day",
                "Walkthrough scheduled at your convenience",
                "Custom scope and transparent pricing within 48 hours",
                "Bilingual service: répondez en français si vous préférez",
              ].map((b) => (
                <div key={b} className="cta-bullet">
                  <div className="cta-bullet-check"><IconCheck size={11} sw={3} /></div>
                  <div>{b}</div>
                </div>
              ))}
            </div>
            <div className="cta-direct">
              <div className="cta-direct-label">Prefer to call?</div>
              <a href="tel:5146778390" className="cta-direct-phone">
                <IconPhone size={22} />
                514-677-8390
              </a>
            </div>
          </div>

          <div className="form-card spritz-reveal">
            <div className="form-card-badge">Free Walkthrough</div>
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon"><IconCheck size={28} sw={3} /></div>
                <h3>Got it. We'll be in touch.</h3>
                <p className="form-card-sub">Expect a response within one business day, often same-day.</p>
              </div>
            ) : (
              <>
                <h3>Tell us about your space.</h3>
                <p className="form-card-sub">Takes under a minute. We'll handle the rest.</p>
                <form onSubmit={onSubmit}>
                  <div className="form-row">
                    <div className="spritz-field">
                      <label className="spritz-label">Full Name</label>
                      <input className="spritz-input" placeholder="Marie Tremblay" value={form.fullName} onChange={update("fullName")} required />
                    </div>
                    <div className="spritz-field">
                      <label className="spritz-label">Company</label>
                      <input className="spritz-input" placeholder="Acme Properties" value={form.company} onChange={update("company")} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="spritz-field">
                      <label className="spritz-label">Email</label>
                      <input type="email" className="spritz-input" placeholder="marie@acme.com" value={form.email} onChange={update("email")} required />
                    </div>
                    <div className="spritz-field">
                      <label className="spritz-label">Phone</label>
                      <input type="tel" className="spritz-input" placeholder="(514) 555-0123" value={form.phone} onChange={update("phone")} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="spritz-field">
                      <label className="spritz-label">Property Type</label>
                      <select className="spritz-select" value={form.industry} onChange={update("industry")} required>
                        <option value="">Select…</option>
                        <option>Office</option>
                        <option>Medical Clinic</option>
                        <option>Retail Space</option>
                        <option>Managed Property</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="spritz-field">
                      <label className="spritz-label">Approx. Size</label>
                      <select className="spritz-select" value={form.size} onChange={update("size")} required>
                        <option value="">Select…</option>
                        <option>Under 3,000 sq ft</option>
                        <option>3,000 – 8,000 sq ft</option>
                        <option>8,000 – 15,000 sq ft</option>
                        <option>15,000+ sq ft</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="spritz-field full">
                      <label className="spritz-label">Anything we should know? (Optional)</label>
                      <textarea className="spritz-input spritz-textarea" rows={3} placeholder="Current cleaning situation, timing, specific concerns…" value={form.notes} onChange={update("notes")} />
                    </div>
                  </div>
                  <button type="submit" className="form-submit">
                    Request Walkthrough
                    <IconArrowR size={16} sw={2.5} />
                  </button>
                  <p className="form-note">By submitting, you consent to be contacted about your inquiry. We follow CASL — no marketing spam, ever.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

window.SpritzCta = { CtaForm };
