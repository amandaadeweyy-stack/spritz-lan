// CtaForm.jsx — Final CTA section with two-column layout: copy/bullets/phone on left,
// walkthrough request form on right.

const { useState } = React;
const { IconCheck, IconPhone, IconArrowR } = window.SpritzIcons;
const { useLang } = window.SpritzI18n;

function CtaForm() {
  const [form, setForm] = useState({ fullName: "", company: "", email: "", phone: "", industry: "", size: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const onSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  const { tr } = useLang();
  const c = tr.cta;

  return (
    <section className="cta" id="cta">
      <div className="spritz-container">
        <div className="cta-layout">
          <div className="cta-content spritz-reveal">
            <div className="spritz-kicker-bar">{c.kicker}</div>
            <h2 className="cta-h2">{c.h2[0]}<span className="accent">{c.h2[1]}</span></h2>
            <p>{c.body}</p>
            <div className="cta-bullets">
              {c.bullets.map((b) => (
                <div key={b} className="cta-bullet">
                  <div className="cta-bullet-check"><IconCheck size={11} sw={3} /></div>
                  <div>{b}</div>
                </div>
              ))}
            </div>
            <div className="cta-direct">
              <div className="cta-direct-label">{c.preferCall}</div>
              <a href="tel:5146778390" className="cta-direct-phone">
                <IconPhone size={22} />
                514-677-8390
              </a>
            </div>
          </div>

          <div className="form-card spritz-reveal">
            <div className="form-card-badge">{c.badge}</div>
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon"><IconCheck size={28} sw={3} /></div>
                <h3>{c.successH3}</h3>
                <p className="form-card-sub">{c.successSub}</p>
              </div>
            ) : (
              <>
                <h3>{c.formH3}</h3>
                <p className="form-card-sub">{c.formSub}</p>
                <form onSubmit={onSubmit}>
                  <div className="form-row">
                    <div className="spritz-field">
                      <label className="spritz-label">{c.labels.fullName}</label>
                      <input className="spritz-input" placeholder={c.placeholders.fullName} value={form.fullName} onChange={update("fullName")} required />
                    </div>
                    <div className="spritz-field">
                      <label className="spritz-label">{c.labels.company}</label>
                      <input className="spritz-input" placeholder={c.placeholders.company} value={form.company} onChange={update("company")} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="spritz-field">
                      <label className="spritz-label">{c.labels.email}</label>
                      <input type="email" className="spritz-input" placeholder={c.placeholders.email} value={form.email} onChange={update("email")} required />
                    </div>
                    <div className="spritz-field">
                      <label className="spritz-label">{c.labels.phone}</label>
                      <input type="tel" className="spritz-input" placeholder={c.placeholders.phone} value={form.phone} onChange={update("phone")} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="spritz-field">
                      <label className="spritz-label">{c.labels.propertyType}</label>
                      <select className="spritz-select" value={form.industry} onChange={update("industry")} required>
                        <option value="">{c.selectPlaceholder}</option>
                        {c.propertyOptions.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="spritz-field">
                      <label className="spritz-label">{c.labels.size}</label>
                      <select className="spritz-select" value={form.size} onChange={update("size")} required>
                        <option value="">{c.selectPlaceholder}</option>
                        {c.sizeOptions.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="spritz-field full">
                      <label className="spritz-label">{c.labels.notes}</label>
                      <textarea className="spritz-input spritz-textarea" rows={3} placeholder={c.placeholders.notes} value={form.notes} onChange={update("notes")} />
                    </div>
                  </div>
                  <button type="submit" className="form-submit">
                    {c.submit}
                    <IconArrowR size={16} sw={2.5} />
                  </button>
                  <p className="form-note">{c.note}</p>
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
