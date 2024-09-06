import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles.css";
import "./i18n.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TermsOfUse from "./page/(User)/termsOfUse";
import PrivacyPolicy from "./page/(User)/privacyPolicy";
import LoginPage from "./page/(Admin)/loginPage";
import DashboardPage from "./page/(Admin)/dashboardPage";
import Try from "./page/try";
import NoAccess from "./page/(Admin)/noaccess";
import InProucation from "./page/(User)/in-proucation";
import AboutUs from "./page/(User)/aboutUs";
import RefreshTokenPage from "./page/(Admin)/refreshTokenPage";
import References from "./page/(Admin)/ReferncesPage/References";
import AddRefernces from "./page/(Admin)/ReferncesPage/add-refernces";
import Page from "./page/(Admin)/organizations-under-bwc/page";
import Index from "./page/(Admin)/Reports";
import PublicationIndex from "./page/(Admin)/Publications/Publication";
import NewsIndex from "./page/(Admin)/Publications/News";
import AnalysisIndex from "./page/(Admin)/Publications/Analysis";
import WriterIndex from "./page/(Admin)/writer";
import TaskForceIndex from "./page/(Admin)/task-force";
import Loading from "./components/loading";
import NotFoundPage from "./components/notfoundpage";
import { ReactQueryClientProvider } from "./provider/ReactQueryClientProvider";
import UpdateReferenceForm from "./components/form/update-refernce-form";
import AddEmployee from "./page/(Admin)/task-force/add-employee";
import AddOrg from "./page/(Admin)/organizations-under-bwc/add-org";
import ServicesIndex from "./page/(Admin)/services";
import AddServicesIndex from "./page/(Admin)/services/add-services";
import JobsIndex from "./page/(Admin)/jobs";
import AddJobs from "./page/(Admin)/jobs/add-job";
import AddJob from "./page/(Admin)/jobs/add-job";
import AddReport from "./page/(Admin)/Reports/add-report";
import AddWriter from "./page/(Admin)/writer/add-writer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/terms-of-use",
    element: <TermsOfUse />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin-dashboard",
    element: <DashboardPage />,
    children: [
      {
        path: "/admin-dashboard/references",
        element: <References />,
      },
      {
        path: "/admin-dashboard/references/add",
        element: <AddRefernces />,
      },
      {
        path: "/admin-dashboard/references/update/:id",
        element: <UpdateReferenceForm />,
      },
      {
        path: "/admin-dashboard/organization",
        element: <Page />,
      },
      {
        path: "/admin-dashboard/organization/add-org",
        element: <AddOrg />,
      },
      {
        path: "/admin-dashboard/reports",
        element: <Index />,
      },
      {
        path: "/admin-dashboard/reports/add-report",
        element: <AddReport />,
      },
      {
        path: "/admin-dashboard/publications",
        element: <PublicationIndex />,
      },
      {
        path: "/admin-dashboard/news",
        element: <NewsIndex />,
      },
      {
        path: "/admin-dashboard/analysis",
        element: <AnalysisIndex />,
      },
      {
        path: "/admin-dashboard/writer",
        element: <WriterIndex />,
      },
      {
        path: "/admin-dashboard/writer/add-writer",
        element: <AddWriter />,
      },
      {
        path: "/admin-dashboard/taskforce",
        element: <TaskForceIndex />,
      },
      {
        path: "/admin-dashboard/taskforce/add-employee",
        element: <AddEmployee />,
      },
      {
        path: "/admin-dashboard/services",
        element: <ServicesIndex />,
      },
      {
        path: "/admin-dashboard/services/add-services",
        element: <AddServicesIndex />,
      },
      {
        path: "/admin-dashboard/jobs",
        element: <JobsIndex />,
      },
      {
        path: "/admin-dashboard/jobs/add-job",
        element: <AddJob />,
      },
    ],
  },
  {
    path: "/NoAccess",
    element: <NoAccess />,
  },
  {
    path: "/InProucation",
    element: <InProucation />,
  },
  {
    path: "/RefreshToken",
    element: <RefreshTokenPage />,
  },
  {
    path: "/try",
    element: <Try />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ReactQueryClientProvider>
    <React.StrictMode>
      <React.Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </React.Suspense>
    </React.StrictMode>
  </ReactQueryClientProvider>
);
reportWebVitals();
