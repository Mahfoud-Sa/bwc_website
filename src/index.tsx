import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles.css";
import "./i18n.ts";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import TermsOfUse  from "./page/termsOfUse";
import PrivacyPolicy from "./page/privacyPolicy";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path: "/terms-of-use",
    element:<TermsOfUse/>
  }
  ,
  {
    path: "/privacy-policy",
    element:<PrivacyPolicy/>
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <React.Suspense fallback="loading...">
      <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>
);
reportWebVitals();
