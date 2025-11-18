// 2025 SIBIL LLC. All rights reserved.
// SIBIL Confidential

import React from 'react'
import { Link } from "react-router-dom";

const styles = {
  footer: {
    width: "100%",
    borderTop: "1px solid #e5e5e5",
    background: "#fafafa",
    padding: "40px 16px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
    color: "#4b5563",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    maxWidth: "1120px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "24px",
  },
  logo: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#111827",
    textDecoration: "none",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    minWidth: "140px",
  },
  columnTitle: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#111827",
    marginBottom: "4px",
  },
  link: {
    textDecoration: "none",
    color: "#4b5563",
    fontSize: "14px",
  },
  linkHover: {
    color: "#111827",
  },
  bottomRow: {
    marginTop: "16px",
    fontSize: "13px",
    color: "#6b7280",
    textAlign: "center",
  },
};

export const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.topRow}>
          <Link to="/" style={styles.logo}>
            Sibil
          </Link>

          <div style={styles.column}>
            <span style={styles.columnTitle}>Product</span>
            <Link to="/features" style={styles.link}>Features</Link>
            <Link to="/pricing" style={styles.link}>Pricing</Link>
            <Link to="/about" style={styles.link}>About</Link>
          </div>

          <div style={styles.column}>
            <span style={styles.columnTitle}>Company</span>
            <Link to="/about" style={styles.link}>About Us</Link>
            <Link to="/team" style={styles.link}>Team</Link>
            <Link to="/careers" style={styles.link}>Careers</Link>
          </div>

          <div style={styles.column}>
            <span style={styles.columnTitle}>Legal</span>
            <Link to="/privacy" style={styles.link}>Privacy</Link>
            <Link to="/terms" style={styles.link}>Terms</Link>
          </div>
        </div>

        <div style={styles.bottomRow}>
          © {new Date().getFullYear()} Sibil. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;