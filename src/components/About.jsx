import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Chaitanya Annamreddy</b> and I am an experienced
            and enthusiastic UI Developer with a strong passion for creating
            exceptional user experiences. My primary focus will be on front-end
            development, utilizing my expertise in HTML5, CSS/SCSS,
            JavaScript/jQuery, Angular/React and Bootstrap. <br />
            <br />
            As a UI Developer, I am committed to delivering high-quality
            software solutions while staying up-to-date with the latest industry
            trends and best practices. I thrive in a collaborative environment
            where I can leverage my skills and expertise to contribute to the
            company's success.
          </p>
          <a href="Resume.pdf" download className="resume-btn">
            <button>
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwind" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Npm" />
      </div>
    </>
  );
};

export default About;
