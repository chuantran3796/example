import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import TabItem from "./TabItem";

const Portfolio = React.forwardRef((props, ref) => {
  const [tabActive, setTabActive] = useState("all");
  const _data = [
    {
      id: 1,
      image: require("../../assets/img/portfolio/portfolio-1.jpg"),
      name: "App 1",
      description: "App",
      link: "../../assets/img/portfolio/portfolio-1.jpg",
      type: "app",
    },
    {
      id: 2,
      image: require("../../assets/img/portfolio/portfolio-2.jpg"),
      name: "App 1",
      description: "App",
      link: "../../assets/img/portfolio/portfolio-1.jpg",
      type: "app",
    },
    {
      id: 3,
      image: require("../../assets/img/portfolio/portfolio-3.jpg"),
      name: "App 1",
      description: "App",
      link: "../../assets/img/portfolio/portfolio-1.jpg",
      type: "app",
    },
    {
      id: 4,
      image: require("../../assets/img/portfolio/portfolio-4.jpg"),
      name: "App 1",
      description: "App",
      link: "../../assets/img/portfolio/portfolio-1.jpg",
      type: "card",
    },
    {
      id: 5,
      image: require("../../assets/img/portfolio/portfolio-5.jpg"),
      name: "App 1",
      description: "App",
      link: "../../assets/img/portfolio/portfolio-1.jpg",
      type: "card",
    },
    {
      id: 6,
      image: require("../../assets/img/portfolio/portfolio-6.jpg"),
      name: "App 1",
      description: "App",
      link: "../../assets/img/portfolio/portfolio-1.jpg",
      type: "app",
    },
    {
      id: 7,
      image: require("../../assets/img/portfolio/portfolio-7.jpg"),
      name: "App 1",
      description: "App",
      link: "../../assets/img/portfolio/portfolio-1.jpg",
      type: "web",
    },
    {
      id: 8,
      image: require("../../assets/img/portfolio/portfolio-8.jpg"),
      name: "App 1",
      description: "App",
      link: "../../assets/img/portfolio/portfolio-1.jpg",
      type: "web",
    },
    {
      id: 9,
      image: require("../../assets/img/portfolio/portfolio-9.jpg"),
      name: "App 1",
      description: "App",
      link: "../../assets/img/portfolio/portfolio-1.jpg",
      type: "web",
    },
  ];

  const tabs = [
    {
      id: 1,
      key: "all",
      name: "All",
    },
    {
      id: 2,
      key: "app",
      name: "App",
    },
    {
      id: 3,
      key: "card",
      name: "Card",
    },
    {
      id: 4,
      key: "web",
      name: "Web",
    },
  ];

  const onChange = (k) => {
    setTabActive(k);
  };

  return (
    <section id="portfolio" className="portfolio section-bg" ref={ref}>
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              {tabs.map((tab, index) => {
                return (
                  <TabItem
                    data={tab}
                    key={index}
                    active={tabActive}
                    onChange={onChange}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          {_data.map((p, index) => {
            return (
              <PortfolioItem
                image={p.image}
                name={p.name}
                description={p.description}
                link={p.link}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
});

Portfolio.propTypes = {};

export default React.memo(Portfolio);
