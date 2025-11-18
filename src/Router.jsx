// 2025 SIBIL LLC. All rights reserved.
// SIBIL Confidential

import { createBrowserRouter } from "react-router-dom";
import Root from "./root.jsx";
import { HomePage } from "./pages/marketing/HomePage.jsx";
import { PricingPage } from "./pages/marketing/PricingPage.jsx";
import { AboutPage } from "./pages/marketing/AboutPage.jsx";
import { FeaturePage } from "./pages/marketing/FeaturePage.jsx";

export const Router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },

      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "features",
        element: <FeaturePage />,
      },
      
    ],
  },
]);