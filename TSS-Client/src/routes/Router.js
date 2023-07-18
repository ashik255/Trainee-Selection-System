import { lazy } from "react";
import { Navigate } from "react-router-dom";

import LoginPage from "../pages/LoginPage.js";
import ApplicantRegistrationPage from "../pages/ApplicantRegistrationPage.jsx";
import QrCodeGenerator from "../components/QrCodeGenerator.jsx";
import AdmitCard from "../components/AdmitCard.js";
import SendEmail from "../components/SendEmail.jsx";
import Home from "../views/ui/Home.jsx";
import Circular from "../views/ui/Circular.jsx";
import FinalList from "../views/ui/FinalList.jsx";
import NoticeBoard from "../views/ui/NoticeBoard.jsx";
import Notification from "../views/ui/Notification.jsx";
import Approved from "../views/ui/Approved.jsx";
import UploadMarks from "../views/ui/UploadMarks.jsx";
import Evaluator from "../views/ui/Evaluator.jsx";
// import ApplicantRegistrationPage from "../pages/ApplicantRegistrationPage.jsx";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
// const Cards = lazy(() => import("../views/ui/Cards"));
// const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/home", exact: true, element: <Home />},
      { path: "/login", exact: true, element: <LoginPage /> },
      { path: "/register", exact: true, element: <ApplicantRegistrationPage /> },
      // { path: "/qrcode", exact: true, element: <QrCodeGenerator /> },
      { path: "/admitcard", exact: true, element: <AdmitCard /> },
      { path: "/sendemail", exact: true, element: <SendEmail /> },
      { path: "/ciucular", exact: true, element: <Circular />},
      { path: "/home", exact: true, element: <Home />},
    {path: "/finallist" , exact: true, element: <FinalList />},
    {path:"/noticeboard" , exact: true, element: <NoticeBoard />},
    {path:"/notification" , exact: true, element: <Notification />},
    {path:"uploadmarks" , exact: true, element: <UploadMarks/>},
    {path:"/evaluator" , exact: true, element: <Evaluator/>}, 
    {path:"/approved" , exact: true, element: <Approved/>},
    {path:"/uploadmarks" , exact: true, element: <UploadMarks/>},
    
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
    element: <QrCodeGenerator/>,
    },
    {
      path: "/admitcard",
      element: <AdmitCard/>,
      },
      {
        path: "/sendemail",
        element:<SendEmail/>,
        }
  

];

export default ThemeRoutes;
