import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import books from "./Books";

function Navigation() {
  
  const [navBackground, setNavBackground] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleScroll = () => {
    const show = window.scrollY > 100;
    if (show) {
      setNavBackground(true);
      setIsNavOpen(false); // Close the navigation menu on scroll
    } else {
      setNavBackground(false);
    }
  };
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      if (show) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyle = {
    backgroundColor: navBackground ? "black" : "transparent",
    transition: "background-color 0.5s ease-out",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={navStyle}
      >
        <div className=" px-4 px-lg-5 w-100">
          <button
            className="navbar-toggler nav-menu"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={isNavOpen ? "" : "#navbarSupportedContent"}
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleNav} // Add onClick event handler
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse navbar-search-links ${
              isNavOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item fw-bolder my-2 my-sm-0">
                <a className="nav-link active" aria-current="page" href="#!">
                  <Link
                    to="/"
                    style={{ textDecoration: "none"}}
                    onClick={toggleNav}
                  >
                    Home
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link
                    to="/about"
                    style={{ textDecoration: "none"}}
                    onClick={toggleNav}
                  >
                    About Us
                  </Link>
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link
                    to="/library"
                    style={{ textDecoration: "none" }}
                    onClick={toggleNav}
                  >
                    Library
                  </Link>
                </a>
              </li>
            </ul>
            <div>
              
                <div className="d-flex">
                  <p className=" my-2 mx-2 my-sm-0">
                    <a className="nav-link" href="#">
                      <Link
                        className="btn btn-success"
                        to="/login"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        login
                      </Link>
                    </a>
                  </p>
                  <p className="mx-2 my-2 my-sm-0">
                    <a className="nav-link" href="#">
                      <Link
                        className="btn btn-primary"
                        to="/signup"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        sign up
                      </Link>
                    </a>
                  </p>
                </div>
            </div>
          </div>
        </div>
      </nav>
      <header className="bg-dark py-2" style={{ marginTop: "56px" }}>
        <div className="container px-2 px-lg-2 my-2">
          <div className="logo-search text-light">
            <h2 className="display-5 text-success">SA Books</h2>
            <input type="search" name="" id="" className="search-bar" placeholder="Books , Author , Publisher ..." />
          </div>
        </div>
      </header>
    </>
  );
}

export default Navigation;