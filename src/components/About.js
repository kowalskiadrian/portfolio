import React from 'react';
import './styles/About.css';
import SocialIcons from './SocialIcons';

export default function About(){
  return(
      <div className="about-section" id="about">
        <div className="content">
          <p className="paragraph">Cześć! Mam na imię Adrian. Jestem studentem informatyki oraz automatyki i robotyki. Uwielbiam projektować i budować rzeczy od podstaw, a pierwszą grę stworzyłem jeszcze w szkole podstawowej. Dalej uwielbiam gry, ale więcej mojego serca zajmują teraz strony i aplikacje internetowe. Chciałbym dalej rozwijać się w kierunku Front-End lub też Full Stack developera. </p>
          <SocialIcons inAbout={true}/>
        </div>
      </div>
  );
}
