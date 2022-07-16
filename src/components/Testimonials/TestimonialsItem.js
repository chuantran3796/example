import React from "react";

const TestimonialItem = ({ quote, name, image, offices }) => {
  return (
    <div className="swiper-slide">
      <div className="testimonial-item">
        <p>
          <i className="bx bxs-quote-alt-left quote-icon-left"></i>
          {quote}
          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
        </p>
        <img src={image} className="testimonial-img" alt="" />
        <h3>{name}</h3>
        {offices && (
          <h4>
            {offices.map((office, index) => {
              console.log(offices.length, index);
              if (offices.length > index + 1) {
                return `${office}  & `;
              } else {
                return office;
              }
            })}
          </h4>
        )}
      </div>
    </div>
  );
};
export default React.memo(TestimonialItem);
