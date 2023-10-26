import React from "react";
import "./education.css";

const Education = () => {
  return (
    <section name="education" className="edu">
      <div className="edu-main">
        <div className="edu-head-text">
          <h3 className="edu-head">Education</h3>
        </div>
        <div className="edu-uni">
          <h4> 2015 - 2019</h4>
          <div>
            <p>B.s.c- Imo state university - Insurance</p>
          </div>
        </div>
        <div className="edu-high">
          <h4>2011 - 2013</h4>

          <div>
            <p>Anna Memorial Comprehensive High School</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
