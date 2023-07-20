import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Notifications as NotificationsIcon } from '@mui/icons-material';
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import pic from "../assets/images/logos/bjit logo.png";
import user1 from "../assets/images/users/user1.jpg";
import { Badge, Popover, OverlayTrigger } from 'react-bootstrap';

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


    const pro = (
      <Popover id="notification-popover">
        <Popover.Content>
          <ul>
            <li>Notification 1</li>
            <li>Notification 2</li>
            <li>Notification 3</li>
          </ul>
          <Button variant="primary">View All</Button>
        </Popover.Content>
      </Popover>
    );
  

  return (
    <Navbar style={{backgroundColor:"#5584AC"}} expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <img className="round" src={pic} alt="" />
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
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/starter" className="nav-link">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/circular" className="nav-link">
              Circular
            </Link>
          </NavItem>
         
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
            <DropdownItem >My Account</DropdownItem>
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
