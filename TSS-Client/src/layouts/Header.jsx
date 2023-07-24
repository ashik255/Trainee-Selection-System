import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import pic from "../assets/images/logos/bjit logo.png";
import user1 from "../assets/images/users/user1.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNotificationToggle = () => {
    setShowNotifications(!showNotifications);
  };

  const notificationList = (
    <List>
      <ListItem button>
        <ListItemText primary="Notification 1" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Notification 2" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Notification 3" />
      </ListItem>
    </List>
  );

  return (
    <Navbar style={{ backgroundColor: "#5584AC" }} expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <img style={{ width: '70px', height: '50px' }} className="rounded w-10" src={pic} alt="" />
        </NavbarBrand>
        <Button
          color="primary"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>
      <Collapse navbar isOpen={isOpen}>
        <Link to="/" className="nav-lin" navbar>
          <img style={{ width: '50px', height: '50px' }} className="rounde" src={pic} alt="" />
        </Link>
        <Nav className="mx-auto text-white " navbar>

          {/* <div className="ml-"> */}
          <NavItem>
            <Link to="/home" className="nav-link">
              <h5 className="text-center ">Home</h5>
            </Link>
          </NavItem>

          <Link to="/dashboard" className="nav-link">
            <h5>DashBoard</h5>
          </Link>
          <NavItem className="m">
            <Link to="/login" className="nav-link">
              <h5>Login</h5>
            </Link>
          </NavItem>
          {/* </div> */}
        </Nav>
        <IconButton color="inherit" onClick={handleNotificationToggle}>
          <NotificationsIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={showNotifications}
          onClose={() => setShowNotifications(false)}
        >
          {notificationList}
        </Drawer>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="">
            <img
              src={user1}
              alt="profile"
              className="rounded-circle"
              width="45"
            ></img>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>My Account</DropdownItem>
            <DropdownItem>Edit Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>My Balance</DropdownItem>
            <DropdownItem>Inbox</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
