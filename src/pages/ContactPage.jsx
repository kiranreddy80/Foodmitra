import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Zap } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="section" style={{ minHeight: '80vh', display: 'grid', placeItems: 'center' }}>
      <div className="mesh-bg" style={{ opacity: 0.1, top: '20%' }} />
      <div className="grid grid-2" style={{ gap: '6rem', width: '100%', alignItems: 'center' }}>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
          <div className="eyebrow" style={{ background: 'rgba(255,107,0,0.1)', color: 'var(--accent-vivid)' }}>Secure Channel</div>
          <h2 style={{ fontSize: '4.5rem', color: 'var(--ink-deep)', marginBottom: '1.5rem', fontWeight: 800 }}>Join the <span style={{ color: 'var(--accent-vivid)' }}>Fairness</span> Movement</h2>
          <p style={{ color: 'var(--ink-gray)', fontSize: '1.25rem', marginBottom: '3rem' }}>
            Whether you're a restaurateur looking to escape predatory commissions or a delivery professional seeking stability, our portal is open for integration.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div className="card-icon" style={{ background: 'rgba(255,107,0,0.08)', color: 'var(--accent-vivid)' }}><Mail /></div>
              <div>
                <h4 style={{ margin: 0, color: 'var(--ink-deep)' }}>Protocol Query</h4>
                <p style={{ margin: 0, color: 'var(--ink-gray)', fontWeight: 600 }}>ops@foodmithra.com</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div className="card-icon" style={{ background: 'rgba(16,185,129,0.08)', color: 'var(--accent-fresh)' }}><Phone /></div>
              <div>
                <h4 style={{ margin: 0, color: 'var(--ink-deep)' }}>Direct Line</h4>
                <p style={{ margin: 0, color: 'var(--ink-gray)', fontWeight: 600 }}>+91-9000-111-222</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div className="card-icon" style={{ background: 'var(--bg-soft)', color: 'var(--ink-deep)' }}><MapPin /></div>
              <div>
                <h4 style={{ margin: 0, color: 'var(--ink-deep)' }}>Central Node</h4>
                <p style={{ margin: 0, color: 'var(--ink-gray)', fontWeight: 600 }}>Financial District, Hyderabad</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="card" style={{ padding: '4rem', background: '#fff', boxShadow: 'var(--shadow-lg)', borderRadius: '40px' }}>
          <h3 style={{ color: 'var(--ink-deep)', marginBottom: '2.5rem', fontWeight: 800 }}>Node Submission</h3>
          <form style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--ink-soft)', textTransform: 'uppercase' }}>Full Name</label>
              <input type="text" placeholder="John Doe" style={{ padding: '1.25rem', background: 'var(--bg-soft)', border: '1px solid var(--stroke)', borderRadius: '16px', color: 'var(--ink-deep)', outline: 'none' }} />
            </div>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--ink-soft)', textTransform: 'uppercase' }}>Communication Channel</label>
              <input type="email" placeholder="john@example.com" style={{ padding: '1.25rem', background: 'var(--bg-soft)', border: '1px solid var(--stroke)', borderRadius: '16px', color: 'var(--ink-deep)', outline: 'none' }} />
            </div>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--ink-soft)', textTransform: 'uppercase' }}>Subject Node</label>
              <select style={{ padding: '1.25rem', background: 'var(--bg-soft)', border: '1px solid var(--stroke)', borderRadius: '16px', color: 'var(--ink-deep)', outline: 'none', appearance: 'none' }}>
                <option>Vendor Onboarding</option>
                <option>Delivery Partnership</option>
                <option>Customer Support</option>
              </select>
            </div>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--ink-soft)', textTransform: 'uppercase' }}>Encrypted Message</label>
              <textarea rows="4" placeholder="How can we build fairness together?" style={{ padding: '1.25rem', background: 'var(--bg-soft)', border: '1px solid var(--stroke)', borderRadius: '16px', color: 'var(--ink-deep)', outline: 'none', resize: 'none' }}></textarea>
            </div>
            <button disabled className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }}>
              INITIALIZE CONTACT <Zap size={18} fill="currentColor" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
