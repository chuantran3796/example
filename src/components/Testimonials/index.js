import React from "react";
import Slider from "react-slick";
import TestimonialsItem from "./TestimonialsItem";

const Testimonial = React.forwardRef((props, ref) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const _data = [
    {
      id: 1,
      quote: `Proin iaculis purus consequat sem cure digni ssim donec
      porttitora entum suscipit rhoncus. Accusantium quam,
      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
      risus at semper.`,
      image: require("../../assets/img/testimonials/testimonials-1.jpg"),
      name: "Saul Goodman",
      offices: ["Ceo", "Founder"],
    },
    {
      id: 2,
      quote: `Export tempor illum tamen malis malis eram quae irure esse
      labore quem cillum quid cillum eram malis quorum velit fore
      eram velit sunt aliqua noster fugiat irure amet legam anim
      culpa.`,
      image: require("../../assets/img/testimonials/testimonials-3.jpg"),
      name: "Sara Wilsson",
      offices: ["Designer"],
    },
    {
      id: 3,
      quote: `Enim nisi quem export duis labore cillum quae magna enim
      sint quorum nulla quem veniam duis minim tempor labore quem
      eram duis noster aute amet eram fore quis sint minim.`,
      image: require("../../assets/img/testimonials/testimonials-3.jpg"),
      name: "Jena Karlis",
      offices: ["Store Owner"],
    },
    {
      id: 4,
      quote: `Fugiat enim eram quae cillum dolore dolor amet nulla culpa
      multos export minim fugiat minim velit minim dolor enim duis
      veniam ipsum anim magna sunt elit fore quem dolore labore
      illum veniam.`,
      image: require("../../assets/img/testimonials/testimonials-3.jpg"),
      name: "Matt Brandon",
      offices: ["Freelancer"],
    },
    {
      id: 5,
      quote: `Quis quorum aliqua sint quem legam fore sunt eram irure
      aliqua veniam tempor noster veniam enim culpa labore duis
      sunt culpa nulla illum cillum fugiat legam esse veniam culpa
      fore nisi cillum quid.`,
      image: require("../../assets/img/testimonials/testimonials-5.jpg"),
      name: "John Larson",
      offices: ["Entrepreneur"],
    },
  ];
  return (
    <section id="testimonials" className="testimonials section-bg" ref={ref}>
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="swiper-wrapper">
            <Slider {...settings}>
              {_data.map((d, index) => (
                <TestimonialsItem
                  quote={d.quote}
                  name={d.name}
                  image={d.image}
                  offices={d.offices}
                  key={index}
                />
              ))}
            </Slider>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
});

export default React.memo(Testimonial);
