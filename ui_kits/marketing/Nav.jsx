// Nav.jsx — Sticky top navigation with announcement bar, brand mark, links, phone, CTA, and EN/FR toggle.

const { SpritzBrand } = window.SpritzLogo;
const { IconPhone, IconArrowR } = window.SpritzIcons;
const { useLang } = window.SpritzI18n;

function AnnouncementBar() {
  const { tr } = useLang();
  return (
    <div className="spritz-announce">
      <span>{tr.announce.booking}</span> · {tr.announce.bilingual}{' '}
      <a href="#cta">{tr.announce.cta}</a>
    </div>
  );
}

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="spritz-lang-toggle">
      <button
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
        aria-label="Switch to English"
      >EN</button>
      <span className="spritz-lang-divider" />
      <button
        className={lang === "fr" ? "active" : ""}
        onClick={() => setLang("fr")}
        aria-label="Passer en français"
      >FR</button>
    </div>
  );
}

function Nav() {
  const { tr } = useLang();
  return (
    <nav className="spritz-nav">
      <div className="spritz-nav-inner">
        <SpritzBrand size={40} />
        <div className="spritz-nav-links">
          {tr.nav.links.map(({ label, href }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <div className="spritz-nav-actions">
          <LangToggle />
          <a href="tel:5146778390" className="spritz-nav-phone">
            <IconPhone size={16} />
            514-677-8390
          </a>
          <a href="#cta" className="spritz-btn-pill">
            {tr.nav.cta}
            <IconArrowR size={14} sw={2.5} />
          </a>
        </div>
      </div>
    </nav>
  );
}

window.SpritzNav = { AnnouncementBar, Nav };
