import React, { useState } from "react";
import { useLocation } from "react-router";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from "mdbreact";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const toggleCollapse = () => {
    setIsOpen({ isOpen: !isOpen });
  };

  return (
    <div>
      <MDBNavbar color="black" dark expand="md" id="navDisplay">
        <MDBNavbarBrand>
          <strong className="white-text">Society e-Portal</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active = {location.pathname==="/"}>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active = {location.pathname==="/facilities"}>
              <MDBNavLink to="/facilities">Facilities</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active = {location.pathname==="/events"}>
              <MDBNavLink to="/events">Events</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active = {location.pathname==="/aboutus"}>
              <MDBNavLink to="/aboutus">About Us</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              {/* <MDBDropdownToggle nav caret>
                <MDBIcon icon="user" />
                <MDBIcon icon="user-plus" />
              </MDBDropdownToggle> */}
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/form">
                <MDBIcon icon="user-plus" style={{ paddingRight: "8px" }} />
                Login
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </div>
  );
};

export default Navbar1;
