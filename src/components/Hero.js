import React from 'react';
import { Link as Scroll} from 'react-scroll';
import './styles/Hero.css';
import './styles/HeroBackgroundSquares.css';
import SocialIcons from './SocialIcons';

export default function Hero(){

  const createBgSquers = () => {
    let elements = [];
    for (let i = 0; i < 15; i++)
      elements.push(<li key={i}></li>);
    return elements;
  }

  return(
      <div className="hero-section" id="hero">
        <div id="heading" className="heading">
          <h1>Cześć! Tutaj  Adrian Kowalski.
            Front-end developer & designer. Sprawdź moje
            <Scroll to="projects" spy={true} smooth={true} offset={-100} duration={500} className="a-link"> projekty</Scroll>
          </h1>
          <SocialIcons inAbout={false}/>
        </div>
        <div className="hero-background-squares">
            <ul className="squares">
              {createBgSquers()}
            </ul>
        </div>
      </div>
  );
}
