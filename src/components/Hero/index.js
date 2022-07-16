import React from "react";

const Hero = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="hero"
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <h1>Hi, I'm Alice!</h1>
      <h2>I am a graphic designer</h2>
      <a href="#about" className="btn-get-started scrollto">
        <i className="bi bi-chevron-double-down"></i>
      </a>
    </section>
  );
});

export default React.memo(Hero);
