// Hero.jsx — Two-column hero with eyebrow, headline, sub, CTAs, trust strip,
// and a floating quote-card visual.

const { IconArrowR, IconPhone, IconCheck, IconClock } = window.SpritzIcons;
const { SpritzMark } = window.SpritzLogo;
const { useLang } = window.SpritzI18n;

function Hero() {
  const { tr } = useLang();
  const h = tr.hero;
  return (
    <section className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow" />
      <div className="hero-inner">
        <div className="hero-content">
          <div className="spritz-eyebrow spritz-reveal">
            <div className="spritz-eyebrow-dot" />
            {h.eyebrow}
          </div>
          <h1 className="hero-h1 spritz-reveal">
            {h.h1[0]}<br />
            {h.h1[1]}<br />
            <span className="accent">{h.h1[2]}</span>
          </h1>
          <p className="hero-sub spritz-reveal">{h.sub}</p>
          <div className="hero-cta-row spritz-reveal">
            <a href="#cta" className="spritz-btn-primary">
              {h.ctaPrimary}
              <IconArrowR size={15} sw={2.5} />
            </a>
            <a href="tel:5146778390" className="spritz-btn-secondary">
              <IconPhone size={14} />
              {h.ctaSecondary}
            </a>
          </div>
          <div className="spritz-trust spritz-reveal">
            {h.trust.map((item) => (
              <div key={item} className="spritz-trust-item"><IconCheck size={14} sw={2.5} /> {item}</div>
            ))}
          </div>
        </div>

        <div className="hero-visual spritz-reveal">
          <div className="qc-float qc-float-1">
            <div className="qc-float-icon"><IconCheck size={16} /></div>
            <div>
              <div className="qc-float-text">{h.floatVisit}</div>
              <div className="qc-float-sub">{h.floatVisitSub}</div>
            </div>
          </div>
          <QuoteCard />
          <div className="qc-float qc-float-2">
            <div className="qc-float-icon"><IconClock size={16} /></div>
            <div>
              <div className="qc-float-text">{h.floatSchedule}</div>
              <div className="qc-float-sub">{h.floatScheduleSub}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteCard() {
  const { tr } = useLang();
  const qc = tr.hero.qc;
  return (
    <div className="quote-card">
      <div className="qc-header">
        <div className="qc-logo-row">
          <SpritzMark size={28} />
          <div>
            <div className="qc-title">{qc.title}</div>
            <div className="qc-title-sub">{qc.titleSub}</div>
          </div>
        </div>
        <div className="qc-status">
          <div className="qc-status-dot" />
          {qc.status}
        </div>
      </div>

      <div className="qc-label">{qc.propertyLabel}</div>
      <div className="qc-property">Westmount Office Tower</div>
      <div className="qc-address">14,200 sq ft · 4 floors · Class A office</div>

      <div className="qc-meta-grid">
        <div className="qc-meta-item">
          <div className="qc-meta-label">{qc.freqLabel}</div>
          <div className="qc-meta-value">3× <span className="muted-inline">{qc.perWeek}</span></div>
        </div>
        <div className="qc-meta-item">
          <div className="qc-meta-label">{qc.crewLabel}</div>
          <div className="qc-meta-value">2 <span className="muted-inline">{qc.specialists}</span></div>
        </div>
      </div>

      <div className="qc-services">
        {qc.services.map(([label, freq]) => (
          <div key={label} className="qc-service-row">
            <div className="qc-service-name"><IconCheck size={14} sw={2.5} /> {label}</div>
            <div className="qc-service-freq">{freq}</div>
          </div>
        ))}
      </div>

      <div className="qc-total">
        <div><div className="qc-total-label">{qc.investLabel}</div></div>
        <div className="qc-total-right">
          <div className="qc-total-value">$3,840</div>
          <div className="qc-total-period">{qc.perMonth}</div>
        </div>
      </div>
    </div>
  );
}

window.SpritzHero = { Hero, QuoteCard };
