import { React } from "react";

const ServiceItem = ({ title, description }) => {
  return (
    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
      <div className="icon-box">
        <div className="icon">
          <i className="bx bxl-dribbble" />
        </div>
        <h4 className="title">
          <a href>{title}</a>
        </h4>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
