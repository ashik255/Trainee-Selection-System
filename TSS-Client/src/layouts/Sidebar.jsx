import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "HOME",
    href: "/home",
    icon: "bi bi-house-door",
  },
  {
    title: "CreateCircular",
    href: "/createcircular",
    icon: "bi bi-patch-check",
  },
  {
    title: "Circular",
    href: "/circular",
    icon: "bi bi-patch-check",
  },
  {
    title: "Admit Card",
    href: "/admitcard",
    icon: "bi bi-bell",
  }, 

  {
    title: "Add EVALUATOR",
    href: "/evaluator",
    icon: "bi bi-card-text",
  },
  {
    title: "Login",
    href: "/login",
    icon: "bi bi-box-arrow-in-right",
  },
  {
    title: "Application Table",
    href: "/applicationtable",
    icon: "bi bi-layout-split",
  },
  {
    title: "APPROVED Table",
    href: "/approved",
    icon: "bi bi-layout-split",
  },
  {
    title: "FINAL LIST",
    href: "/finallist",
    icon: "bi bi-list-ul",
  },
  {
    title: "Register",
    href: "/register",
    icon: "bi bi-link",
  },
  {
    title: "UPLOAD MARKS",
    href: "/uploadmarks",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Sendmail",
    href: "/sendemail",
    icon: "bi bi-bag-dash",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <span className="ms-auto d-lg-none">
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
        </span>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://bjitacademy.com/"
          >
            BJIT ACADEMY
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
