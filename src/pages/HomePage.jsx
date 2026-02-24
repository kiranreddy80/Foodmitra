import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Users,
  Store,
  Truck,
  Mail,
  Phone,
  X,
  Plus,
  ArrowUpRight,
  Heart,
  ChevronDown,
  Globe,
  Zap,
  Clock,
  MapPin,
  CheckCircle2,
  Lock,
  FileText,
  Play
} from "lucide-react";
import OfferCard from "../components/OfferCard";
import { featuredOffers, categories } from "../data";

const transitionLuxe = { duration: 1, ease: [0.19, 1, 0.22, 1] };

// --- Sub-components ---

const BenefitSection = ({ activeTab, setActiveTab }) => {
  const data = {
    customers: {
      title: "For Consumers",
      desc: "Order directly from your favorite local outlets at actual menu prices. No hidden platform markups, no dynamic pricing—just the food you love at the price it should be.",
      points: ["Real-Time Menu Sync", "Direct-to-Outlet Billing", "Zero Platform Inflation"],
      icon: Users,
      color: "var(--color-brand)"
    },
    vendors: {
      title: "For Partners",
      desc: "Take back control of your business. We operate on a flat 5% sustainability fee, allowing you to keep your hard-earned margins and focus on culinary excellence.",
      points: ["Flat 5% Commission", "Instant Payout Sync", "Direct Customer Relationship"],
      icon: Store,
      color: "var(--color-accent)"
    },
    delivery: {
      title: "For Logistics",
      desc: "Our delivery professionals are partners, not gig-workers. Fixed salaries and comprehensive insurance provide the stability you deserve while serving your community.",
      points: ["Fixed Monthly Salary", "Full Medical Coverage", "Dedicated Success Mesh"],
      icon: Truck,
      color: "var(--color-slate)"
    }
  };

  const current = data[activeTab];

  return (
    <section id="benefits" className="section" style={{ background: 'var(--color-bone)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h3 className="display-2">The <span className="serif">Standard.</span></h3>
          <div className="accent-line" style={{ margin: '2rem auto 0' }} />
        </div>

        <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 350px) minmax(0, 1fr)', gap: '4rem', alignItems: 'start' }}>
          <div className="mobile-stack" style={{ display: 'grid', gap: '1rem' }}>
            {Object.keys(data).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`card-luxe ${activeTab === key ? 'active' : ''}`}
                style={{
                  padding: '2rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: activeTab === key ? 'var(--color-brand)' : 'transparent',
                  background: activeTab === key ? '#fff' : 'rgba(0,0,0,0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  transition: '0.4s var(--ease-lux)'
                }}
              >
                <div style={{
                  background: activeTab === key ? 'var(--color-brand)' : 'var(--color-bone)',
                  color: activeTab === key ? 'var(--color-ink)' : 'var(--color-ghost)',
                  width: '44px', height: '44px', borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {React.createElement(data[key].icon, { size: 20 })}
                </div>
                <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{data[key].title}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card-luxe"
            style={{ padding: '6rem', background: '#fff' }}
          >
            <div style={{ width: '60px', height: '4px', background: current.color, marginBottom: '3rem' }} />
            <h4 style={{ fontSize: '3rem', marginBottom: '2.5rem' }}>{current.title}</h4>
            <p style={{ fontSize: '1.4rem', color: 'var(--color-slate)', lineHeight: 1.6, marginBottom: '4rem' }}>{current.desc}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {current.points.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <CheckCircle2 color={current.color} size={20} />
                  <span style={{ fontWeight: 700, fontSize: '1rem' }}>{p}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => (
  <section className="section" style={{ background: 'var(--color-white)' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
        <h3 className="display-2">How <span className="serif">Integrity</span> Scales.</h3>
        <p style={{ color: 'var(--color-slate)', fontSize: '1.25rem', marginTop: '2rem' }}>A hard-coded commitment to economic fairness across the network.</p>
      </div>

      <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        {[
          { n: "01", t: "Edge Synchronization", d: "Direct 24h binary sync between outlet POS systems and our digital registry." },
          { n: "02", t: "Capital Decoupling", d: "Isolating food costs from platform operations to preserve kitchen craft-value." },
          { n: "03", t: "Fulfillment Mesh", d: "Dispatching orders to salary-backed professionals, ensuring zero-compromise delivery." }
        ].map((step, i) => (
          <div key={i} className="card-luxe" style={{ padding: '4rem', background: 'var(--color-bone)' }}>
            <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-brand)', marginBottom: '2rem', opacity: 0.3 }}>{step.n}</div>
            <h5 style={{ fontSize: '1.8rem', fontWeight: 850, marginBottom: '1.5rem' }}>{step.t}</h5>
            <p style={{ color: 'var(--color-slate)', lineHeight: 1.6 }}>{step.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ImpactSection = () => (
  <section className="section" style={{ background: 'var(--color-bone)' }}>
    <div className="container">
      <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '4rem', alignItems: 'center' }}>
        <div>
          <h3 className="display-2">Wealth <span className="serif">Restored.</span></h3>
          <p style={{ marginTop: '3rem', fontSize: '1.3rem', color: 'var(--color-slate)', lineHeight: 1.7 }}>
            We track our impact not by the volume of transactions, but by the capital returned to local economies.
          </p>
        </div>
        <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div className="card-luxe" style={{ background: '#fff', padding: '4rem' }}>
            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--color-brand)' }}>₹1.2Cr</div>
            <div style={{ fontWeight: 800, marginTop: '1rem' }}>Commission Capital Recovered</div>
          </div>
          <div className="card-luxe" style={{ background: '#fff', padding: '4rem' }}>
            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--color-ink)' }}>1,200</div>
            <div style={{ fontWeight: 800, marginTop: '1rem' }}>Active Supply Nodes</div>
          </div>
          <div className="card-luxe" style={{ background: '#fff', padding: '4rem' }}>
            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--color-ink)' }}>100%</div>
            <div style={{ fontWeight: 800, marginTop: '1rem' }}>Price Fidelity</div>
          </div>
          <div className="card-luxe" style={{ background: '#fff', padding: '4rem' }}>
            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--color-ink)' }}>98%</div>
            <div style={{ fontWeight: 800, marginTop: '1rem' }}>Retention</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LegalSection = () => {
  const [view, setView] = useState("terms");

  const content = {
    terms: {
      title: "Terms & Conditions",
      body: [
        "By engaging with the Food Mithra protocol, you enter into a covenant of fairness. We do not operate on markups; therefore, we expect users to honor orders once preparation has been initiated by the kitchen node.",
        "Our system acts as a high-fidelity bridge. While we strive for 100% sync, the outlet's direct POS remains the source of truth in rare sync-lag scenarios.",
        "Refunds and adjustments are processed through our 'Integrity Queue', ensuring both the customer and the hard-working vendor are treated with equal financial dignity."
      ]
    },
    privacy: {
      title: "Privacy Policy",
      body: [
        "Your data belongs to you. Food Mithra only stores metadata essential for logistics and vendor settlement. We have zero integration with third-party advertising networks.",
        "Location services are active only during your 'Live Mission' (order window). Once the delivery partner confirms fulfillment, your spatial coordinate data is purged from our active processing nodes.",
        "All communication between you and our partners happens through a secure, encrypted relay, protecting your phone number and identity."
      ]
    }
  };

  return (
    <section id="legal" className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)', gap: '4rem' }}>
          <div>
            <h3 className="display-2" style={{ marginBottom: '4rem' }}>Legal <span className="serif">Nodes.</span></h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {Object.keys(content).map((key) => (
                <button
                  key={key}
                  onClick={() => setView(key)}
                  className={`nav-link ${view === key ? 'active' : ''}`}
                  style={{
                    textAlign: 'left',
                    padding: '2rem',
                    borderRadius: '16px',
                    border: '1px solid',
                    borderColor: view === key ? 'var(--color-ink)' : 'var(--color-bone)',
                    background: view === key ? 'var(--color-ink)' : 'transparent',
                    color: view === key ? '#fff' : 'var(--color-ink)',
                    cursor: 'pointer',
                    transition: '0.4s'
                  }}
                >
                  <span style={{ fontWeight: 800 }}>{content[key].title}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="card-luxe" style={{ background: 'var(--color-bone)', padding: '6rem' }}>
            <motion.div
              key={view}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h4 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>{content[view].title}</h4>
              <div style={{ display: 'grid', gap: '2rem' }}>
                {content[view].body.map((text, i) => (
                  <p key={i} style={{ color: 'var(--color-slate)', fontSize: '1.1rem', lineHeight: 1.8 }}>{text}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState("customers");

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const currentPosition = window.scrollY;
      const scrollPercentage = (currentPosition / (fullHeight - windowHeight)) * 100;

      if (scrollPercentage >= 50) {
        setShowPopup(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="page-root">
      <div className="noise-overlay" />

      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }} onClick={() => scrollTo('hero')}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/logo.jpeg" alt="Food Mithra Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--color-ink)', fontWeight: 900 }}>FOOD MITHRA</h2>
          </div>
          <div className="nav-links mobile-hide">
            <button onClick={() => scrollTo('about')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>About</button>
            <button onClick={() => scrollTo('benefits')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Benefits</button>
            <button onClick={() => scrollTo('legal')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Legal</button>
            <button onClick={() => scrollTo('contact')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Contact</button>
          </div>
          <button onClick={() => setShowPopup(true)} className="btn-premium mobile-hide" style={{ padding: '0.8rem 2rem', fontSize: '0.8rem' }}>GET EARLY ACCESS</button>
        </div>
      </nav>

      {/* Hero: Architectural Split Version */}
      <section id="hero" className="section mobile-stack" style={{
        minHeight: '100vh',
        background: 'var(--color-bone)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: 0,
        paddingTop: '80px'
      }}>

        {/* Left: Brand Totem (Vertical Text) - Hidden on Mobile */}
        <div className="mobile-hide" style={{
          width: '120px',
          height: '100%',
          borderRight: '1px solid rgba(0,0,0,0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff',
          zIndex: 5
        }}>
          <h2 className="serif" style={{
            transform: 'rotate(-90deg)',
            whiteSpace: 'nowrap',
            fontSize: '4rem',
            opacity: 0.1,
            letterSpacing: '0.5rem',
            color: 'var(--color-ink)'
          }}>
            MITHRA • SYSTEMS
          </h2>
        </div>

        {/* Center: The Cinematic Canvas */}
        <div style={{ flex: 1, minHeight: '400px', position: 'relative', height: '100%', background: 'var(--color-ink)' }}>
          {/* Sharp Cinematic Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0.9],
              scale: [1.1, 1.05, 1.05, 1]
            }}
            transition={{ duration: 8, times: [0, 0.1, 0.5, 1] }}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(251,250,246,1) 0%, rgba(251,250,246,0) 20%, rgba(251,250,246,0) 80%, rgba(251,250,246,1) 100%)', zIndex: 1 }} />

          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >


            </motion.div>
          </div>
        </div>

        {/* Right: The Manifest Panel */}
        <div className="mobile-stack" style={{
          width: '100%',
          maxWidth: '500px',
          height: '100%',
          background: '#fff',
          padding: '4rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 5
        }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span className="eyebrow" style={{ color: 'var(--color-brand)', marginBottom: '2rem', display: 'block' }}>ESTABLISHED 2026</span>
            <h3 className="display-2" style={{ fontSize: '3.5rem', marginBottom: '2.5rem' }}>Price <span className="serif">Dignity.</span></h3>
            <p style={{ color: 'var(--color-slate)', fontSize: '1.25rem', lineHeight: 1.6, marginBottom: '4rem' }}>
              We've redesigned the food ecosystem to prioritize local craftsmanship over digital markups. Experience the true cost of culinary excellence.
            </p>

            <div style={{ display: 'grid', gap: '2rem', marginBottom: '5rem' }}>
              {['Live Menu Synchronization', '0% Artificial Markup', 'Salary-Backed Logistics'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-brand)' }} />
                  <span style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--color-ink)', textTransform: 'uppercase' }}>{item}</span>
                </div>
              ))}
            </div>

            <button onClick={() => scrollTo('benefits')} className="btn-premium" style={{ width: '100%', justifyContent: 'center' }}>
              JOIN THE WAITLIST <ArrowRight size={18} />
            </button>
          </motion.div>

          <div style={{ position: 'absolute', bottom: '4rem', display: 'flex', gap: '1rem', opacity: 0.2, alignItems: 'center' }}>
            <img src="/logo.jpeg" alt="" style={{ width: '20px', height: '20px', borderRadius: '4px' }} />
            <Globe size={20} />
            <ShieldCheck size={20} />
          </div>
        </div>
      </section>

      {/* Scrolling Text Banner - Animated Marquee */}
      <div style={{
        height: '140px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--color-bone)',
        borderTop: '1px solid rgba(0,0,0,0.05)',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ display: 'flex', whiteSpace: 'nowrap', gap: '4rem' }}
        >
          {[1, 2, 3, 4].map((_, i) => (
            <h2 key={i} className="display-2" style={{ fontWeight: 900, fontSize: '4rem', opacity: 0.1, color: 'var(--color-ink)' }}>
              RESTAURANTS • DHABAS • HOTELS •
            </h2>
          ))}
        </motion.div>
      </div>

      {/* About Us */}
      <section id="about" className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="accent-line" />
              <h3 className="display-2" style={{ marginBottom: '3rem' }}>ABOUT <span className="serif"> US</span></h3>
              <p style={{ fontSize: '1.3rem', color: 'var(--color-slate)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Food Mithra was founded on a simple realization: the digital convenience layer was becoming a predatory middleman. In the rush for speed, we lost sight of the <strong>cooks</strong>, the <strong>riders</strong>, and the <strong>diners</strong>.
              </p>
              <p style={{ fontSize: '1.3rem', color: 'var(--color-slate)', lineHeight: 1.8, marginBottom: '4rem' }}>
                We've built a sanctuary—a platform that restores the sacred connection between a kitchen's effort and a diner's table. No markups, no exploitative gig-work, just honest food delivered with dignity.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                <div style={{ borderLeft: '3px solid var(--color-brand)', paddingLeft: '2rem' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>2026</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--color-ghost)', textTransform: 'uppercase' }}>Genesis Year</div>
                </div>
                <div style={{ borderLeft: '3px solid var(--color-accent)', paddingLeft: '2rem' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>100%</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--color-ghost)', textTransform: 'uppercase' }}>Price Sync</div>
                </div>
              </div>
            </div>
            <div className="card-luxe" style={{ background: 'var(--color-bone)', padding: '5rem', position: 'relative', overflow: 'hidden', minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Animated Logo Background */}
              <motion.div
                initial={{ filter: 'blur(0px)', opacity: 1, scale: 0.6 }}
                whileInView={{
                  filter: 'blur(30px)',
                  opacity: 0.15,
                  scale: 1.4
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 2, ease: [0.19, 1, 0.22, 1] }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  x: '-50%',
                  y: '-50%',
                  width: '100%',
                  height: '100%',
                  zIndex: 0,
                  pointerEvents: 'none'
                }}
              >
                <img src="/logo.jpeg" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </motion.div>

              {/* Animated Content Reveal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
                style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
              >
                <Heart size={56} fill="var(--color-brand)" color="var(--color-brand)" style={{ marginBottom: '2.5rem', margin: '0 auto 2.5rem' }} />
                <h5 style={{ fontSize: '2rem', fontWeight: 850, marginBottom: '1.5rem', color: 'var(--color-ink)' }}>Built for the Backbone.</h5>
                <p style={{ color: 'var(--color-slate)', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto' }}>Success isn't measured in clicks, but in the social security of our delivery nodes and the prosperity of our local partners.</p>
                <div style={{ marginTop: '3rem', paddingTop: '3rem', borderTop: '1px solid var(--color-ink)', opacity: 0.1 }}></div>
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                    <Star fill="var(--color-brand)" color="var(--color-brand)" size={16} />
                    <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>Premium Standards</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                    <CheckCircle2 color="var(--color-accent)" size={16} />
                    <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>Community Verified</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <BenefitSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProcessSection />
      <ImpactSection />
      <LegalSection />

      {/* Categories / Nodes */}
      <section className="section" style={{ background: 'var(--color-ink)', color: '#fff', borderRadius: '100px 100px 0 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <span style={{ color: 'var(--color-brand)', fontWeight: 900, letterSpacing: '0.3em', fontSize: '0.8rem' }}>LOCAL ECOSYSTEM</span>
            <h3 className="display-2" style={{ color: '#fff', marginTop: '2rem' }}>A <span className="serif">Curated</span> Registry.</h3>
          </div>

          <div style={{ display: 'grid', gap: '8rem' }}>
            {[
              { t: "Restaurants", items: categories.restaurants, color: "var(--color-brand)" },
              { t: "Dhabas", items: categories.dhabas, color: "var(--color-accent)" },
              { t: "Hotels", items: categories.hotels, color: "var(--color-brand-dark)" }
            ].map((cat, i) => (
              <div key={i}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3.5rem' }}>
                  <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.1)' }} />
                  <div className="eyebrow" style={{ color: cat.color, fontWeight: 900, letterSpacing: '0.2rem' }}>{cat.t}</div>
                  <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.1)' }} />
                </div>
                <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                  {cat.items.map((item, j) => (
                    <div key={j} className="card-luxe" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '3.5rem', color: '#fff' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
                        <span style={{ fontWeight: 900, fontSize: '0.7rem', color: cat.color, background: 'rgba(255,255,255,0.05)', padding: '0.4rem 1rem', borderRadius: '100px' }}>NODE #{i}{j}</span>
                        <Clock size={16} opacity={0.3} />
                      </div>
                      <h5 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.8rem' }}>{item.name}</h5>
                      <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '3rem' }}>{item.cuisine}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>{item.price}</div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>{item.eta}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="card-luxe" style={{ background: 'var(--color-ink)', color: '#fff', padding: '8rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', background: 'var(--color-brand)', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.1 }} />
            <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '4rem' }}>
              <div>
                <h3 className="display-2" style={{ color: '#fff' }}>Contact <span className="serif">Us.</span></h3>
                <p style={{ marginTop: '2.5rem', fontSize: '1.3rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                  Have questions about our commission model or interested in becoming a delivery partner? Our core ops team is ready to sync.
                </p>

                <div style={{ marginTop: '5rem', display: 'grid', gap: '3.5rem' }}>
                  <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.2rem', borderRadius: '12px' }}>
                      <Mail color="var(--color-brand)" size={24} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 900, color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>EMAIL PROTOCOL</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>ops@foodmithra.com</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.2rem', borderRadius: '12px' }}>
                      <Phone color="var(--color-brand)" size={24} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 900, color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>DIRECT VOICE</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>+91 9000 111 222</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form style={{ display: 'grid', gap: '2rem' }}>
                  <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <input type="text" placeholder="FULL NAME" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.8rem', borderRadius: '20px', color: '#fff', fontSize: '0.9rem', fontWeight: 700 }} />
                    <input type="email" placeholder="EMAIL ADDRESS" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.8rem', borderRadius: '20px', color: '#fff', fontSize: '0.9rem', fontWeight: 700 }} />
                  </div>
                  <input type="text" placeholder="SUBJECT" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.8rem', borderRadius: '20px', color: '#fff', fontSize: '0.9rem', fontWeight: 700 }} />
                  <textarea rows="4" placeholder="HOW CAN WE HELP?" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.8rem', borderRadius: '20px', color: '#fff', fontSize: '0.9rem', resize: 'none', fontWeight: 700 }}></textarea>
                  <button type="button" className="btn-premium" style={{ width: '100%', justifyContent: 'center', background: 'var(--color-brand)', color: 'var(--color-ink)' }}>SEND MESSAGE <ArrowUpRight /></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section" style={{ background: 'var(--color-white)', paddingBottom: '4rem', borderTop: '1px solid var(--color-bone)' }}>
        <div className="container">
          <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '6rem' }}>
            {/* Brand Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/logo.jpeg" alt="Food Mithra Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 900 }}>FOOD MITHRA.</h2>
              </div>
              <p style={{ color: 'var(--color-slate)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '3rem' }}>
                The first platform dedicated to price synchronization and financial dignity for the food delivery ecosystem.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--color-ghost)', marginBottom: '2.5rem', letterSpacing: '0.15em' }}>REGISTRY</h5>
              <div style={{ display: 'grid', gap: '1.2rem' }}>
                {['About Mission', 'Benefits Sync', 'Live Nodes', 'Impact Data', 'Partner Portal'].map(link => (
                  <button key={link} className="nav-link" style={{ background: 'none', border: 'none', textAlign: 'left', padding: 0, textTransform: 'capitalize' }}>{link}</button>
                ))}
              </div>
            </div>

            {/* Support */}
            <div>
              <h5 style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--color-ghost)', marginBottom: '2.5rem', letterSpacing: '0.15em' }}>SECURITY</h5>
              <div style={{ display: 'grid', gap: '1.2rem' }}>
                {['Privacy Protocol', 'Terms of Sync', 'Encryption FAQ', 'Support Hub', 'Dispute Queue'].map(link => (
                  <button key={link} className="nav-link" style={{ background: 'none', border: 'none', textAlign: 'left', padding: 0, textTransform: 'capitalize' }}>{link}</button>
                ))}
              </div>
            </div>

            {/* App Download */}
            <div>
              <h5 style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--color-ghost)', marginBottom: '2.5rem', letterSpacing: '0.15em' }}>EXPERIENCE MITHRA</h5>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <button
                  style={{
                    background: 'var(--color-ink)', color: '#fff', border: 'none',
                    padding: '1.2rem 2rem', borderRadius: '16px', display: 'flex',
                    alignItems: 'center', gap: '1.2rem', cursor: 'pointer', textAlign: 'left'
                  }}
                >
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.6rem', borderRadius: '100px' }}>
                    <Zap size={20} fill="#fff" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 800, opacity: 0.6 }}>DOWNLOAD ON THE</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 900 }}>App Store</div>
                  </div>
                </button>
                <button
                  style={{
                    background: 'var(--color-ink)', color: '#fff', border: 'none',
                    padding: '1.2rem 2rem', borderRadius: '16px', display: 'flex',
                    alignItems: 'center', gap: '1.2rem', cursor: 'pointer', textAlign: 'left'
                  }}
                >
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.6rem', borderRadius: '100px' }}>
                    <Play size={20} fill="#fff" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 800, opacity: 0.6 }}>GET IT ON</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 900 }}>Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '4rem', borderTop: '1px solid var(--color-ink)', opacity: 0.1, color: 'var(--color-ink)', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
              <span style={{ fontWeight: 800 }}>© 2026 MITHRA SYSTEMS</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Coming Soon Pop-up */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="popup-overlay"
          >
            <motion.div
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              className="popup-modal"
              style={{ border: '1px solid var(--color-brand-soft)', boxShadow: '0 50px 100px -20px rgba(250, 187, 19, 0.2)' }}
            >
              <button onClick={() => setShowPopup(false)} className="popup-close"><X size={28} color="var(--color-ink)" /></button>
              <div className="accent-line" style={{ margin: '0 auto 2.5rem' }} />
              <h3 className="display-2" style={{ marginBottom: '1.5rem', fontSize: '3.5rem' }}>Waitlist <span className="serif">Open.</span></h3>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-slate)', marginBottom: '3.5rem', lineHeight: 1.6 }}>
                The Fairness Engine is currently undergoing stress testing in pilot sectors. Join <strong>12,000+</strong> diners waiting for the honest food revolution.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <input type="email" placeholder="email@protocol.sync" style={{ flex: 1, padding: '1.5rem 2.5rem', background: 'var(--color-bone)', border: 'none', borderRadius: '100px', fontWeight: 700, fontSize: '1rem', color: 'var(--color-ink)' }} />
                <button className="btn-premium" style={{ background: 'var(--color-brand)', padding: '1.5rem' }}><ArrowRight size={24} color="var(--color-ink)" /></button>
              </div>
              <div style={{ marginTop: '3rem', fontSize: '0.75rem', fontWeight: 900, color: 'var(--color-brand-dark)', letterSpacing: '0.15em' }}>GLOBAL SYNC STATUS: 42% COMPLETE</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
