import { lazy } from "react";
import { Navigate } from "react-router-dom";

import LoginPage from "../pages/LoginPage.js";
import ApplicantRegistrationPage from "../pages/ApplicantRegistrationPage.jsx";
import QrCodeGenerator from "../components/QrCodeGenerator.jsx";
import AdmitCard from "../components/AdmitCard.jsx";
import SendEmail from "../components/SendEmail.jsx";
import Home from "../views/ui/Home.jsx";
// import CreateCircular from "../views/ui/CreateCreateCircular.jsx";
import Notification from "../views/ui/Notification.jsx";
// import UploadMarks from "../views/ui/UploadMarks.jsx";;
import CreateCircular from "../views/ui/CreateCircular.jsx";
import ViewCircular from "../views/ui/ViewCircular.jsx";
import ApplicationTable from "../views/ui/ApplicationTable.jsx";
import ApprovedTable from "../views/ui/ApprovedTable.jsx";
import UploadMarks from "../views/UploadMarks/UploadMarks.jsx";
import NoticeBoards from "../views/ui/NoticeBoards.jsx";
import FinalList from "../views/FinalList/FinalList.jsx";
import AddEvaluator from "../views/AddEvaluator/AddEvaluator.jsx";
// import NoticeBoard from "../views/UploadMarks/UploadMarks.jsx";
// import ApplicantRegistrationPage from "../pages/ApplicantRegistrationPage.jsx";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

// /***** Pages ****/

// const Starter = lazy(() => import("../views/Starter.js"));
// const About = lazy(() => import("../views/About.js"));
// const Alerts = lazy(() => import("../views/ui/Alerts"));
// const Badges = lazy(() => import("../views/ui/Badges"));
// const Buttons = lazy(() => import("../views/ui/Buttons"));
// // const Cards = lazy(() => import("../views/ui/Cards"));
// // const Grid = lazy(() => import("../views/ui/Grid"));
// const Tables = lazy(() => import("../views/ui/Tables"));
// const Forms = lazy(() => import("../views/ui/Forms"));
// const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    // element: <LoginPage />,
    element: <FullLayout />,
    children: [
      // { path: "/", element: <Navigate to="/starter" /> },
      // { path: "/starter", exact: true, element: <Starter /> },
      { path: "/home", exact: true, element: <Home /> },
      { path: "/login", exact: true, element: <LoginPage /> },
      { path: "/register", exact: true, element: <ApplicantRegistrationPage /> },
      // { path: "/qrcode", exact: true, element: <QrCodeGenerator /> },
      { path: "/admitcard", exact: true, element: <AdmitCard /> },
      { path: "/sendemail", exact: true, element: <SendEmail /> },
      { path: "/createcircular", exact: true, element: <CreateCircular /> },
      { path: "/home", exact: true, element: <Home /> },
      { path: "/finallist", exact: true, element: <FinalList /> },
      { path: "/noticeboard", exact: true, element: <NoticeBoards /> },
      // { path: "/notification", exact: true, element: <Notification /> },
      { path: "uploadmarks", exact: true, element: <UploadMarks /> },
      { path: "/evaluator", exact: true, element: <AddEvaluator /> },
      { path: "/approved", exact: true, element: <ApprovedTable /> },
      { path: "/uploadmarks", exact: true, element: <UploadMarks /> },
      { path: "/applicationtable", exact: true, element: <ApplicationTable /> },
      {
        path: "/circular", exact: true,
        element: <ViewCircular />
      },
      {
        path: "/admitcard",
        element: <AdmitCard />,
      },

      // { path: "/about", exact: true, element: <About /> },
      // { path: "/alerts", exact: true, element: <Alerts /> },
      // { path: "/badges", exact: true, element: <Badges /> },
      // { path: "/buttons", exact: true, element: <Buttons /> },
      // // { path: "/cards", exact: true, element: <Cards /> },
      // { path: "/table", exact: true, element: <Tables /> },
      // { path: "/forms", exact: true, element: <Forms /> },
      // { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
  {
    // path: "/register",
    // element: <ApplicantRegistrationPage/> ,
    // },
    // {
    // path: "/login",
    // element: <LoginPage /> ,
    // },

    path: "/qrcode",
    element: <QrCodeGenerator />,
  },
  {
    path: "/admitcard",
    element: <AdmitCard />,
  },
  {
    path: "/sendemail",
    element: <SendEmail />,
  },
  // {
  //   path: "/circular",
  //   element: <ViewCircular />
  // },
  {
    path: "/approvedtable",
    element: <ApprovedTable />
  },

];

export default ThemeRoutes;
