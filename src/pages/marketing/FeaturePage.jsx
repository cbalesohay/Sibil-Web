// 2025 SIBIL LLC. All rights reserved.
// SIBIL Confidential

// src/routes/features.jsx
import { Link } from "react-router-dom";

const styles = {
  page: {
    padding: "16px 0 72px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
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
    maxWidth: "560px",
  },

  // Main layout
  grid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.3fr)",
    gap: "32px",
    marginTop: "24px",
  },
  stack: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  sectionTitle: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#111827",
    marginBottom: "4px",
  },
  bodyText: {
    fontSize: "14px",
    lineHeight: 1.7,
    color: "#4b5563",
  },

  // Feature blocks
  featureGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
    marginTop: "10px",
  },
  featureCard: {
    borderRadius: "14px",
    border: "1px solid #e5e7eb",
    padding: "14px 14px 12px",
    backgroundColor: "#ffffff",
  },
  featureName: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#111827",
    marginBottom: "4px",
  },
  featureText: {
    fontSize: "13px",
    lineHeight: 1.6,
    color: "#6b7280",
  },
  pill: {
    fontSize: "11px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    padding: "3px 8px",
    borderRadius: "999px",
    border: "1px solid #e5e7eb",
    color: "#6b7280",
    marginBottom: "6px",
    display: "inline-block",
  },

  // “How it works” card
  sideCard: {
    borderRadius: "16px",
    border: "1px solid #e5e7eb",
    padding: "16px 16px 14px",
    backgroundColor: "#f9fafb",
  },
  sideLabel: {
    fontSize: "11px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    color: "#6b7280",
    marginBottom: "8px",
  },
  sideTitle: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#111827",
    marginBottom: "6px",
  },
  sideText: {
    fontSize: "13px",
    lineHeight: 1.6,
    color: "#4b5563",
    marginBottom: "8px",
  },
  bulletList: {
    fontSize: "13px",
    lineHeight: 1.6,
    color: "#4b5563",
    paddingLeft: "18px",
  },
  bulletItem: {
    marginBottom: "2px",
  },

  // CTA strip
  ctaStrip: {
    marginTop: "36px",
    padding: "16px 16px 14px",
    borderRadius: "16px",
    border: "1px solid #e5e7eb",
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ctaText: {
    fontSize: "14px",
    color: "#4b5563",
    maxWidth: "380px",
  },
  ctaStrong: {
    fontWeight: 600,
    color: "#111827",
  },
  ctaActions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
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
    fontWeight: 500,
    textDecoration: "none",
    border: "1px solid #e5e7eb",
  },
};

export const FeaturePage = () => {
  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.eyebrow}>Features</div>
        <h1 style={styles.title}>An operational layer above your tools.</h1>
        <p style={styles.subtitle}>
          Sibil doesn’t try to replace your stack. It connects to it, makes
          sense of it, and gives leaders and operators the truth about how work
          is actually flowing.
        </p>
      </header>

      <div style={styles.grid}>
        {/* Left column: core capabilities */}
        <div style={styles.stack}>
          {/* Visibility */}
          <section>
            <div style={styles.sectionTitle}>Unified visibility</div>
            <p style={styles.bodyText}>
              Get a single lens across product, GTM, ops, and leadership—
              without asking everyone for a status update. Sibil pulls from the
              tools you already rely on and organizes them around how you run
              the business.
            </p>

            <div style={styles.featureGroup}>
              <div style={styles.featureCard}>
                <div style={styles.featureName}>Cross-tool views</div>
                <div style={styles.featureText}>
                  Build views that span tickets, deals, docs, and tasks so you
                  see initiatives end-to-end, not tool by tool.
                </div>
              </div>
              <div style={styles.featureCard}>
                <div style={styles.featureName}>Live status surfaces</div>
                <div style={styles.featureText}>
                  Replace static reports with living boards that always reflect
                  the current state of work.
                </div>
              </div>
            </div>
          </section>

          {/* Automation */}
          <section>
            <div style={styles.sectionTitle}>Operational automation</div>
            <p style={styles.bodyText}>
              Sibil handles the boring glue work: keeping fields in sync,
              updating status from real events, and nudging owners when things
              drift. Your team focuses on decisions, not manual upkeep.
            </p>

            <div style={styles.featureGroup}>
              <div style={styles.featureCard}>
                <div style={styles.featureName}>Rules based on real events</div>
                <div style={styles.featureText}>
                  Trigger updates when work moves stages, risks are detected, or
                  SLAs are at risk—not just on a cron schedule.
                </div>
              </div>
              <div style={styles.featureCard}>
                <div style={styles.featureName}>System-to-system sync</div>
                <div style={styles.featureText}>
                  Keep key fields aligned across tools so leaders aren’t
                  comparing three different truths in three different places.
                </div>
              </div>
            </div>
          </section>

          {/* Reporting */}
          <section>
            <div style={styles.sectionTitle}>Decision-ready reporting</div>
            <p style={styles.bodyText}>
              Sibil is built for operators and leadership, not just analytics
              teams. The goal isn’t more charts—it’s faster, calmer decisions
              based on trusted data.
            </p>

            <div style={styles.featureGroup}>
              <div style={styles.featureCard}>
                <div style={styles.featureName}>Operator-friendly dashboards</div>
                <div style={styles.featureText}>
                  Clear, opinionated dashboards that map to how you actually run
                  reviews and check-ins.
                </div>
              </div>
              <div style={styles.featureCard}>
                <div style={styles.featureName}>Narrative views</div>
                <div style={styles.featureText}>
                  Surfaces that read more like a story than a spreadsheet, so
                  leaders can see what changed and why.
                </div>
              </div>
            </div>
          </section>

          {/* Principles as features */}
          <section>
            <div style={styles.sectionTitle}>Built on a few non-negotiables</div>
            <div style={styles.featureGroup}>
              <div style={styles.featureCard}>
                <div style={styles.pill}>Trust</div>
                <div style={styles.featureName}>Data you can stand behind</div>
                <div style={styles.featureText}>
                  Source-aware, explainable views so you can answer “Where is
                  this coming from?” in one click.
                </div>
              </div>
              <div style={styles.featureCard}>
                <div style={styles.pill}>Calm</div>
                <div style={styles.featureName}>Signal over noise</div>
                <div style={styles.featureText}>
                  No vanity alerts, no blinking dashboards—just the handful of
                  risks and opportunities that matter today.
                </div>
              </div>
              <div style={styles.featureCard}>
                <div style={styles.pill}>Fit</div>
                <div style={styles.featureName}>Your stack, not ours</div>
                <div style={styles.featureText}>
                  Sibil adapts to your systems and workflows instead of forcing
                  everyone into a new tool.
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right column: How it works card */}
        <aside style={styles.sideCard}>
          <div style={styles.sideLabel}>How Sibil fits in</div>
          <div style={styles.sideTitle}>A layer above, not a tool instead of.</div>
          <p style={styles.sideText}>
            Sibil connects to the tools you already use—project management,
            CRMs, ticketing, docs—and models the work that cuts across them.
            You keep the stack. Sibil makes it coherent.
          </p>
          <p style={styles.sideText}>
            A typical rollout focuses on one or two critical flows first:
            launches, revenue programs, or key customer journeys. From there,
            we expand to the rest of the operating rhythm.
          </p>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>Connect key systems and define entities</li>
            <li style={styles.bulletItem}>Model initiatives, owners, and states</li>
            <li style={styles.bulletItem}>Build operator-friendly views</li>
            <li style={styles.bulletItem}>Layer in automation and alerts</li>
          </ul>
        </aside>
      </div>

      {/* CTA strip */}
      <section style={styles.ctaStrip}>
        <p style={styles.ctaText}>
          <span style={styles.ctaStrong}>Want to see Sibil on your workflows?</span>{" "}
          We’ll start with one or two high-leverage initiatives and prove the
          value before you roll it out wider.
        </p>
        <div style={styles.ctaActions}>
          <Link to="/demo" style={styles.primaryButton}>
            Book a working session
          </Link>
          <Link to="/pricing" style={styles.secondaryButton}>
            View pricing
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FeaturePage