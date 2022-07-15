import React from "react";

const PortfolioItem = ({ image, name, description, link }) => {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
      <div className="portfolio-wrap">
        <img src={image} className="img-fluid" alt="" />
        <div className="portfolio-info">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
        <div className="portfolio-links">
          <a
            href={link}
            data-gallery="portfolioGallery"
            className="portfolio-lightbox"
            title="App 1"
          >
            <i className="bx bx-plus" />
          </a>
          <a href="portfolio-details.html" title="More Details">
            <i className="bx bx-link" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PortfolioItem);
