import React, { useState, useEffect, useRef } from "react";

const Header = ({ menus }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const ref = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      let headerOffset = ref.current.offsetTop;
      if (headerOffset - window.scrollY <= 0) {
        setIsScroll(true);
      } else {
        setIsScroll(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const onScrollSection = (scroll) => {
    setActiveTab(scroll.tab);
    window.scrollTo({
      top: scroll.section.ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <header
      ref={ref}
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
        {/* navbar navbar navbar-mobile */}
        <nav id="navbar" className="navbar">
          <ul>
            {/* <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li> */}
            {menus.map((menu) => {
              return (
                <li key={menu.id}>
                  <a
                    className={`nav-link scrollto ${
                      activeTab === menu.tab ? "active" : ""
                    }`}
                    href={() => onScrollSection(menu.ref)}
                    onClick={() => onScrollSection(menu)}
                  >
                    {menu?.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
