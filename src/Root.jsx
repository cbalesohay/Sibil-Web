// 2025 SIBIL LLC. All rights reserved.
// SIBIL Confidential

import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

const styles = {
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
  },
  main: {
    flex: 1,
  },
  pageContainer: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "32px 16px 48px",
  },
};

// export default function RootLayout() {
export const Root = () => {
  return (
    <div style={styles.root}>
      <Navbar />

      <main style={styles.main}>
        <div style={styles.pageContainer}>
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Root;