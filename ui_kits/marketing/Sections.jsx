// Sections.jsx — Mid-page sections: LogoStrip, WhyItMatters, Differentiators,
// Process, Industries, ServiceArea, FAQ.

const { useState } = React;
const {
  IconCheck, IconArrowR, IconPhone, IconUser, IconThumb, IconHome, IconClock,
  IconCal, IconUsers, IconChat, IconFile, IconActivity, IconBox, IconOffice,
  IconHealth, IconShop, IconBuilding, IconPin, IconPlus,
} = window.SpritzIcons;
const { useLang } = window.SpritzI18n;

/* ─── Logo strip (placeholder client logos) ─── */
function LogoStrip() {
  const { tr } = useLang();
  const items = ["DOWNTOWN MTL", "WESTMOUNT", "LAVAL", "WEST ISLAND", "SOUTH SHORE", "NDG"];
  return (
    <div className="logos">
      <div className="logos-inner">
        <div className="logos-label">{tr.logos.label}</div>
        <div className="logos-row">
          {items.map((t) => (
            <div key={t} className="logo-item"><span className="logo-item-mark" />{t}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Why It Matters ─── */
const WHY_ICONS = [IconUser, IconThumb, IconHome, IconClock];

function WhyItMatters() {
  const { tr } = useLang();
  const w = tr.why;
  return (
    <section className="why" id="why-it-matters">
      <div className="spritz-container">
        <div className="spritz-section-head spritz-reveal">
          <div className="spritz-kicker-bar">{w.kicker}</div>
          <h2 className="spritz-section-h2">{w.h2[0]}<span className="accent">{w.h2[1]}</span></h2>
          <p className="spritz-section-lead">{w.lead}</p>
        </div>
        <div className="why-layout">
          <div className="why-feature spritz-reveal">
            <div className="why-feature-icon"><IconActivity size={26} sw={1.8} /></div>
            <h3>{w.featureH3}</h3>
            <p>{w.featureBody}</p>
            <div className="why-feature-stat">
              <div className="why-feature-stat-num">{w.statNum}</div>
              <div className="why-feature-stat-label">{w.statLabel}</div>
            </div>
          </div>
          <div className="why-list spritz-stagger">
            {w.items.map(([title, body], i) => {
              const Ico = WHY_ICONS[i];
              return (
                <div key={title} className="why-item">
                  <div className="why-item-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="why-item-body"><h4>{title}</h4><p>{body}</p></div>
                  <div className="why-item-icon"><Ico size={18} /></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Differentiators ─── */
const DIFF_ICONS = [IconCal, IconUsers, IconChat, IconFile];

function Differentiators() {
  const { tr } = useLang();
  const d = tr.diff;
  return (
    <section className="diff" id="what-we-do">
      <div className="spritz-container">
        <div className="spritz-section-head spritz-reveal">
          <div className="spritz-kicker-bar">{d.kicker}</div>
          <h2 className="spritz-section-h2">{d.h2[0]}<span className="accent">{d.h2[1]}</span></h2>
          <p className="spritz-section-lead">{d.lead}</p>
        </div>
        <div className="diff-grid spritz-stagger">
          <div className="diff-card diff-hero">
            <div className="diff-hero-content">
              <div className="diff-hero-icon"><IconBox size={26} /></div>
              <h3>{d.heroH3[0]}<span className="accent">{d.heroH3[1]}</span></h3>
              <p>{d.heroBody}</p>
              <div className="diff-hero-features">
                {d.heroFeatures.map((f) => (
                  <div key={f} className="diff-hero-feature">
                    <IconCheck size={14} sw={2.5} /> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {d.cards.map(([title, body], i) => {
            const Ico = DIFF_ICONS[i];
            return <DiffCard key={title} Ico={Ico} title={title} body={body} />;
          })}
        </div>
      </div>
    </section>
  );
}

function DiffCard({ Ico, title, body }) {
  return (
    <div className="diff-card">
      <div className="diff-card-icon"><Ico size={22} sw={1.8} /></div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

/* ─── Process (3 steps) ─── */
const PROCESS_ICONS = [IconPin, IconFile, IconCheck];

function Process() {
  const { tr } = useLang();
  const p = tr.process;
  return (
    <section className="process" id="process">
      <div className="spritz-container">
        <div className="spritz-section-head center spritz-reveal">
          <div className="spritz-kicker-bar center">{p.kicker}</div>
          <h2 className="spritz-section-h2">{p.h2[0]}<span className="accent">{p.h2[1]}</span></h2>
          <p className="spritz-section-lead">{p.lead}</p>
        </div>
        <div className="process-steps spritz-stagger">
          <div className="process-line" />
          {p.steps.map(([title, body], i) => {
            const Ico = PROCESS_ICONS[i];
            return (
              <div key={title} className="pstep">
                <div className="pstep-num">
                  <div className="pstep-num-inner" />
                  <span>{p.stepLabel} {String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="pstep-icon"><Ico size={20} /></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Industries ─── */
const IND_ICONS = [IconOffice, IconHealth, IconShop, IconBuilding];

function Industries() {
  const { tr } = useLang();
  const ind = tr.industries;
  return (
    <section className="industries" id="industries">
      <div className="spritz-container">
        <div className="spritz-section-head spritz-reveal">
          <div className="spritz-kicker-bar">{ind.kicker}</div>
          <h2 className="spritz-section-h2">{ind.h2[0]}<span className="accent">{ind.h2[1]}</span></h2>
          <p className="spritz-section-lead">{ind.lead}</p>
        </div>
        <div className="ind-grid spritz-stagger">
          {ind.cards.map(([title, body], i) => {
            const Ico = IND_ICONS[i];
            return (
              <div key={title} className={`ind-card ind-card-${i + 1}`}>
                <div className="ind-card-bg" />
                <div className="ind-card-content">
                  <div className="ind-card-icon"><Ico size={22} /></div>
                  <div className="ind-card-info">
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <a href="#cta" className="ind-card-arrow">{ind.learnMore} <IconArrowR size={14} sw={2.5} /></a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const { tr } = useLang();
  const f = tr.faq;
  return (
    <section className="faq" id="faq">
      <div className="spritz-container">
        <div className="faq-layout">
          <div className="faq-side spritz-reveal">
            <h3>{f.kicker}</h3>
            <h2>{f.h2[0]}<span className="accent">{f.h2[1]}</span></h2>
            <p>{f.lead}</p>
            <div className="faq-side-card">
              <div className="faq-side-card-label">{f.stillHave}</div>
              <div className="faq-side-card-title">{f.talkTitle}</div>
              <a href="tel:5146778390">514-677-8390</a>
            </div>
          </div>
          <div className="faq-list spritz-reveal">
            {f.items.map(([q, a], i) => (
              <div key={q} className={`faq-item ${openIdx === i ? "open" : ""}`} onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                <div className="faq-q">
                  {q}
                  <div className="faq-icon"><IconPlus size={14} /></div>
                </div>
                <div className="faq-a"><p>{a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.SpritzSections = { LogoStrip, WhyItMatters, Differentiators, Process, Industries, FAQ };
