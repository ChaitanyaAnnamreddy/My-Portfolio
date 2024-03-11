import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbarLogo">Your Logo</div>
      <div className="navbarLinks">
        <Link to="about" smooth={true} duration={500} offset={-50}>
          About
        </Link>
        <Link to="skills" smooth={true} duration={500} offset={-50}>
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500} offset={-50}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} offset={-50}>
          Contact
        </Link>
      </div>
      <div className="mobileMenuIcon" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobileMenu">
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={toggleMobileMenu}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={toggleMobileMenu}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
