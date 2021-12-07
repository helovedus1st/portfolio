import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Biiggie',
      description: 'Crowdsourcing Website - React',
      link: "https://agile-basin-79882.herokuapp.com/",
      repo: "https://github.com/graybishop/peticipate"
    },
    {
      name: 'LibraryCurator',
      description: 'Public Library Management System - MySQL',
      link: "https://librarycurator.herokuapp.com/",
      repo: "https://github.com/faithelizagreen/library-curator"
    },
    {
      name: 'CryptoTraderEdge',
      description: 'Crypto Currency News and Information Website',
      link: "https://erebus009.github.io/crypto-news-tracker/",
      repo: "https://github.com/Erebus009/crypto-news-tracker"
    },
    {
      name: 'LutheranTech',
      description: 'Niche Design and Marketing Website - WordPress',
      link: "http://lutherantech.com/"
    },
    {
      name: 'WeatherDashboard',
      description: 'Global Weather Forecast Website',
      link: "https://helovedus1st.github.io/weather-dashboard/",
      repo: "https://github.com/helovedus1st/weather-dashboard"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
