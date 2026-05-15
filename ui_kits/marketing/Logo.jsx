// Logo.jsx — Spritz brand mark (inline SVG, reusable at any size).
// Also exports the brand lockup (logo + wordmark + sub-line) used in the nav and footer.

const SpritzMark = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ display: "block", flexShrink: 0 }}
  >
    <rect x="2" y="22" width="14" height="3" rx="1.5" fill="#FFB900" />
    <rect x="0" y="28" width="20" height="3" rx="1.5" fill="#FFB900" />
    <rect x="4" y="34" width="10" height="3" rx="1.5" fill="#FFB900" />
    <path d="M14 44 L15.5 47 L18.5 48.5 L15.5 50 L14 53 L12.5 50 L9.5 48.5 L12.5 47 Z" fill="#FFB900" />
    <path d="M52 18 Q56 14 50 12 Q42 11 36 16 Q28 22 32 30 Q34 34 40 36 Q46 38 44 42 Q42 46 36 46 Q30 46 26 42"
          stroke="#FFB900" strokeWidth="6" strokeLinecap="round" fill="none" />
    <path d="M48 14 Q52 10 46 8 Q38 7 32 12 Q24 18 28 26 Q30 30 36 32 Q42 34 40 38 Q38 42 32 42 Q26 42 22 38"
          stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" fill="none" />
    <path d="M52 8 L53.5 11 L56.5 12.5 L53.5 14 L52 17 L50.5 14 L47.5 12.5 L50.5 11 Z" fill="#FFB900" />
  </svg>
);

const SpritzBrand = ({ size = 40 }) => (
  <a href="#" className="spritz-brand" aria-label="Spritz Commercial Cleaning home">
    <SpritzMark size={size} />
    <div>
      <div className="spritz-brand-text">SPRITZ</div>
      <span className="spritz-brand-sub">COMMERCIAL CLEANING</span>
    </div>
  </a>
);

window.SpritzLogo = { SpritzMark, SpritzBrand };
