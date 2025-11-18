// 2025 SIBIL LLC. All rights reserved.
// SIBIL Confidential

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
    maxWidth: "540px",
  },

  // Layout
  grid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.4fr)",
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

  // Values
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "16px",
    marginTop: "10px",
  },
  valueCard: {
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    padding: "12px 12px 10px",
    backgroundColor: "#ffffff",
  },
  valueName: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#111827",
    marginBottom: "4px",
  },
  valueText: {
    fontSize: "13px",
    lineHeight: 1.6,
    color: "#6b7280",
  },

  // Side card
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
};

export const AboutPage = () => {
  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.eyebrow}>About Sibil</div>
        <h1 style={styles.title}>A calmer way to run serious work.</h1>
        <p style={styles.subtitle}>
          Sibil exists because most teams don’t suffer from a lack of tools.
          They suffer from a lack of clarity. We’re building an operational
          layer that sits above the stack you already use and makes it legible.
        </p>
      </header>

      {/* Main layout */}
      <div style={styles.grid}>
        {/* Left column */}
        <div style={styles.stack}>
          <section>
            <div style={styles.sectionTitle}>Why we’re here</div>
            <p style={styles.bodyText}>
              Modern teams are drowning in dashboards, pings, docs, and project
              boards. Every tool is “mission critical,” but no single place
              tells you what actually matters today.
            </p>
            <p style={styles.bodyText}>
              Sibil is our answer to that. Instead of forcing yet another way to
              work, we connect to the systems you already trust and surface the
              few signals that matter for decisions, accountability, and focus.
            </p>
          </section>

          <section>
            <div style={styles.sectionTitle}>What we’re building</div>
            <p style={styles.bodyText}>
              At its core, Sibil is an operational intelligence layer: a
              structured, trustworthy view of work that spans tools, teams, and
              time. It’s designed for founders, department leads, and operators
              who need to see the whole board without asking everyone for “a
              quick update.”
            </p>
            <p style={styles.bodyText}>
              We care about accuracy over theatrics, calm clarity over noisy
              dashboards, and long-term partnerships over one-off licenses.
            </p>
          </section>

          <section>
            <div style={styles.sectionTitle}>How we work</div>
            <p style={styles.bodyText}>
              We’re product-obsessed and implementation-aware. That means:
            </p>
            <ul style={styles.bulletList}>
              <li style={styles.bulletItem}>
                We ship fast, but not at the cost of trust or data quality.
              </li>
              <li style={styles.bulletItem}>
                We design for operators as much as for leadership.
              </li>
              <li style={styles.bulletItem}>
                We treat integrations and onboarding as first-class product
                problems, not “services.”
              </li>
            </ul>
          </section>

          <section>
            <div style={styles.sectionTitle}>The principles behind Sibil</div>
            <div style={styles.valuesGrid}>
              <div style={styles.valueCard}>
                <div style={styles.valueName}>Clarity over volume</div>
                <div style={styles.valueText}>
                  We’d rather show you five decisive signals than fifty charts.
                  Every surface should answer a real question.
                </div>
              </div>
              <div style={styles.valueCard}>
                <div style={styles.valueName}>Trust in the data</div>
                <div style={styles.valueText}>
                  If people don’t trust what they see, they won’t act on it.
                  We prioritize correctness, lineage, and context.
                </div>
              </div>
              <div style={styles.valueCard}>
                <div style={styles.valueName}>Calm by design</div>
                <div style={styles.valueText}>
                  Sibil should lower anxiety, not raise it. Thoughtful defaults,
                  clear states, and no vanity alerts.
                </div>
              </div>
              <div style={styles.valueCard}>
                <div style={styles.valueName}>Partner, not vendor</div>
                <div style={styles.valueText}>
                  We’re here to become part of how you run the company, not just
                  another tool on an invoice.
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right column (side card) */}
        <aside style={styles.sideCard}>
          <div style={styles.sideLabel}>Approach</div>
          <div style={styles.sideTitle}>Start small, earn trust, then scale.</div>
          <p style={styles.sideText}>
            We don’t believe in 6-month “transformations” that never land.
            Instead, we pick one or two high-leverage workflows, wire Sibil in,
            and prove the value end-to-end.
          </p>
          <p style={styles.sideText}>
            From there, we expand calmly—team by team, surface by surface—
            until Sibil becomes the obvious place you go to understand how the
            company is actually operating.
          </p>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>Tight, opinionated product core</li>
            <li style={styles.bulletItem}>Serious about implementation support</li>
            <li style={styles.bulletItem}>Pricing that reflects partnership</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default AboutPage;