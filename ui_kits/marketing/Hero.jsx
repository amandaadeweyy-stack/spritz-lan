// Hero.jsx — Two-column hero with eyebrow, headline, sub, CTAs, trust strip,
// and a floating quote-card visual.

const { IconArrowR, IconPhone, IconCheck, IconClock } = window.SpritzIcons;
const { SpritzMark } = window.SpritzLogo;

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow" />
      <div className="hero-inner">
        <div className="hero-content">
          <div className="spritz-eyebrow spritz-reveal">
            <div className="spritz-eyebrow-dot" />
            Now Serving Greater Montréal
          </div>
          <h1 className="hero-h1 spritz-reveal">
            Commercial<br />
            cleaning,<br />
            <span className="accent">elevated.</span>
          </h1>
          <p className="hero-sub spritz-reveal">
            Reliable recurring cleaning for offices, clinics, retail spaces, and managed properties —
            built around your schedule, documented every visit, delivered without excuses.
          </p>
          <div className="hero-cta-row spritz-reveal">
            <a href="#cta" className="spritz-btn-primary">
              Request a Walkthrough
              <IconArrowR size={15} sw={2.5} />
            </a>
            <a href="tel:5146778390" className="spritz-btn-secondary">
              <IconPhone size={14} />
              Call 514-677-8390
            </a>
          </div>
          <div className="spritz-trust spritz-reveal">
            <div className="spritz-trust-item"><IconCheck size={14} sw={2.5} /> Fully insured &amp; bonded</div>
            <div className="spritz-trust-item"><IconCheck size={14} sw={2.5} /> Bilingual EN / FR service</div>
            <div className="spritz-trust-item"><IconCheck size={14} sw={2.5} /> Walkthrough before pricing</div>
          </div>
        </div>

        <div className="hero-visual spritz-reveal">
          <div className="qc-float qc-float-1">
            <div className="qc-float-icon"><IconCheck size={16} /></div>
            <div>
              <div className="qc-float-text">Visit complete</div>
              <div className="qc-float-sub">Photos uploaded · 6:42 PM</div>
            </div>
          </div>
          <QuoteCard />
          <div className="qc-float qc-float-2">
            <div className="qc-float-icon"><IconClock size={16} /></div>
            <div>
              <div className="qc-float-text">On schedule</div>
              <div className="qc-float-sub">Next visit Friday, 6 AM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteCard() {
  return (
    <div className="quote-card">
      <div className="qc-header">
        <div className="qc-logo-row">
          <SpritzMark size={28} />
          <div>
            <div className="qc-title">SAMPLE WALKTHROUGH</div>
            <div className="qc-title-sub">PREPARED FOR REVIEW</div>
          </div>
        </div>
        <div className="qc-status">
          <div className="qc-status-dot" />
          Active
        </div>
      </div>

      <div className="qc-label">PROPERTY</div>
      <div className="qc-property">Westmount Office Tower</div>
      <div className="qc-address">14,200 sq ft · 4 floors · Class A office</div>

      <div className="qc-meta-grid">
        <div className="qc-meta-item">
          <div className="qc-meta-label">FREQUENCY</div>
          <div className="qc-meta-value">3× <span className="muted-inline">/ week</span></div>
        </div>
        <div className="qc-meta-item">
          <div className="qc-meta-label">CREW SIZE</div>
          <div className="qc-meta-value">2 <span className="muted-inline">specialists</span></div>
        </div>
      </div>

      <div className="qc-services">
        {[
          ["General cleaning", "3× weekly"],
          ["Restrooms & kitchens", "Every visit"],
          ["Floor maintenance", "Weekly"],
          ["Glass & windows", "Monthly"],
        ].map(([label, freq]) => (
          <div key={label} className="qc-service-row">
            <div className="qc-service-name"><IconCheck size={14} sw={2.5} /> {label}</div>
            <div className="qc-service-freq">{freq}</div>
          </div>
        ))}
      </div>

      <div className="qc-total">
        <div><div className="qc-total-label">RECURRING INVESTMENT</div></div>
        <div className="qc-total-right">
          <div className="qc-total-value">$3,840</div>
          <div className="qc-total-period">per month</div>
        </div>
      </div>
    </div>
  );
}

window.SpritzHero = { Hero, QuoteCard };
