import React from "react";

import ProgressBar from "../ProgressBar";

const SkillProgress = ({ label, value, activeColor }) => {
  return (
    <div className="progress">
      <span className="skill">
        {label}
        <i className="val">{value}%</i>
      </span>
      <ProgressBar value={value} activeColor={activeColor} />
    </div>
  );
};

export default SkillProgress;
