import React from "react";
import { motion } from "framer-motion";
import { Clock, Utensils, Star, MapPin, ShieldCheck, Zap } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function CategoryPage({ heading, intro, items }) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="section"
    >
      <div className="mesh-bg" style={{ height: '400px', opacity: 0.2 }} />
      <motion.div variants={itemVariants} className="section-head" style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <div className="eyebrow" style={{ background: 'rgba(255,107,0,0.1)', color: 'var(--accent-vivid)' }}>
          <Zap size={14} fill="var(--accent-vivid)" /> Trusted Marketplace
        </div>
        <h3 style={{ fontSize: '4rem', marginBottom: '1.5rem', fontWeight: 800 }}>{heading}</h3>
        <p className="section-intro" style={{ color: 'var(--ink-gray)', maxWidth: '700px', fontSize: '1.2rem', margin: '0 auto' }}>{intro}</p>
      </motion.div>

      <div className="grid grid-3">
        {items.map((item, index) => (
          <motion.article
            key={item.name}
            variants={itemVariants}
            whileHover={{ y: -12, transition: { duration: 0.3 } }}
            className="card"
            style={{ padding: '0', overflow: 'hidden' }}
          >
            <div className="offer-image" style={{ height: '200px', background: 'var(--bg-soft)', display: 'grid', placeItems: 'center', margin: '0' }}>
              <Utensils size={48} color="var(--accent-vivid)" opacity={0.15} />
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(16,185,129,0.1)', color: 'var(--accent-fresh)', padding: '0.4rem 0.8rem', borderRadius: '100px', fontSize: '0.65rem', fontWeight: 900, border: '1px solid rgba(16,185,129,0.2)' }}>
                VERIFIED ITEM
              </div>
            </div>

            <div style={{ padding: '2.5rem' }}>
              <h4 style={{ fontSize: '1.5rem', color: 'var(--ink-deep)', marginBottom: '0.75rem', fontWeight: 700 }}>{item.name}</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--ink-gray)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                <Star size={16} fill="var(--accent-vivid)" color="var(--accent-vivid)" />
                <span style={{ fontWeight: 600 }}>{item.cuisine}</span>
              </div>

              <div className="price-comparison" style={{ marginTop: 'auto' }}>
                <div className="price-box" style={{ background: 'var(--bg-soft)', color: 'var(--ink-gray)' }}>
                  <div className="price-label">BASE RATE</div>
                  <div className="price-value" style={{ fontWeight: 800 }}>{item.price}</div>
                </div>
                <div className="price-box active" style={{ background: 'var(--accent-fresh)', color: '#fff' }}>
                  <div className="price-label">AVG ETA</div>
                  <div className="price-value" style={{ fontWeight: 800 }}>{item.eta}</div>
                </div>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-fresh)', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '1px' }}>
                <ShieldCheck size={16} />
                <span>NO HIDDEN MARKUPS</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}



