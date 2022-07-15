import React from "react";

import Progress from "./Progress";

const SkillProgress = ({ label, value, activeColor }) => {
  return (
    <div className="progress">
      <span className="skill">
        {label}
        <i className="val">{value}%</i>
      </span>
      <div className="progress-bar-wrap">
        <Progress value={value} color={activeColor} />
      </div>
    </div>
  );
};

export default SkillProgress;
