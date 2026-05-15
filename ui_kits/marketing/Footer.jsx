// Footer.jsx — Site footer: brand + contact, three nav columns, copyright + badges.

const { SpritzBrand } = window.SpritzLogo;
const { IconPhone, IconGlobe, IconMail, IconShield, IconCheck } = window.SpritzIcons;

function Footer() {
  return (
    <footer>
      <div className="spritz-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <SpritzBrand size={40} />
            <p>Professional, recurring commercial cleaning for Montréal businesses that demand excellence. Reliable service. Documented results. Every time.</p>
            <div className="footer-contact">
              <a href="tel:5146778390"><IconPhone size={14} /> 514-677-8390</a>
              <a href="https://spritzcleaners.ca"><IconGlobe size={14} /> spritzcleaners.ca</a>
              <a href="mailto:hello@spritzcleaners.ca"><IconMail size={14} /> hello@spritzcleaners.ca</a>
            </div>
          </div>

          <FooterCol title="Services" items={["Office Cleaning", "Clinic Cleaning", "Retail Cleaning", "Managed Properties"]} />
          <FooterCol title="Company" items={["Why It Matters", "Why Spritz", "Our Process", "FAQ"]} />
          <FooterCol title="Service Areas" items={["Downtown Montréal", "Westmount & NDG", "Laval", "South Shore"]} />
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">© 2025 Spritz Commercial Cleaning Inc. · Montréal, QC</div>
          <div className="footer-badges">
            <div className="footer-badge"><IconShield size={14} sw={2.5} /> Insured &amp; Bonded</div>
            <div className="footer-badge"><IconCheck size={14} sw={2.5} /> CASL Compliant</div>
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
