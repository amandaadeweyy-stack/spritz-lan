// Footer.jsx — Site footer: brand + contact, three nav columns, copyright + badges.

const { SpritzBrand } = window.SpritzLogo;
const { IconPhone, IconGlobe, IconMail, IconShield, IconCheck } = window.SpritzIcons;
const { useLang } = window.SpritzI18n;

function Footer() {
  const { tr } = useLang();
  const f = tr.footer;
  return (
    <footer>
      <div className="spritz-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <SpritzBrand size={40} />
            <p>{f.brand}</p>
            <div className="footer-contact">
              <a href="tel:5146778390"><IconPhone size={14} /> 514-677-8390</a>
              <a href="https://spritzcleaners.ca"><IconGlobe size={14} /> spritzcleaners.ca</a>
              <a href="mailto:hello@spritzcleaners.ca"><IconMail size={14} /> hello@spritzcleaners.ca</a>
            </div>
          </div>

          {f.cols.map(({ title, items }) => (
            <FooterCol key={title} title={title} items={items} />
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">{f.copy}</div>
          <div className="footer-badges">
            <div className="footer-badge"><IconShield size={14} sw={2.5} /> {f.badges[0]}</div>
            <div className="footer-badge"><IconCheck size={14} sw={2.5} /> {f.badges[1]}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div className="footer-col">
      <h5>{title}</h5>
      <ul>
        {items.map((i) => <li key={i}><a href="#">{i}</a></li>)}
      </ul>
    </div>
  );
}

window.SpritzFooter = { Footer };
