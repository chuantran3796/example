import React from "react";
import SkillProgress from "./SkillProgress";

const Skills = React.forwardRef((props, ref) => {
  return (
    <section id="skills" className="skills section-bg" ref={ref}>
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row skills-content">
          <div className="col-lg-6">
            <SkillProgress label="HTMl" value={80} />
            <SkillProgress label="HTMl" value={10} />
            <SkillProgress label="HTMl" value={40} />
          </div>
          <div className="col-lg-6">
            <SkillProgress label="HTMl" value={50} />
            <SkillProgress label="HTMl" value={69} />
            <SkillProgress label="HTMl" value={100} />
          </div>
        </div>
      </div>
    </section>
  );
});

export default React.memo(Skills);
