/**
 * HavOne Mobility – Corporate Presence Website
 * Single Page Application (SPA) – Static, Frontend Only
 * Built with Next.js App Router + Tailwind CSS
 */

/* ─────────────────────────────────────────────────────────────────────────────
   DATA: All static content for the page
   ───────────────────────────────────────────────────────────────────────────── */

const offerings = [
  "Subscription-based institutional mobility access",
  "Clean and sustainable fleet enablement",
  "Centralized mobility management",
  "Operational efficiency and optimization",
  "Sustainability and ESG alignment",
];

const whyHavOne = [
  "Designed exclusively for B2B and B2G use cases",
  "Strong alignment with Net Zero and ESG mandates",
  "Single-subscription simplicity for complex mobility needs",
  "Enterprise-ready, compliance-conscious approach",
  "Built for long-term partnerships and scale",
];

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENTS
   ───────────────────────────────────────────────────────────────────────────── */

/** Reusable check icon for bullet lists */
function CheckIcon() {
  return (
    <svg
      className="mt-1 h-5 w-5 flex-shrink-0 text-green-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

/** Site Header / Navigation */
function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-lg font-bold text-white">
            H
          </div>
          <div>
            <div className="text-lg font-semibold text-slate-900">
              HavOne Mobility
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#about" className="transition-colors hover:text-slate-900">
            About
          </a>
          <a href="#vision" className="transition-colors hover:text-slate-900">
            Vision
          </a>
          <a href="#offerings" className="transition-colors hover:text-slate-900">
            Offerings
          </a>
          <a href="#contact" className="transition-colors hover:text-slate-900">
            Contact
          </a>
        </nav>

        {/* Mobile placeholder */}
        <div className="md:hidden">
          <button
            type="button"
            className="rounded-md p-2 text-slate-600 hover:bg-slate-100"
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

/** Hero Section */
function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="section-container text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Net Zero 2030
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
          Driving Institutional Mobility Towards{" "}
          <span className="text-green-600">Net Zero</span>
        </h1>

        {/* Sub-headline */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
          A unified clean mobility ecosystem for B2B and B2G organizations,
          managed through one intelligent subscription.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a href="#about" className="btn-primary">
            Explore Our Vision
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/** About Section */
function AboutSection() {
  return (
    <section id="about" className="border-t border-slate-100 bg-white">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
            About Us
          </p>
          <h2 className="section-title mt-2">About HavOne Mobility</h2>
          <div className="mt-8 space-y-6 text-left text-slate-600 md:text-center">
            <p>
              HavOne Mobility is a clean mobility–focused organization built to
              support enterprises, institutions, and government bodies in their
              transition towards sustainable transportation.
            </p>
            <p>
              We design and manage institutional mobility ecosystems that
              simplify operations, reduce carbon footprint, and align with
              long-term environmental and regulatory goals. Our model brings
              together planning, deployment, and optimization of clean mobility
              solutions through a single, managed subscription.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Vision & Mission Section */
function VisionSection() {
  return (
    <section id="vision" className="border-t border-slate-100 bg-slate-50">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Our Purpose
          </p>
          <h2 className="section-title mt-2">Vision & Mission</h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Vision Card */}
          <article className="card">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              Vision — Net Zero 2030
            </div>
            <p className="text-slate-600">
              To enable a scalable, compliant, and sustainable mobility
              ecosystem for institutional clients, contributing meaningfully to
              Net Zero objectives by 2030.
            </p>
          </article>

          {/* Mission Card */}
          <article className="card">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              Mission
            </div>
            <p className="text-slate-600">
              To empower B2B and B2G organizations with reliable, clean, and
              operationally efficient mobility solutions—delivered through a
              unified subscription model focused on transparency,
              accountability, and long-term value creation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

/** Offerings Section */
function OfferingsSection() {
  return (
    <section id="offerings" className="border-t border-slate-100 bg-white">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
            What We Offer
          </p>
          <h2 className="section-title mt-2">
            A Unified Clean Mobility Ecosystem
          </h2>
          <p className="section-subtitle mx-auto">
            High-level capabilities designed for institutional mobility needs.
          </p>
        </div>

        <ul className="mx-auto mt-12 max-w-2xl space-y-4">
          {offerings.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <CheckIcon />
              <span className="text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Why HavOne Section */
function WhySection() {
  return (
    <section className="border-t border-slate-100 bg-slate-50">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Why Choose Us
          </p>
          <h2 className="section-title mt-2">Why HavOne Mobility</h2>
        </div>

        <ul className="mx-auto mt-12 max-w-2xl space-y-4">
          {whyHavOne.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <CheckIcon />
              <span className="text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Contact Section */
function ContactSection() {
  return (
    <section id="contact" className="border-t border-slate-100 bg-white">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Get In Touch
          </p>
          <h2 className="section-title mt-2">Connect With Us</h2>
          <p className="section-subtitle mx-auto">
            We collaborate with enterprises, institutions, and government bodies
            seeking structured and sustainable mobility transformation.
          </p>

          {/* Contact Details */}
          <div className="mt-10 inline-flex flex-col items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 px-8 py-6">
            <div className="flex items-center gap-3 text-slate-700">
              <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <a
                href="https://haveonemobility.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-green-600 hover:underline"
              >
                haveonemobility.in
              </a>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">connect@havonemobility.in</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Footer */
function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-5xl px-6 py-12 text-center">
        {/* Company Name */}
        <div className="text-lg font-semibold text-white">
          HavOne Mobility Private Limited
        </div>

        {/* Registered Address */}
        <address className="mt-4 text-sm not-italic leading-relaxed">
          Registered Office: Ward Number 4, Barwala, Hisar, Haryana – 125121, India
        </address>

        {/* CIN */}
        <div className="mt-2 text-sm">
          CIN: U77305HR2023PTC109944
        </div>

        {/* Divider */}
        <hr className="mx-auto my-8 max-w-xs border-slate-700" />

        {/* Copyright */}
        <div className="text-sm">
          © {new Date().getFullYear()} HavOne Mobility Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN PAGE COMPONENT
   ───────────────────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <OfferingsSection />
        <WhySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
