// Nav.jsx — Sticky top navigation with announcement bar, brand mark, links, phone, and CTA.

const { SpritzBrand } = window.SpritzLogo;
const { IconPhone, IconArrowR } = window.SpritzIcons;

function AnnouncementBar() {
  return (
    <div className="spritz-announce">
      <span>Now booking Q3 2025 walkthroughs</span> · Bilingual service across Greater Montréal{' '}
      <a href="#cta">Reserve a slot →</a>
    </div>
  );
}

function Nav({ links = ["Why It Matters", "What We Do", "Process", "Industries", "FAQ"] }) {
  return (
    <nav className="spritz-nav">
      <div className="spritz-nav-inner">
        <SpritzBrand size={40} />
        <div className="spritz-nav-links">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/[^a-z]/g, "-")}`}>{l}</a>
          ))}
        </div>
        <div className="spritz-nav-actions">
          <a href="tel:5146778390" className="spritz-nav-phone">
            <IconPhone size={16} />
            514-677-8390
          </a>
          <a href="#cta" className="spritz-btn-pill">
            Get a Walkthrough
            <IconArrowR size={14} sw={2.5} />
          </a>
        </div>
      </div>
    </nav>
  );
}

window.SpritzNav = { AnnouncementBar, Nav };
