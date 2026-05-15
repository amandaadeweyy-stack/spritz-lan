// Sections.jsx — Mid-page sections: LogoStrip, WhyItMatters, Differentiators,
// Process, Industries, ServiceArea, FAQ.

const { useState } = React;
const {
  IconCheck, IconArrowR, IconPhone, IconUser, IconThumb, IconHome, IconClock,
  IconCal, IconUsers, IconChat, IconFile, IconActivity, IconBox, IconOffice,
  IconHealth, IconShop, IconBuilding, IconPin, IconPlus,
} = window.SpritzIcons;

/* ─── Logo strip (placeholder client logos) ─── */
function LogoStrip() {
  const items = ["DOWNTOWN MTL", "WESTMOUNT", "LAVAL", "WEST ISLAND", "SOUTH SHORE", "NDG"];
  return (
    <div className="logos">
      <div className="logos-inner">
        <div className="logos-label">Serving Property Managers &amp; Operators Across</div>
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
function WhyItMatters() {
  const items = [
    ["Creates a strong first impression", "Clients form opinions in the time it takes them to walk to your reception.", IconUser],
    ["Supports a professional environment", "Staff perform measurably better in well-maintained spaces.", IconThumb],
    ["Helps spaces stay presentable", "Recurring maintenance keeps the baseline high — permanently.", IconHome],
    ["Keeps operations running smoothly", "No distractions, no complaints, no last-minute scrambles before a visit.", IconClock],
  ];
  return (
    <section className="why" id="why-it-matters">
      <div className="spritz-container">
        <div className="spritz-section-head spritz-reveal">
          <div className="spritz-kicker-bar">The Business Case</div>
          <h2 className="spritz-section-h2">A clean space is a <span className="accent">business asset.</span></h2>
          <p className="spritz-section-lead">
            Your environment signals everything before anyone speaks. Clients, tenants, and patients decide within seconds — and that decision compounds every visit.
          </p>
        </div>
        <div className="why-layout">
          <div className="why-feature spritz-reveal">
            <div className="why-feature-icon"><IconActivity size={26} sw={1.8} /></div>
            <h3>Cleanliness compounds.</h3>
            <p>The difference between great and average cleaning isn't visible on day one — it's visible on day ninety. Recurring maintenance prevents drift before it starts.</p>
            <div className="why-feature-stat">
              <div className="why-feature-stat-num">90d</div>
              <div className="why-feature-stat-label">is when irregular cleaning becomes visibly obvious to clients and tenants</div>
            </div>
          </div>
          <div className="why-list spritz-stagger">
            {items.map(([title, body, Ico], i) => (
              <div key={title} className="why-item">
                <div className="why-item-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="why-item-body"><h4>{title}</h4><p>{body}</p></div>
                <div className="why-item-icon"><Ico size={18} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Differentiators ─── */
function Differentiators() {
  return (
    <section className="diff" id="what-we-do">
      <div className="spritz-container">
        <div className="spritz-section-head spritz-reveal">
          <div className="spritz-kicker-bar">Why Spritz</div>
          <h2 className="spritz-section-h2">A structured partner, <span className="accent">not just a crew.</span></h2>
          <p className="spritz-section-lead">
            Most cleaning companies give you a quote and disappear. Spritz is built differently — processes, documentation, and accountability from day one.
          </p>
        </div>
        <div className="diff-grid spritz-stagger">
          <div className="diff-card diff-hero">
            <div className="diff-hero-content">
              <div className="diff-hero-icon"><IconBox size={26} /></div>
              <h3>The Spritz <span className="accent">Standard.</span></h3>
              <p>Every contract starts with an on-site walkthrough — never a generic quote. We map your space, understand your operations, and design a cleaning scope that fits your reality, not a template.</p>
              <div className="diff-hero-features">
                {[
                  "Walkthrough before pricing",
                  "Documented scope of work",
                  "Signed service agreement",
                  "Quality checks every visit",
                  "Recurring contracts from $1,500 / mo",
                ].map((f) => (
                  <div key={f} className="diff-hero-feature">
                    <IconCheck size={14} sw={2.5} /> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DiffCard Ico={IconCal} title="Custom Cleaning Plans"
            body="Tailored schedules built around your operating hours, traffic patterns, and the specific surfaces and materials in your space." />
          <DiffCard Ico={IconUsers} title="Consistent Crews"
            body="The same professionals every visit. They learn your space, your standards, and the small details that matter — week after week." />
          <DiffCard Ico={IconChat} title="Clear Communication"
            body="Fast responses, proactive updates, a dedicated point of contact. You never wonder whether the visit happened or what was done." />
          <DiffCard Ico={IconFile} title="Documented Accountability"
            body="Quality check reports, visit logs, and photo proof. Every cleaning is logged. Every issue is traceable. Every visit is on the record." />
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
function Process() {
  const steps = [
    ["Request a Walkthrough", "Send a quick message or call. We schedule an on-site visit at your convenience — usually within 5 business days.", IconPin],
    ["Receive Custom Plan", "You get a tailored scope, a schedule that fits your operations, transparent pricing, and a clear signed service agreement.", IconFile],
    ["We Handle the Rest", "Consistent crews show up on schedule. Quality checks run every visit. You get reports, photos, and one less thing to manage.", IconCheck],
  ];
  return (
    <section className="process" id="process">
      <div className="spritz-container">
        <div className="spritz-section-head center spritz-reveal">
          <div className="spritz-kicker-bar center">How It Works</div>
          <h2 className="spritz-section-h2">Three steps to a <span className="accent">cleaner business.</span></h2>
          <p className="spritz-section-lead">Simple, transparent, and built around real walkthroughs — not phone quotes from a template.</p>
        </div>
        <div className="process-steps spritz-stagger">
          <div className="process-line" />
          {steps.map(([title, body, Ico], i) => (
            <div key={title} className="pstep">
              <div className="pstep-num">
                <div className="pstep-num-inner" />
                <span>STEP {String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="pstep-icon"><Ico size={20} /></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Industries ─── */
function Industries() {
  const cards = [
    [1, IconOffice, "Offices", "Workstations, boardrooms, kitchens, restrooms — scheduled around your operating hours."],
    [2, IconHealth, "Clinics", "Medical-grade protocols for waiting rooms, treatment areas, and high-contact surfaces."],
    [3, IconShop, "Retail", "Storefronts, fitting rooms, and showrooms kept presentation-ready — every single day."],
    [4, IconBuilding, "Managed Properties", "Lobbies, common areas, and multi-tenant buildings under one recurring contract."],
  ];
  return (
    <section className="industries" id="industries">
      <div className="spritz-container">
        <div className="spritz-section-head spritz-reveal">
          <div className="spritz-kicker-bar">Who We Serve</div>
          <h2 className="spritz-section-h2">Built for the spaces <span className="accent">Montréal works in.</span></h2>
          <p className="spritz-section-lead">Specialized cleaning protocols for the environments where presentation matters most.</p>
        </div>
        <div className="ind-grid spritz-stagger">
          {cards.map(([n, Ico, title, body]) => (
            <div key={title} className={`ind-card ind-card-${n}`}>
              <div className="ind-card-bg" />
              <div className="ind-card-content">
                <div className="ind-card-icon"><Ico size={22} /></div>
                <div className="ind-card-info">
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <a href="#cta" className="ind-card-arrow">Learn more <IconArrowR size={14} sw={2.5} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const items = [
    ["How long is the contract?", "Standard recurring contracts are 12 months with a 30-day notice clause. We don't lock people in — if it's not working, you can leave. We just ask for fair notice so we can plan around it."],
    ["What's the minimum monthly commitment?", "Our recurring contracts start at $1,500 per month. This ensures we can dedicate consistent crews and quality infrastructure to your space."],
    ["Are you insured and bonded?", "Yes. Full commercial liability insurance and bonding on every member of our team. Certificates available on request before any contract is signed."],
    ["Do you provide your own supplies and equipment?", "Yes — all standard supplies, equipment, and eco-conscious products are included. Specialty consumables can be added or sourced separately."],
    ["What if I'm not happy with a visit?", "Flag it within 24 hours and we send a crew back to fix it — no charge. Our quality check reports also catch most issues before you do."],
    ["How fast can you start?", "From first contact to first visit, we typically need 7–14 days. The walkthrough usually happens within 5 business days, contract turnaround is 2–3 days."],
  ];
  return (
    <section className="faq" id="faq">
      <div className="spritz-container">
        <div className="faq-layout">
          <div className="faq-side spritz-reveal">
            <h3>Common Questions</h3>
            <h2>The answers you need <span className="accent">before you call.</span></h2>
            <p>Most of our prospects ask the same six questions. Here are the answers — straightforward, no salesy hedging.</p>
            <div className="faq-side-card">
              <div className="faq-side-card-label">Still have questions?</div>
              <div className="faq-side-card-title">Talk to us directly</div>
              <a href="tel:5146778390">514-677-8390</a>
            </div>
          </div>
          <div className="faq-list spritz-reveal">
            {items.map(([q, a], i) => (
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
