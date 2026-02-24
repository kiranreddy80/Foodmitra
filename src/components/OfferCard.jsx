import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

export default function OfferCard({ offer }) {
  return (
    <motion.div
      whileHover={{ y: -20, scale: 1.02 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="card-luxe"
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        background: '#1A1A1E',
        color: '#fff',
        borderColor: 'rgba(255,255,255,0.05)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4rem' }}>
        <div style={{ color: 'var(--color-brand)' }}><ShieldCheck size={24} /></div>
        <div style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--color-ghost)', letterSpacing: '0.2em' }}>STATUS: VERIFIED</div>
      </div>

      <div style={{ marginBottom: '5rem' }}>
        <div style={{ fontSize: '0.6rem', fontWeight: 900, color: 'var(--color-brand)', marginBottom: '1rem', letterSpacing: '0.1em' }}>NODE_ID: {offer.name.substring(0, 3).toUpperCase()}</div>
        <h4 style={{ fontSize: '2.8rem', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.05em', marginBottom: '1rem' }}>{offer.name}</h4>
        <p className="serif" style={{ fontSize: '1.4rem', color: 'var(--color-ghost)' }}>{offer.cuisine}</p>
      </div>

      <div style={{ marginTop: 'auto' }}>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '3rem', marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--color-ghost)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>SYNCED_MENU_PRICE</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
            <div style={{ fontSize: '3.5rem', fontWeight: 900 }}>₹{offer.appPrice}</div>
            <div style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.2)', textDecoration: 'line-through' }}>₹{offer.menuPrice + 80}</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', fontSize: '0.8rem', fontWeight: 900 }}>
            <Heart size={16} fill="var(--color-brand)" color="var(--color-brand)" /> {offer.rating || 4.9} NODES
          </div>
          <div style={{ background: 'var(--color-brand)', color: '#fff', padding: '1rem', borderRadius: '16px' }}>
            <ArrowUpRight size={24} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
