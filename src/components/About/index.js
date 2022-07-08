import React from "react";
import AboutItem from "./AboutItem";

const About = (props) => {
  const _data = {
    title: "Voluptatem dignissimos provident quasi",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit",

    service: [
      {
        id: 1,
        title: "Happy Clients",
        subTitle: `consequuntur voluptas
    nostrum aliquid ipsam architecto ut.`,
      },
      {
        id: 2,
        title: "Projects",
        subTitle: `adipisci atque cum quia aspernatur totam laudantium et quia dere tan`,
      },
      {
        id: 3,
        title: "Years of experience ",
        subTitle: ` aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel`,
      },
      {
        id: 4,
        title: "Awards",
        subTitle: `rerum asperiores dolor alias quo reprehenderit eum et nemo pad der`,
      },
    ],
  };
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row no-gutters">
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" />
          <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div className="content d-flex flex-column justify-content-center">
              <h3>{_data?.title}</h3>
              <p>{_data?.subTitle}</p>

              <div className="row">
                {_data &&
                  !!_data?.service &&
                  _data?.service.map((d, index) => (
                    <AboutItem
                      title={d?.title}
                      subTitle={d.subTitle}
                      key={index}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
