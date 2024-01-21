// client/src/WorkExperience.js

import React from 'react';
import './WorkExperience.css';

function WorkExperience() {
  return (
    <div className="workexperience-container">
      <h2 style={{ textDecoration: 'underline' }}>Work Experience</h2>
      <div className="experience-item">
        <h3>Junior Research Fellow, ARTPARK, IISc</h3>
        <p className="date">Sep 2023 - Dec 2023</p>
      </div>
      <div className="experience-item">
        <h3>Research Intern, AI Institute, University of South Carolina</h3>
        <p className="date">Sep 2023 - Nov 2023</p>
      </div>
      <div className="experience-item">
        <h3>Data Analysis & Engineering Intern, ARTPARK, IISc</h3>
        <p className="date">June 2023 - Aug 2023</p>
      </div>
      <div className="experience-item">
        <h3>Summer Research Intern, IEEE CS Bangalore Chapter</h3>
        <p className="date">June 2022 - July 2022</p>
      </div>
      <div className="experience-item">
        <h3>Research Assistant, PES University</h3>
        <p className="date">Jan 2022 - Dec 2023</p>
      </div>
    </div>
  );
}

export default WorkExperience;