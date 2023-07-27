import { lazy } from "react";
import { Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage.jsx";
import ApplicantRegistrationPage from "../pages/ApplicantRegistrationPage.jsx";
import QrCodeGenerator from "../components/QrCodeGenerator.jsx";
import AdmitCard from "../components/AdmitCard.jsx";
import SendEmail from "../components/SendEmail.jsx";
import ViewCircular from "../views/ui/ViewCircular.jsx";
import ApplicationTable from "../views/ui/ApplicationTable.jsx";
import ApprovedTable from "../views/ui/ApprovedTable.jsx";
import UploadMarks from "../views/UploadMarks/UploadMarks.jsx";
import NoticeBoards from "../views/ui/NoticeBoards.jsx";
import FinalList from "../views/FinalList/FinalList.jsx";
import Header from "../layouts/Header.jsx";
import AddEvaluator from "../views/Evaluator/AddEvaluator.jsx";
import CarouselComponent from "../components/carousel/CarouselComponent.jsx";
import Blog from "../components/Blog/Blog.jsx";
import Home from "../pages/Home.jsx";
import CreateCircular from "../views/Circular/CreateCircular.jsx";
import CircularDetails from "../views/Circular/CircularDetails.jsx";
import ViewEvaluator from "../views/Evaluator/ViewEvaluator.jsx";
import Test from "../components/Test.jsx";


/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.jsx"));


const ThemeRoutes = [
  {
    path: "/",

    element: <FullLayout />,
    children: [
      
      { path: "/login", exact: true, element: <LoginPage /> },
      { path: "/register", exact: true, element: <ApplicantRegistrationPage /> },
      { path: "/admitcard", exact: true, element: <AdmitCard /> },
      { path: "/sendemail", exact: true, element: <SendEmail /> },
      { path: "/createcircular", exact: true, element: <CreateCircular /> },
      { path: "/home", exact: true, element: <Home /> },
      { path: "/finallist", exact: true, element: <FinalList /> },
      { path: "/noticeboard", exact: true, element: <NoticeBoards /> },
      { path: "uploadmarks", exact: true, element: <UploadMarks /> },
      { path: "/evaluator", exact: true, element: <AddEvaluator /> },
      { path: "/approved", exact: true, element: <ApprovedTable /> },
      { path: "/uploadmarks", exact: true, element: <UploadMarks /> },
      { path: "/applicationtable", exact: true, element: <ApplicationTable /> },
      {
        path: "/circular", exact: true,
        path: "/circular",
        element: <ViewCircular />
      },
      {
        path: "/admitcard",
         path: "/admitcard",
        element: <AdmitCard />,
      },
      {
        path:"/test",
        element:<Test/>
      },
      {
      path: "/qrcode",
      element: <QrCodeGenerator />,
    },
    ],
  },
  {
    path: "/admitcard",
    element: <AdmitCard />,
  },
  {
    path: "/sendemail",
    element: <SendEmail />,
  },
  {
    path: "/approvedtable",
    element: <ApprovedTable />
  },
  {
    path: "/carosel",
    element: <CarouselComponent/>
  },
  {
    path: "/blog",
    element: <Blog/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/circulardetails",
    path: "/circulardetails/:circularId",
    element: <CircularDetails />
  },
  {
    path: "/viewevaluator",
    element: <ViewEvaluator />
  }

];
export default ThemeRoutes;