import React, { useState, useEffect } from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  const showNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Update isMobileView when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Nav>
        <NavMenu isOpen={isNavbarOpen}>
          <NavLink to="/Home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/About" activeStyle>
            About
          </NavLink>
          <NavLink to="/Department" activeStyle>
            Department
          </NavLink>
          <NavLink to="/COURSES" activeStyle>
            COURSES
          </NavLink>
          <NavLink to="/ADMISSION" activeStyle>
            ADMISSION
          </NavLink>
          <NavLink to="/ACTIVITIES" activeStyle>
            ACTIVITIES
          </NavLink>
          <NavLink to="/ACADEMICS" activeStyle>
            ACADEMICS
          </NavLink>
          <NavLink to="/MEDIA" activeStyle>
            MEDIA
          </NavLink>
          <NavLink to="/NIRF" activeStyle>
            NIRF
          </NavLink>
          <NavLink to="/GALLERY" activeStyle>
            GALLERY
          </NavLink>
          <NavLink to="/CONTACT US" activeStyle>
            CONTACT US
          </NavLink>
        </NavMenu>
        {isMobileView && (
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        )}
        {isMobileView && (
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
