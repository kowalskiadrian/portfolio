import React from 'react';
import './styles/Projects.css';

export default function Projects({ Background, Title, Description, GithubLink, LiveDemoLink, Dribbble, BGColor}){
  return(
      <div className="project">
        <div className="project-background" style={{ backgroundImage: `url(${Background})` }}/>
        <div className="project-hover"
          style={{backgroundColor: BGColor}}>
          <h2>{Title}</h2>
          <p>{Description}</p>
          {Dribbble ?
            <div className="project-buttons">
              <a className="cta-button" href={Dribbble}> Sprawdź na Dribbble!</a>
          </div>:
            <div className="project-buttons">
              <a className="cta-button" href={GithubLink}> Github </a>
              <a className="cta-button" href={LiveDemoLink}> Live Demo</a>
          </div>}
        </div>
      </div>
  );
}
