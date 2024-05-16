// Skills.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css'

export function Skills() {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container" style={{color:'black'}}>
        <div className="section-title">
          <h2 style={{color:"blue"}}>Skills</h2>
          <p style={{fontSize:'20px'}}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-md-6">
            <SkillBar skill="HTML" percentage={100} />
            <SkillBar skill="CSS" percentage={90} />
            <SkillBar skill="JavaScript" percentage={75} />
          </div>

          <div className="col-md-6">
          <SkillBar skill="PHP" percentage={80} />
            <SkillBar skill="WORDPRESS/CMS" percentage={90} />
            <SkillBar skill="PHOTOSHOP" percentage={55} />
            
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="progress">
      <span className="skill">{skill} <i className="val">{percentage}%</i></span>
      <div className="progress-bar" role="progressbar" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};


