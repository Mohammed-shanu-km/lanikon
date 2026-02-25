import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

import bluelogo from "../../assets/la.svg";

const Navbar2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const smoothScroll = (id) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        setIsMobileMenuOpen(false);
      }
    }, 500);
  };

  return (
    <div className="header">
      <nav className="navbar">
        <div className="mobile-header hidden sm-max:block sm-max:flex md-small:block md-small:flex">
          <Link to="/">
            <div>
              <img
                className="h-[60px] md-max:h-[40px] md-small:h-[40px] sm-max:h-[30px]"
                src={bluelogo}
                alt="Logo"
              />
            </div>
          </Link>
          {isMobileMenuOpen ? (
            <MdOutlineClose
              size={30}
              onClick={toggleMobileMenu}
              className="md-outline-close"
              style={{ color: "#002955" }}
            />
          ) : (
            <RxHamburgerMenu
              size={35}
              id="hamburger-icon"
              onClick={toggleMobileMenu}
            />
          )}
        </div>

        <div className="">
          <img
            className="h-[40px] lg-small:h-[40px] md-max:h-[40px] md-small:h-[35px] sm-max:h-[10px]"
            src={bluelogo}
            alt="Logo"
          />
        </div>

        <div
          className={`nav-links-div ${isMobileMenuOpen ? "mobile-menu" : ""}`}
        >
          <ul className="nav-links">
            <li
              onClick={() => {
                smoothScroll("home");
                setIsMobileMenuOpen(false);
              }}
            >
              <Link to="/">
                <h6 className="single">Home</h6>
              </Link>
            </li>
            <li
              onClick={() => {
                smoothScroll("service");
                setIsMobileMenuOpen(false);
              }}
            >
              <Link to="/about">
                <h6>About</h6>
              </Link>
            </li>
            <li
              onClick={() => {
                smoothScroll("project");
                setIsMobileMenuOpen(false);
              }}
            >
              <Link to="/services">
                <h6>Services</h6>
              </Link>
            </li>
            <li
              onClick={() => {
                smoothScroll("contact");
                setIsMobileMenuOpen(false);
              }}
            >
              <Link to="/contact">
                <h6>Contact</h6>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-[30px]">
          <div className="sm-max:hidden">
            <Link
              to="/contact"
              onClick={() => {
                smoothScroll("contact");
                setIsMobileMenuOpen(false);
              }}
            >
              <div className="flex flex-col gap-[5px]">
                <h1 className="text-[14px] text-[#0a2343] font-[500]">
                  Have any questions?
                </h1>
                <h1 className="text-[14px] text-[#0a2343] font-[500]">
                  +971 56 644 5949
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
