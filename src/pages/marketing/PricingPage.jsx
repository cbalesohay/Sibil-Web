// 2025 SIBIL LLC. All rights reserved.
// SIBIL Confidential

// src/routes/pricing.jsx
import { Link } from "react-router-dom";

const styles = {
  page: {
    padding: "16px 0 72px",
  },
  header: {
    marginBottom: "32px",
  },
  eyebrow: {
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#6b7280",
    marginBottom: "8px",
  },
  title: {
    fontSize: "32px",
    lineHeight: 1.15,
    letterSpacing: "-0.04em",
    fontWeight: 650,
    color: "#111827",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "15px",
    lineHeight: 1.6,
    color: "#4b5563",
    maxWidth: "520px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    marginTop: "12px",
  },
  card: {
    borderRadius: "16px",
    border: "1px solid #e5e7eb",
    padding: "20px 20px 18px",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  cardHighlight: {
    borderColor: "#111827",
    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.12)",
  },
  planName: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#111827",
  },
  planTagline: {
    fontSize: "13px",
    color: "#6b7280",
  },

  priceRow: {
    display: "flex",
    alignItems: "baseline",
    gap: "4px",
    marginTop: "4px",
  },
  price: {
    fontSize: "26px",
    fontWeight: 650,
    color: "#111827",
  },
  priceSuffix: {
    fontSize: "13px",
    color: "#6b7280",
  },

  pill: {
    fontSize: "11px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    padding: "3px 8px",
    borderRadius: "999px",
    border: "1px solid #e5e7eb",
    color: "#111827",
    backgroundColor: "#f9fafb",
    alignSelf: "flex-start",
  },
  pillDark: {
    borderColor: "rgba(148,163,184,0.7)",
    backgroundColor: "#0b1120",
    color: "#e5e7eb",
  },

  featuresList: {
    marginTop: "6px",
    paddingLeft: "18px",
    fontSize: "13px",
    lineHeight: 1.6,
    color: "#4b5563",
  },
  featureItem: {
    marginBottom: "4px",
  },

  buttonRow: {
    marginTop: "12px",
  },
  primaryButton: {
    display: "inline-block",
    padding: "9px 14px",
    borderRadius: "999px",
    backgroundColor: "#111827",
    color: "#ffffff",
    fontSize: "13px",
    fontWeight: 600,
    textDecoration: "none",
    border: "1px solid #111827",
  },
  secondaryButton: {
    display: "inline-block",
    padding: "9px 14px",
    borderRadius: "999px",
    backgroundColor: "#ffffff",
    color: "#111827",
    fontSize: "13px",
    fontWeight: "500",
    textDecoration: "none",
    border: "1px solid #e5e7eb",
  },

  footnote: {
    marginTop: "20px",
    fontSize: "12px",
    color: "#6b7280",
  },
  strong: {
    fontWeight: 600,
    color: "#4b5563",
  },
};

export const PricingPage = () => {
  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.eyebrow}>Pricing</div>
        <h1 style={styles.title}>Operational intelligence for real teams.</h1>
        <p style={styles.subtitle}>
          Sibil replaces scattered dashboards, spreadsheets, and manual tracking
          with a unified system of record. Pricing reflects the value of becoming
          a true operational layer for your company.
        </p>
      </header>

      {/* Plans */}
      <section>
        <div style={styles.grid}>
          
          {/* Starter / Pilot */}
          <div style={styles.card}>
            <div style={styles.planName}>Pilot</div>
            <div style={styles.planTagline}>
              For small teams validating Sibil as their operating system.
            </div>

            <div style={styles.priceRow}>
              <div style={styles.price}>$1,500+</div>
              <div style={styles.priceSuffix}>/ month</div>
            </div>

            <ul style={styles.featuresList}>
              <li style={styles.featureItem}>Up to 2 workspaces</li>
              <li style={styles.featureItem}>Up to 15 users</li>
              <li style={styles.featureItem}>Core integrations</li>
              <li style={styles.featureItem}>Operational visibility dashboards</li>
              <li style={styles.featureItem}>Email + chat support</li>
            </ul>

            <div style={styles.buttonRow}>
              <Link to="/demo" style={styles.secondaryButton}>
                Start a pilot
              </Link>
            </div>
          </div>

          {/* Growth (highlighted) */}
          <div style={{ ...styles.card, ...styles.cardHighlight }}>
            <div style={styles.pill}>Most Popular</div>

            <div style={styles.planName}>Growth</div>
            <div style={styles.planTagline}>
              For scaling teams centralizing cross-functional work.
            </div>

            <div style={styles.priceRow}>
              <div style={styles.price}>$5,000+</div>
              <div style={styles.priceSuffix}>/ month</div>
            </div>

            <ul style={styles.featuresList}>
              <li style={styles.featureItem}>Unlimited workspaces</li>
              <li style={styles.featureItem}>Up to 100 users</li>
              <li style={styles.featureItem}>Advanced integrations (Jira, Linear, HubSpot, etc.)</li>
              <li style={styles.featureItem}>Custom dashboards + reporting</li>
              <li style={styles.featureItem}>Dedicated success manager</li>
            </ul>

            <div style={styles.buttonRow}>
              <Link to="/demo" style={styles.primaryButton}>
                Talk to sales
              </Link>
            </div>
          </div>

          {/* Enterprise */}
          <div style={styles.card}>
            <div style={{ ...styles.pill, ...styles.pillDark }}>Enterprise</div>
            <div style={styles.planName}>Enterprise</div>
            <div style={styles.planTagline}>
              For teams that want Sibil as the backbone of company-wide
              operations.
            </div>

            <div style={styles.priceRow}>
              <div style={styles.price}>$12,000+</div>
              <div style={styles.priceSuffix}>/ month</div>
            </div>

            <ul style={styles.featuresList}>
              <li style={styles.featureItem}>Unlimited users</li>
              <li style={styles.featureItem}>Full custom integration buildouts</li>
              <li style={styles.featureItem}>Role-based access + SSO</li>
              <li style={styles.featureItem}>Workspace hierarchy + multi-org</li>
              <li style={styles.featureItem}>White-glove onboarding & SLAs</li>
            </ul>

            <div style={styles.buttonRow}>
              <Link to="/demo" style={styles.secondaryButton}>
                Enterprise inquiry
              </Link>
            </div>
          </div>

        </div>

        <p style={styles.footnote}>
          Pricing adjusts based on integration complexity, onboarding scope, and
          automation volume.{" "}
          <span style={styles.strong}>Annual partnerships</span> and{" "}
          <span style={styles.strong}>founding discounts</span> are available.
        </p>
      </section>
    </div>
  );
}

export default PricingPage;