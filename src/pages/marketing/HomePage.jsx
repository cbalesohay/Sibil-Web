// 2025 SIBIL LLC. All rights reserved.
// SIBIL Confidential
import { Link } from "react-router-dom";

const styles = {
  page: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "48px 0 80px",
  },
  heroWrapper: {
    maxWidth: "720px",
    width: "100%",
  },
  eyebrow: {
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#6b7280",
    marginBottom: "12px",
  },
  title: {
    fontSize: "40px",
    lineHeight: 1.1,
    letterSpacing: "-0.04em",
    fontWeight: 650,
    color: "#111827",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "16px",
    lineHeight: 1.6,
    color: "#4b5563",
    marginBottom: "24px",
    maxWidth: "540px",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "20px",
  },
  primaryButton: {
    padding: "10px 18px",
    borderRadius: "999px",
    backgroundColor: "#111827",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 600,
    textDecoration: "none",
    border: "1px solid #111827",
  },
  secondaryButton: {
    padding: "10px 18px",
    borderRadius: "999px",
    backgroundColor: "#ffffff",
    color: "#111827",
    fontSize: "14px",
    fontWeight: 500,
    textDecoration: "none",
    border: "1px solid #e5e7eb",
  },
  meta: {
    fontSize: "13px",
    color: "#6b7280",
  },
  metaStrong: {
    fontWeight: 600,
    color: "#4b5563",
  },

  // Features
  featuresSection: {
    padding: "64px 0 56px",
    borderTop: "1px solid #f3f4f6",
    marginTop: "40px",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "32px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  featureCard: {
    padding: "20px 0",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  featureIcon: {
    width: "36px",
    height: "36px",
    borderRadius: "10px",
    backgroundColor: "#111827",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 600,
    fontSize: "18px",
  },
  featureTitle: {
    fontSize: "17px",
    fontWeight: 600,
    color: "#111827",
  },
  featureText: {
    fontSize: "14px",
    lineHeight: 1.6,
    color: "#4b5563",
    maxWidth: "330px",
  },

  // Testimonial
  testimonialSection: {
    padding: "16px 0 48px",
  },
  testimonialCard: {
    borderRadius: "16px",
    border: "1px solid #e5e7eb",
    padding: "20px 20px 18px",
    backgroundColor: "#f9fafb",
    maxWidth: "520px",
  },
  testimonialQuote: {
    fontSize: "14px",
    lineHeight: 1.7,
    color: "#374151",
    marginBottom: "14px",
  },
  testimonialMetaRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  avatar: {
    width: "32px",
    height: "32px",
    borderRadius: "999px",
    background:
      "linear-gradient(135deg, #111827 0%, #4b5563 30%, #9ca3af 100%)",
  },
  testimonialName: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#111827",
  },
  testimonialRole: {
    fontSize: "13px",
    color: "#6b7280",
  },

  // CTA
  ctaSection: {
    marginTop: "40px",
    borderRadius: "18px",
    padding: "22px 20px",
    background:
      "linear-gradient(135deg, #020617 0%, #111827 45%, #1f2933 100%)",
    color: "#e5e7eb",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  ctaTopRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
  },
  ctaTitle: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#f9fafb",
  },
  ctaText: {
    fontSize: "14px",
    color: "#d1d5db",
    maxWidth: "380px",
  },
  ctaActions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  ctaPrimary: {
    padding: "9px 16px",
    borderRadius: "999px",
    backgroundColor: "#f9fafb",
    color: "#020617",
    fontSize: "14px",
    fontWeight: 600,
    textDecoration: "none",
    border: "1px solid #e5e7eb",
  },
  ctaSecondary: {
    padding: "9px 16px",
    borderRadius: "999px",
    backgroundColor: "transparent",
    color: "#e5e7eb",
    fontSize: "14px",
    fontWeight: 500,
    textDecoration: "none",
    border: "1px solid rgba(148, 163, 184, 0.8)",
  },
};

export const HomePage = () => {
  return (
    <div style={styles.page}>
      <div style={styles.heroWrapper}>
        {/* HERO */}
        <section>
          <div style={styles.eyebrow}>Operational intelligence for modern teams</div>

          <h1 style={styles.title}>
            Turn scattered work into one clear system of record.
          </h1>

          <p style={styles.subtitle}>
            Sibil connects the tools your team already uses into a single
            surface for visibility, decisions, and action. See the real state of
            work in minutes instead of digging through tabs.
          </p>

          <div style={styles.actions}>
            <Link to="/register" style={styles.primaryButton}>
              Get started
            </Link>
            <Link to="/demo" style={styles.secondaryButton}>
              Book a demo
            </Link>
          </div>

          <p style={styles.meta}>
            <span style={styles.metaStrong}>
              Built for founders, leads, and operators.
            </span>{" "}
            No rip and replace—just a calmer way to run the stack you already
            trust.
          </p>
        </section>

        {/* FEATURES */}
        <section style={styles.featuresSection}>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>1</div>
              <div style={styles.featureTitle}>Unified visibility</div>
              <div style={styles.featureText}>
                Know exactly where work stands across tools, teams, and
                priorities. Sibil gives you one real-time source of truth.
              </div>
            </div>

            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>2</div>
              <div style={styles.featureTitle}>Effortless automation</div>
              <div style={styles.featureText}>
                Trigger updates, sync fields, and surface insights
                automatically—without patching together brittle workflows.
              </div>
            </div>

            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>3</div>
              <div style={styles.featureTitle}>Decision-ready reporting</div>
              <div style={styles.featureText}>
                Clear, living dashboards that show the real status of work—not a
                spreadsheet someone updates once a week.
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section style={styles.testimonialSection}>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialQuote}>
              “Before Sibil, I was bouncing between dashboards, docs, and DMs to
              understand what was actually happening. Now I open one view, and I
              know what needs my attention in under a minute.”
            </p>
            <div style={styles.testimonialMetaRow}>
              <div style={styles.avatar} />
              <div>
                <div style={styles.testimonialName}>Jordan Lee</div>
                <div style={styles.testimonialRole}>
                  Head of Operations, Series B SaaS
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={styles.ctaSection}>
          <div style={styles.ctaTopRow}>
            <div>
              <div style={styles.ctaTitle}>Ready for a calmer command center?</div>
              <p style={styles.ctaText}>
                Start with your existing tools. Sibil plugs in quietly and lets
                you see the real story of your work without a big migration.
              </p>
            </div>

            <div style={styles.ctaActions}>
              <Link to="/register" style={styles.ctaPrimary}>
                Create an account
              </Link>
              <Link to="/demo" style={styles.ctaSecondary}>
                Talk to us first
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;