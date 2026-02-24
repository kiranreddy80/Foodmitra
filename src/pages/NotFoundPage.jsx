import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SearchX, Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="section"
      style={{ textAlign: 'center', padding: '10rem 0' }}
    >
      <div className="card-icon" style={{ margin: '0 auto 2rem', width: '80px', height: '80px' }}>
        <SearchX size={40} />
      </div>
      <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Oops! Page Not Found</h2>
      <p style={{ color: 'var(--ink-soft)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
        Even our delivery partners couldn't find this page. Let's get you back to the main menu.
      </p>
      <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex' }}>
        <Home size={18} /> Back to Safety
      </Link>
    </motion.section>
  );
}

