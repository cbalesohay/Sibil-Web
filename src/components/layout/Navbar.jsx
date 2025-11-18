// 2025 SIBIL LLC. All rights reserved.
// SIBIL Confidential

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    width: "100%",
    borderBottom: "1px solid #e5e5e5",
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(12px)",
  },
  container: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "0 16px",
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
  },
  logo: {
    fontSize: "18px",
    fontWeight: 600,
    letterSpacing: "-0.03em",
    textDecoration: "none",
    color: "#111827",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    fontSize: "14px",
    fontWeight: 500,
  },
  navLink: {
    textDecoration: "none",
    color: "#4b5563",
  },
  navLinkHover: {
    color: "#111827",
  },
  authGroup: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    fontSize: "14px",
    fontWeight: 500,
  },
  loginLink: {
    textDecoration: "none",
    color: "#4b5563",
  },
  primaryButton: {
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "999px",
    backgroundColor: "#111827",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "14px",
  },
  mobileToggle: {
    padding: "6px",
    borderRadius: "8px",
    border: "1px solid #e5e5e5",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "4px",
  },
  mobileBar: {
    width: "18px",
    height: "2px",
    backgroundColor: "#111827",
  },
  mobileMenu: {
    borderTop: "1px solid #e5e5e5",
    backgroundColor: "#ffffff",
  },
  mobileMenuInner: {
    padding: "12px 16px 16px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    fontSize: "14px",
    fontWeight: 500,
  },
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [hoverLink, setHoverLink] = useState(null);

  const linkStyle = (id) => ({
    ...styles.navLink,
    ...(hoverLink === id ? styles.navLinkHover : {}),
  });

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo */}
        <Link to="/" style={styles.logo}>
          Sibil
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <>
            <nav style={styles.nav}>
              <Link
                to="/features"
                style={linkStyle("features")}
                onMouseEnter={() => setHoverLink("features")}
                onMouseLeave={() => setHoverLink(null)}
              >
                Features
              </Link>
              <Link
                to="/pricing"
                style={linkStyle("pricing")}
                onMouseEnter={() => setHoverLink("pricing")}
                onMouseLeave={() => setHoverLink(null)}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                style={linkStyle("about")}
                onMouseEnter={() => setHoverLink("about")}
                onMouseLeave={() => setHoverLink(null)}
              >
                About
              </Link>
            </nav>

            <div style={styles.authGroup}>
              <Link to="/login" style={styles.loginLink}>
                Log in
              </Link>
              <Link to="/register" style={styles.primaryButton}>
                Get Started
              </Link>
            </div>
          </>
        )}

        {/* Mobile Toggle */}
        {isMobile && (
          <button
            type="button"
            style={styles.mobileToggle}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Toggle menu</span>
            <div style={styles.mobileBar} />
            <div style={styles.mobileBar} />
            <div style={styles.mobileBar} />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && open && (
        <div style={styles.mobileMenu}>
          <nav style={styles.mobileMenuInner}>
            <Link to="/features" onClick={() => setOpen(false)}>
              Features
            </Link>
            <Link to="/pricing" onClick={() => setOpen(false)}>
              Pricing
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/login" onClick={() => setOpen(false)}>
              Log in
            </Link>
            <Link
              to="/register"
              onClick={() => setOpen(false)}
              style={styles.primaryButton}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;