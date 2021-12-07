import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        Download my <a href="https://helovedus1st.github.io/new-portfolio-09-17-21/assets/files/Resume__Joshua-Renner.pdf" target="_blank" rel="noopener noreferrer">resumé</a>
        </p>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>WordPress</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
        <h3>Other Technological Proficiencies</h3>
        <ul className="skills">
          <li>UI/UX Design</li>
          <li>Adobe Creative Cloud</li>
          <li>MS Visual Studio</li>
          <li>MS Office</li>
          <li>Hardware/Software/Connectivity Support</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
