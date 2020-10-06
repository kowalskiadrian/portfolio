import React from 'react';
import './styles/SocialIcons.css';
import Dribbble from './images/dribbble.svg'
import Github from './images/github.svg'
import Linkedin from './images/linkedin.svg'

export default function SocialIcons({inAbout}){
  return(
    <div className={inAbout ? "social-icons social-about" : " social-icons social-top"}>
      <a href="https://dribbble.com/Quuuu" target="_blank"><img src={Dribbble} alt="Dribbble Logo"/></a>
      <a href="https://github.com/kowalskiadrian/" target="_blank"><img src={Github} alt="Github Logo"/></a>
      <a href="https://github.com/kowalskiadrian/" target="_blank"><img src={Linkedin} alt="Dribbble Logo"/></a>
    </div>
  );
}
