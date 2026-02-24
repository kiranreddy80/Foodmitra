import React from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Users, Coins, TrendingUp, Handshake, Star, Zap, Globe, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="section" style={{ overflow: 'hidden' }}>
      <div className="mesh-bg" style={{ opacity: 0.1, height: '600px' }} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="section-head"
        style={{ textAlign: 'center', marginBottom: '8rem' }}
      >
        <div className="eyebrow" style={{ background: 'rgba(255,107,0,0.1)', color: 'var(--accent-vivid)' }}>Our DNA</div>
        <h2 style={{ fontSize: '5rem', marginBottom: '2rem', color: 'var(--ink-deep)', fontWeight: 800 }}>The <span style={{ color: 'var(--accent-vivid)' }}>Mithra</span> Standard.</h2>
        <p style={{ fontSize: '1.4rem', color: 'var(--ink-gray)', maxWidth: '800px', margin: '0 auto' }}>
          Born from the necessity of radical truth. We didn't just build an app; we engineered a sanctuary for fairness in an industry of distortion.
        </p>
      </motion.div>

      <div className="grid grid-2" style={{ gap: '6rem', alignItems: 'center', marginBottom: '12rem' }}>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
          <h3 style={{ fontSize: '3rem', color: 'var(--ink-deep)', marginBottom: '1.5rem', fontWeight: 800 }}>Restoring <span style={{ color: 'var(--accent-vivid)' }}>Equilibrium</span></h3>
          <p style={{ color: 'var(--ink-gray)', fontSize: '1.25rem', lineHeight: '1.8' }}>
            For years, the industry has operated behind a veil of hidden markups and predatory commissions. We direct-link our system to physical menu cards to ensure that when a restaurant maintains its prices, so do we.
          </p>
          <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ fontSize: '2.5rem', color: 'var(--accent-vivid)', margin: 0 }}>0%</h4>
              <p style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--ink-soft)' }}>HIDDEN FEES</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ fontSize: '2.5rem', color: 'var(--accent-fresh)', margin: 0 }}>100%</h4>
              <p style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--ink-soft)' }}>PRICE PARITY</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="card" style={{ padding: '4rem', background: '#fff', boxShadow: 'var(--shadow-lg)', borderRadius: '40px' }}>
          <div className="card-icon" style={{ background: 'rgba(255,107,0,0.1)', color: 'var(--accent-vivid)', width: '80px', height: '80px', borderRadius: '24px' }}>
            <Zap size={40} fill="var(--accent-vivid)" />
          </div>
          <h4 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>The Verification Engine</h4>
          <p style={{ color: 'var(--ink-gray)', fontSize: '1.1rem' }}>
            Our proprietary audit protocol periodically verifies every menu item against physical restaurant records. Real prices, real dignity.
          </p>
        </motion.div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '3.5rem', fontWeight: 800 }}>Unified by <span style={{ color: 'var(--accent-fresh)' }}>Values</span></h3>
      </div>

      <div className="grid grid-3">
        {[
          { icon: <Heart size={32} />, title: "Human Dignity", detail: "Moving delivery partners from gig-uncertainty to fixed monthly stability.", color: 'rgba(239,68,68,0.1)', iconColor: '#EF4444' },
          { icon: <ShieldCheck size={32} />, title: "Crystal Trust", detail: "Total transparency in how we charge and how our partners are paid.", color: 'rgba(16,185,129,0.1)', iconColor: '#10B981' },
          { icon: <Globe size={32} />, title: "Local Equity", detail: "Lowering barriers for local vendors to survive in a digital age.", color: 'rgba(37,99,235,0.1)', iconColor: '#2563EB' }
        ].map((v, i) => (
          <motion.div key={i} whileHover={{ y: -12 }} className="card" style={{ textAlign: 'center', alignItems: 'center', padding: '3.5rem' }}>
            <div className="card-icon" style={{ background: v.color, color: v.iconColor, marginBottom: '2rem' }}>{v.icon}</div>
            <h4 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{v.title}</h4>
            <p style={{ color: 'var(--ink-gray)', lineHeight: '1.6' }}>{v.detail}</p>
          </motion.div>
        ))}
      </div>

      <div style={{ marginTop: '12rem', padding: '6rem', background: 'var(--ink-deep)', borderRadius: '60px', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#fff' }}>Join the <span style={{ color: 'var(--accent-vivid)' }}>Standard.</span></h2>
        <p style={{ fontSize: '1.25rem', color: '#94A3B8', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          We're building more than a platform. We're building a network of integrity. Be part of the change.
        </p>
        <button className="btn btn-primary">Partner With Us</button>
      </div>
    </div>
  );
}



