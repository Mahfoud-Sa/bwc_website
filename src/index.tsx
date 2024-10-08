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
import AddJob from "./page/(Admin)/jobs/add-job";
import AddReport from "./page/(Admin)/Reports/add-report";
import AddWriter from "./page/(Admin)/writer/add-writer";
import ReferenceInfo from "./components/view/refernce-info";
import ReportsInfo from "./components/view/reports-info";
import TaskForceInfo from "./components/view/task-force-info";
import OrganizationInfo from "./components/view/organization-info";
import ServicesInfo from "./components/view/services-info";
import WriterInfo from "./components/view/writer-info";
import JobInfo from "./components/view/job-info";
import UpdateWriterForm from "./components/form/update-writer";
import UpdateTaskForce from "./components/form/update-taskforce-form";
import UpdateOrg from "./components/form/update-org";
import JoinUs from "./page/(User)/join-us";
import ReportDetials from "./page/(User)/report-detials";

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
    path: "/join-us",
    element: <JoinUs />,
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
        path: "/admin-dashboard/references/info",
        element: <ReferenceInfo />,
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
        path: "/admin-dashboard/organization/info/:id",
        element: <OrganizationInfo />,
      },
      {
        path: "/admin-dashboard/organization/update/:id",
        element: <UpdateOrg />,
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
        path: "/admin-dashboard/reports/info",
        element: <ReportsInfo />,
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
        path: "/admin-dashboard/writer/update-writer/:id",
        element: <UpdateWriterForm />,
      },
      {
        path: "/admin-dashboard/writer/info/:id",
        element: <WriterInfo />,
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
        path: "/admin-dashboard/taskforce/update-employee/:id",
        element: <UpdateTaskForce />,
      },
      {
        path: "/admin-dashboard/taskforce/info/:id",
        element: <TaskForceInfo />,
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
        path: "/admin-dashboard/services/info",
        element: <ServicesInfo />,
      },
      {
        path: "/admin-dashboard/jobs",
        element: <JobsIndex />,
      },
      {
        path: "/admin-dashboard/jobs/add-job",
        element: <AddJob />,
      },
      {
        path: "/admin-dashboard/jobs/info",
        element: <JobInfo />,
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
  {
    path: "/report-detials",
    element: <ReportDetials />,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ReactQueryClientProvider>
    <React.StrictMode>
      <React.Suspense fallback={<Loading/>}>
        <RouterProvider router={router} />
      </React.Suspense>
    </React.StrictMode>
  </ReactQueryClientProvider>
);
reportWebVitals();
