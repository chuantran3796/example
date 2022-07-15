import React from "react";
import ServiceItem from "./ServiceItem";

const Service = React.forwardRef((props, ref) => {
  return (
    <section id="services" className="services section-bg" ref={ref}>
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row">
          <ServiceItem
            title="Lorem Ipsum"
            description="Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi"
          />
          <ServiceItem
            title="Sed ut perspiciatis"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore"
          />
          <ServiceItem
            title="Magni Dolores"
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia"
          />
          <ServiceItem
            title="Nemo Enim"
            description=" At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis"
          />
        </div>
      </div>
    </section>
  );
});

export default React.memo(Service);
