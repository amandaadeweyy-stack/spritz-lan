// i18n.jsx — Language context and EN/FR translations for Spritz marketing site.

const { createContext, useContext, useState } = React;

const LangContext = createContext("en");

function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

function useLang() {
  const { lang, setLang } = useContext(LangContext);
  const tr = translations[lang];
  return { lang, setLang, tr };
}

const translations = {
  en: {
    announce: {
      booking: "Now booking Q3 2025 walkthroughs",
      bilingual: "Bilingual service across Greater Montréal",
      cta: "Reserve a slot →",
    },
    nav: {
      links: [
        { label: "Why It Matters", href: "#why-it-matters" },
        { label: "What We Do",    href: "#what-we-do" },
        { label: "Process",       href: "#process" },
        { label: "Industries",    href: "#industries" },
        { label: "FAQ",           href: "#faq" },
      ],
      cta: "Get a Walkthrough",
    },
    hero: {
      eyebrow: "Now Serving Greater Montréal",
      h1: ["Commercial", "cleaning,", "elevated."],
      sub: "Reliable recurring cleaning for offices, clinics, retail spaces, and managed properties — built around your schedule, documented every visit, delivered without excuses.",
      ctaPrimary: "Request a Walkthrough",
      ctaSecondary: "Call 514-677-8390",
      trust: ["Fully insured & bonded", "Bilingual EN / FR service", "Walkthrough before pricing"],
      floatVisit: "Visit complete",
      floatVisitSub: "Photos uploaded · 6:42 PM",
      floatSchedule: "On schedule",
      floatScheduleSub: "Next visit Friday, 6 AM",
      qc: {
        title: "SAMPLE WALKTHROUGH",
        titleSub: "PREPARED FOR REVIEW",
        status: "Active",
        propertyLabel: "PROPERTY",
        freqLabel: "FREQUENCY",
        crewLabel: "CREW SIZE",
        services: [
          ["General cleaning",    "3× weekly"],
          ["Restrooms & kitchens","Every visit"],
          ["Floor maintenance",   "Weekly"],
          ["Glass & windows",     "Monthly"],
        ],
        investLabel: "RECURRING INVESTMENT",
        perMonth: "per month",
        perWeek: "/ week",
        specialists: "specialists",
      },
    },
    logos: {
      label: "Serving Property Managers & Operators Across",
    },
    why: {
      kicker: "The Business Case",
      h2: ["A clean space is a ", "business asset."],
      lead: "Your environment signals everything before anyone speaks. Clients, tenants, and patients decide within seconds — and that decision compounds every visit.",
      featureH3: "Cleanliness compounds.",
      featureBody: "The difference between great and average cleaning isn't visible on day one — it's visible on day ninety. Recurring maintenance prevents drift before it starts.",
      statNum: "90d",
      statLabel: "is when irregular cleaning becomes visibly obvious to clients and tenants",
      items: [
        ["Creates a strong first impression",    "Clients form opinions in the time it takes them to walk to your reception."],
        ["Supports a professional environment",  "Staff perform measurably better in well-maintained spaces."],
        ["Helps spaces stay presentable",        "Recurring maintenance keeps the baseline high — permanently."],
        ["Keeps operations running smoothly",    "No distractions, no complaints, no last-minute scrambles before a visit."],
      ],
    },
    diff: {
      kicker: "Why Spritz",
      h2: ["A structured partner, ", "not just a crew."],
      lead: "Most cleaning companies give you a quote and disappear. Spritz is built differently — processes, documentation, and accountability from day one.",
      heroH3: ["The Spritz ", "Standard."],
      heroBody: "Every contract starts with an on-site walkthrough — never a generic quote. We map your space, understand your operations, and design a cleaning scope that fits your reality, not a template.",
      heroFeatures: [
        "Walkthrough before pricing",
        "Documented scope of work",
        "Signed service agreement",
        "Quality checks every visit",
        "Recurring contracts from $1,500 / mo",
      ],
      cards: [
        ["Custom Cleaning Plans",     "Tailored schedules built around your operating hours, traffic patterns, and the specific surfaces and materials in your space."],
        ["Consistent Crews",          "The same professionals every visit. They learn your space, your standards, and the small details that matter — week after week."],
        ["Clear Communication",       "Fast responses, proactive updates, a dedicated point of contact. You never wonder whether the visit happened or what was done."],
        ["Documented Accountability", "Quality check reports, visit logs, and photo proof. Every cleaning is logged. Every issue is traceable. Every visit is on the record."],
      ],
    },
    process: {
      kicker: "How It Works",
      h2: ["Three steps to a ", "cleaner business."],
      lead: "Simple, transparent, and built around real walkthroughs — not phone quotes from a template.",
      stepLabel: "STEP",
      steps: [
        ["Request a Walkthrough", "Send a quick message or call. We schedule an on-site visit at your convenience — usually within 5 business days."],
        ["Receive Custom Plan",   "You get a tailored scope, a schedule that fits your operations, transparent pricing, and a clear signed service agreement."],
        ["We Handle the Rest",    "Consistent crews show up on schedule. Quality checks run every visit. You get reports, photos, and one less thing to manage."],
      ],
    },
    industries: {
      kicker: "Who We Serve",
      h2: ["Built for the spaces ", "Montréal works in."],
      lead: "Specialized cleaning protocols for the environments where presentation matters most.",
      learnMore: "Learn more",
      cards: [
        ["Offices",            "Workstations, boardrooms, kitchens, restrooms — scheduled around your operating hours."],
        ["Clinics",            "Medical-grade protocols for waiting rooms, treatment areas, and high-contact surfaces."],
        ["Retail",             "Storefronts, fitting rooms, and showrooms kept presentation-ready — every single day."],
        ["Managed Properties", "Lobbies, common areas, and multi-tenant buildings under one recurring contract."],
      ],
    },
    faq: {
      kicker: "Common Questions",
      h2: ["The answers you need ", "before you call."],
      lead: "Most of our prospects ask the same six questions. Here are the answers — straightforward, no salesy hedging.",
      stillHave: "Still have questions?",
      talkTitle: "Talk to us directly",
      items: [
        ["How long is the contract?",                       "Standard recurring contracts are 12 months with a 30-day notice clause. We don't lock people in — if it's not working, you can leave. We just ask for fair notice so we can plan around it."],
        ["What's the minimum monthly commitment?",          "Our recurring contracts start at $1,500 per month. This ensures we can dedicate consistent crews and quality infrastructure to your space."],
        ["Are you insured and bonded?",                     "Yes. Full commercial liability insurance and bonding on every member of our team. Certificates available on request before any contract is signed."],
        ["Do you provide your own supplies and equipment?", "Yes — all standard supplies, equipment, and eco-conscious products are included. Specialty consumables can be added or sourced separately."],
        ["What if I'm not happy with a visit?",             "Flag it within 24 hours and we send a crew back to fix it — no charge. Our quality check reports also catch most issues before you do."],
        ["How fast can you start?",                         "From first contact to first visit, we typically need 7–14 days. The walkthrough usually happens within 5 business days, contract turnaround is 2–3 days."],
      ],
    },
    cta: {
      kicker: "Get Started",
      h2: ["Request your ", "walkthrough."],
      body: "Fill out the form and we'll be in touch within one business day to schedule an on-site visit. No pricing pressure, no obligation — just a real conversation about your space.",
      bullets: [
        "Response within one business day, often same-day",
        "Walkthrough scheduled at your convenience",
        "Custom scope and transparent pricing within 48 hours",
        "Bilingual service: répondez en français si vous préférez",
      ],
      preferCall: "Prefer to call?",
      badge: "Free Walkthrough",
      successH3: "Got it. We'll be in touch.",
      successSub: "Expect a response within one business day, often same-day.",
      formH3: "Tell us about your space.",
      formSub: "Takes under a minute. We'll handle the rest.",
      labels: {
        fullName: "Full Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        propertyType: "Property Type",
        size: "Approx. Size",
        notes: "Anything we should know? (Optional)",
      },
      placeholders: {
        fullName: "Marie Tremblay",
        company: "Acme Properties",
        email: "marie@acme.com",
        phone: "(514) 555-0123",
        notes: "Current cleaning situation, timing, specific concerns…",
      },
      propertyOptions: ["Office", "Medical Clinic", "Retail Space", "Managed Property", "Other"],
      sizeOptions: ["Under 3,000 sq ft", "3,000 – 8,000 sq ft", "8,000 – 15,000 sq ft", "15,000+ sq ft"],
      selectPlaceholder: "Select…",
      submit: "Request Walkthrough",
      note: "By submitting, you consent to be contacted about your inquiry. We follow CASL — no marketing spam, ever.",
    },
    footer: {
      brand: "Professional, recurring commercial cleaning for Montréal businesses that demand excellence. Reliable service. Documented results. Every time.",
      cols: [
        { title: "Services",      items: ["Office Cleaning", "Clinic Cleaning", "Retail Cleaning", "Managed Properties"] },
        { title: "Company",       items: ["Why It Matters", "Why Spritz", "Our Process", "FAQ"] },
        { title: "Service Areas", items: ["Downtown Montréal", "Westmount & NDG", "Laval", "South Shore"] },
      ],
      copy: "© 2025 Spritz Commercial Cleaning Inc. · Montréal, QC",
      badges: ["Insured & Bonded", "CASL Compliant"],
    },
  },

  fr: {
    announce: {
      booking: "Réservation pour les visites Q3 2025",
      bilingual: "Service bilingue dans le Grand Montréal",
      cta: "Réserver une plage →",
    },
    nav: {
      links: [
        { label: "Pourquoi ça compte", href: "#why-it-matters" },
        { label: "Ce qu'on fait",      href: "#what-we-do" },
        { label: "Processus",          href: "#process" },
        { label: "Secteurs",           href: "#industries" },
        { label: "FAQ",                href: "#faq" },
      ],
      cta: "Demander une visite",
    },
    hero: {
      eyebrow: "Maintenant disponible dans le Grand Montréal",
      h1: ["Entretien", "commercial,", "élevé."],
      sub: "Nettoyage récurrent et fiable pour bureaux, cliniques, commerces et immeubles gérés — adapté à vos horaires, documenté à chaque visite, livré sans compromis.",
      ctaPrimary: "Demander une visite",
      ctaSecondary: "Appeler le 514-677-8390",
      trust: ["Assurés et cautionnés", "Service bilingue EN / FR", "Visite avant toute tarification"],
      floatVisit: "Visite terminée",
      floatVisitSub: "Photos téléversées · 18h42",
      floatSchedule: "Dans les délais",
      floatScheduleSub: "Prochaine visite vendredi, 6h",
      qc: {
        title: "VISITE EXEMPLE",
        titleSub: "PRÉPARÉE POUR RÉVISION",
        status: "Actif",
        propertyLabel: "PROPRIÉTÉ",
        freqLabel: "FRÉQUENCE",
        crewLabel: "TAILLE D'ÉQUIPE",
        services: [
          ["Nettoyage général",      "3× par semaine"],
          ["Sanitaires et cuisines", "Chaque visite"],
          ["Entretien des planchers","Hebdomadaire"],
          ["Vitres et fenêtres",     "Mensuel"],
        ],
        investLabel: "INVESTISSEMENT RÉCURRENT",
        perMonth: "par mois",
        perWeek: "/ semaine",
        specialists: "spécialistes",
      },
    },
    logos: {
      label: "Au service des gestionnaires immobiliers dans",
    },
    why: {
      kicker: "L'argumentaire d'affaires",
      h2: ["Un espace propre est un ", "atout d'affaires."],
      lead: "Votre environnement envoie un message avant même qu'on parle. Clients, locataires et patients décident en quelques secondes — et cette impression se renforce à chaque visite.",
      featureH3: "La propreté s'accumule.",
      featureBody: "La différence entre un excellent et un nettoyage ordinaire n'est pas visible au premier jour — elle l'est au quatre-vingt-dixième. L'entretien récurrent prévient le déclin avant qu'il ne commence.",
      statNum: "90j",
      statLabel: "c'est quand un nettoyage irrégulier devient visiblement évident pour les clients et les locataires",
      items: [
        ["Crée une forte première impression",      "Les clients se forment une opinion le temps de marcher jusqu'à votre réception."],
        ["Soutient un environnement professionnel", "Le personnel performe mesurément mieux dans des espaces bien entretenus."],
        ["Maintient les espaces présentables",      "L'entretien récurrent maintient le niveau élevé — en permanence."],
        ["Assure le bon déroulement des opérations","Aucune distraction, aucune plainte, aucune panique de dernière minute avant une visite."],
      ],
    },
    diff: {
      kicker: "Pourquoi Spritz",
      h2: ["Un partenaire structuré, ", "pas seulement une équipe."],
      lead: "La plupart des entreprises de nettoyage vous donnent un devis et disparaissent. Spritz est différent — processus, documentation et responsabilité dès le premier jour.",
      heroH3: ["La norme ", "Spritz."],
      heroBody: "Chaque contrat commence par une visite sur place — jamais un devis générique. Nous cartographions votre espace, comprenons vos opérations et concevons un périmètre de nettoyage adapté à votre réalité, pas un modèle.",
      heroFeatures: [
        "Visite avant toute tarification",
        "Périmètre de travail documenté",
        "Entente de service signée",
        "Contrôles qualité à chaque visite",
        "Contrats récurrents à partir de 1 500 $ / mois",
      ],
      cards: [
        ["Plans de nettoyage sur mesure", "Horaires adaptés à vos heures d'opération, à vos flux de circulation et aux surfaces et matériaux spécifiques de votre espace."],
        ["Équipes stables",              "Les mêmes professionnels à chaque visite. Ils apprennent votre espace, vos standards et les petits détails qui comptent — semaine après semaine."],
        ["Communication claire",         "Réponses rapides, mises à jour proactives, un interlocuteur dédié. Vous ne vous demandez jamais si la visite a eu lieu ou ce qui a été fait."],
        ["Responsabilité documentée",    "Rapports de contrôle qualité, journaux de visite et photos. Chaque nettoyage est consigné. Chaque problème est traçable. Chaque visite est enregistrée."],
      ],
    },
    process: {
      kicker: "Comment ça marche",
      h2: ["Trois étapes vers un ", "espace plus propre."],
      lead: "Simple, transparent et basé sur de vraies visites — pas des devis téléphoniques sur un modèle.",
      stepLabel: "ÉTAPE",
      steps: [
        ["Demander une visite",           "Envoyez un court message ou appelez. Nous planifions une visite sur place à votre convenance — généralement dans les 5 jours ouvrables."],
        ["Recevoir un plan personnalisé", "Vous obtenez un périmètre sur mesure, un horaire adapté à vos opérations, une tarification transparente et une entente de service signée."],
        ["Nous gérons le reste",          "Des équipes constantes se présentent à l'horaire. Des contrôles qualité à chaque visite. Vous recevez des rapports, des photos et une chose de moins à gérer."],
      ],
    },
    industries: {
      kicker: "Qui nous servons",
      h2: ["Conçu pour les espaces ", "où Montréal travaille."],
      lead: "Protocoles de nettoyage spécialisés pour les environnements où la présentation est primordiale.",
      learnMore: "En savoir plus",
      cards: [
        ["Bureaux",            "Postes de travail, salles de conférence, cuisines, sanitaires — planifié selon vos heures d'opération."],
        ["Cliniques",          "Protocoles de grade médical pour les salles d'attente, les zones de traitement et les surfaces à contact élevé."],
        ["Commerce de détail", "Devantures, cabines d'essayage et salles d'exposition maintenues en état de présentation — chaque jour."],
        ["Propriétés gérées",  "Halls d'entrée, aires communes et immeubles multi-locataires sous un seul contrat récurrent."],
      ],
    },
    faq: {
      kicker: "Questions fréquentes",
      h2: ["Les réponses qu'il vous faut ", "avant d'appeler."],
      lead: "La plupart de nos prospects posent les mêmes six questions. Voici les réponses — directes, sans artifices de vente.",
      stillHave: "Encore des questions ?",
      talkTitle: "Parlez-nous directement",
      items: [
        ["Quelle est la durée du contrat ?",                         "Les contrats récurrents standard sont de 12 mois avec une clause de préavis de 30 jours. Nous ne retenons pas les gens — si ça ne fonctionne pas, vous pouvez partir. Nous demandons simplement un préavis équitable pour planifier en conséquence."],
        ["Quel est l'engagement mensuel minimum ?",                  "Nos contrats récurrents commencent à 1 500 $ par mois. Cela nous permet de dédier des équipes constantes et une infrastructure qualité à votre espace."],
        ["Êtes-vous assurés et cautionnés ?",                        "Oui. Assurance responsabilité civile commerciale complète et cautionnement pour chaque membre de notre équipe. Certificats disponibles sur demande avant la signature de tout contrat."],
        ["Fournissez-vous vos propres fournitures et équipements ?",  "Oui — toutes les fournitures standard, équipements et produits écologiques sont inclus. Les consommables spéciaux peuvent être ajoutés ou sourcés séparément."],
        ["Que faire si je ne suis pas satisfait d'une visite ?",     "Signalez-le dans les 24 heures et nous renvoyons une équipe pour rectifier — sans frais. Nos rapports de contrôle qualité détectent aussi la plupart des problèmes avant vous."],
        ["Quel est votre délai de démarrage ?",                      "Du premier contact à la première visite, nous avons généralement besoin de 7 à 14 jours. La visite a lieu dans les 5 jours ouvrables, le délai du contrat est de 2 à 3 jours."],
      ],
    },
    cta: {
      kicker: "Commencer",
      h2: ["Demandez votre ", "visite."],
      body: "Remplissez le formulaire et nous vous contacterons dans un jour ouvrable pour planifier une visite sur place. Aucune pression de vente, aucune obligation — juste une vraie conversation sur votre espace.",
      bullets: [
        "Réponse dans un jour ouvrable, souvent le jour même",
        "Visite planifiée à votre convenance",
        "Périmètre personnalisé et tarification transparente dans les 48 heures",
        "Service bilingue : répondez en français si vous préférez",
      ],
      preferCall: "Vous préférez appeler ?",
      badge: "Visite gratuite",
      successH3: "Reçu. Nous vous contacterons.",
      successSub: "Attendez une réponse dans un jour ouvrable, souvent le jour même.",
      formH3: "Parlez-nous de votre espace.",
      formSub: "Moins d'une minute. Nous gérons le reste.",
      labels: {
        fullName: "Nom complet",
        company: "Entreprise",
        email: "Courriel",
        phone: "Téléphone",
        propertyType: "Type de propriété",
        size: "Superficie approximative",
        notes: "Quelque chose à nous signaler ? (Optionnel)",
      },
      placeholders: {
        fullName: "Marie Tremblay",
        company: "Acme Properties",
        email: "marie@acme.com",
        phone: "(514) 555-0123",
        notes: "Situation actuelle de nettoyage, délais, préoccupations spécifiques…",
      },
      propertyOptions: ["Bureau", "Clinique médicale", "Commerce de détail", "Propriété gérée", "Autre"],
      sizeOptions: ["Moins de 280 m²", "280 – 740 m²", "740 – 1 400 m²", "1 400+ m²"],
      selectPlaceholder: "Choisir…",
      submit: "Demander une visite",
      note: "En soumettant, vous consentez à être contacté au sujet de votre demande. Nous respectons la LCAP — aucun spam marketing, jamais.",
    },
    footer: {
      brand: "Nettoyage commercial professionnel et récurrent pour les entreprises montréalaises qui exigent l'excellence. Service fiable. Résultats documentés. À chaque fois.",
      cols: [
        { title: "Services",        items: ["Nettoyage de bureaux", "Nettoyage de cliniques", "Nettoyage commercial", "Propriétés gérées"] },
        { title: "Entreprise",      items: ["Pourquoi ça compte", "Pourquoi Spritz", "Notre processus", "FAQ"] },
        { title: "Zones de service",items: ["Centre-ville de Montréal", "Westmount et NDG", "Laval", "Rive-Sud"] },
      ],
      copy: "© 2025 Spritz Commercial Cleaning Inc. · Montréal, QC",
      badges: ["Assurés et cautionnés", "Conforme à la LCAP"],
    },
  },
};

window.SpritzI18n = { LangContext, LangProvider, useLang };
