import React from 'react';
import './Skills.css';

const Skills = () => (
  <div className="skills">
    <div className="text">
      <h2>## Skills</h2>
      <div className="bar">
        <div className="frontend">70% frontend</div>
        <div className="backend">30% backend</div>
      </div>
      <h3> ~ Prefer to work with:</h3>
      <p>
        React, Redux, Node.js, Express, Postgres, Redis, npm, Github, Mocha, Chai, Sinon, Enzyme, Travis.
      </p>
      <h3> ~ Confortable working with:</h3>
      <p>
        Java, Scala, GraphQL, C/C++, MongoDB, Webpack, PostCSS, Maven, Protractor, Selenium, JUnit, Jenkins, docker, kubernetes.
      </p>
      <h3> ~ Basic experience with:</h3>
      <p>
        React Native, AngularJs, Elixir, Python, Neo4J.
      </p>
    </div>
  </div>
);

export default Skills;
