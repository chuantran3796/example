import React from "react";

const SkillProgress = ({ label, value }) => {
  return (
    <div className="progress">
      <span className="skill">
        {label}<i className="val">{value}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={value}
        />
      </div>
    </div>
  );
};

export default SkillProgress;
