import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [position, setPosition] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;
      setIsScroll(position > moving ? false : true);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      id="header"
      className={`d-flex align-items-center ${isScroll && "fixed-top"}`}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1>
            <a href="index.html">Lonely</a>
          </h1>
          {/* <a href="index.html">
            <img
              src={require("../../src/assets/img/logo.png")}
              alt=""
              className="img-fluid"
            />
          </a> */}
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="dropdown">
              {/* <a href="#">
                <span>Drop Down</span> <i className="bi bi-chevron-down" />
              </a> */}
              <ul>
                {/* <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li> */}
              </ul>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
