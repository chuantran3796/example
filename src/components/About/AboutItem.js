import React from "react";

const AboutItem = ({title,subTitle}) => {
  return (
    <div className="col-md-6 d-md-flex align-items-md-stretch">
      <div className="count-box">
        <i className="bi bi-award" />
        <span
          data-purecounter-start={0}
          data-purecounter-end={15}
          data-purecounter-duration={1}
          className="purecounter"
        />
        <p>
          <strong>{title}</strong> {subTitle}
        </p>
      </div>
    </div>
  );
};

export default AboutItem;
