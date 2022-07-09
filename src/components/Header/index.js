import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ menus }) => {
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

  const onScrollSection = (scroll) => {
    console.log(scroll);
    // window.scrollTo({
    //   top: "",
    //   behavior: "smooth",
    // });
  };
  //  Animation  window.scrollTo({})
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
            {menus.map((menu) => (
              <li key={menu.id}>
                <a
                  className={"nav-link scrollto"}
                  href={() => onScrollSection(menu.ref)}
                >
                  {menu?.name}
                </a>
              </li>
            ))}
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
