import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import '../styles/Home.css';
import Hero from '../Hero';
import About from '../About';
import Contact from '../Contact';
import Project from '../Project';
import GamewaveBG from '../images/gamewave.gif';
import PokeinfoBG from '../images/pokeinfo.gif';
import DribbbleBG from '../images/dribbble.gif';
import LealBG from '../images/leal.gif';
import FolioBG from '../images/folio.gif';

export default function Home(myref){

  const homeRef = useRef(null);

  useEffect(() => {
    const elements = homeRef.current.children;

    const hero = elements.namedItem("Hero");
    const logo = elements.namedItem("Hero-logo");
    const projectNo1 = elements.namedItem("projects");
    const projectNo2 = elements.namedItem("Project2");
    const projectNo3 = elements.namedItem("Project3");
    const projectNo4 = elements.namedItem("Project4");
    const projectNo5 = elements.namedItem("Project5");
    const about = elements.namedItem("about");
    const illustration = elements.namedItem("illustration");
    const contact = elements.namedItem("contact");
    const intro = elements.namedItem("intro");

    gsap.set([hero, logo, projectNo1, projectNo2, projectNo3, projectNo4, projectNo5, about, illustration, contact], {autoAlpha: 0});

    const timeline = gsap.timeline({defaults: {ease: 'power3.inOut'}});

    timeline
    .fromTo(intro.children, {color: '#aaf0d1'}, {color: '#FFFFFF', duration: 2})
    .to(intro.children, {autoAlpha: 0, duration: 1})
    .fromTo(hero, {x: '+=1000'}, {duration: 2, x: '-=1000', autoAlpha: 1}, '-=1')
    .fromTo(logo, {x: '-=1000'}, {duration: 2, x: '+=1000', autoAlpha: 1}, '-=2')
    .fromTo(projectNo1, {x: '-=1000'}, {duration: 2, x: '+=1000', autoAlpha: 1}, '-=1')
    .fromTo(projectNo2, {x: '+=1000'}, {duration: 2, x: '-=1000', autoAlpha: 1}, '-=2')
    .fromTo(projectNo3, {x: '+=1000'}, {duration: 2, x: '-=1000', autoAlpha: 1}, '-=1')
    .fromTo(projectNo4, {x: '-=1000'}, {duration: 2, x: '+=1000', autoAlpha: 1}, '-=2')
    .fromTo(projectNo5, {x: '-=1000'}, {duration: 2, x: '+=1000', autoAlpha: 1}, '-=2')
    .fromTo(about, {x: '-=1000'}, {duration: 2, x: '+=1000', autoAlpha: 1}, '-=1')
    .fromTo(illustration, {x: '+=1000'}, {duration: 2, x: '-=1000', autoAlpha: 1}, '-=1')
    .fromTo(contact, {x: '+=1000'}, {duration: 2, x: '-=1000', autoAlpha: 1}, '-=1');

  }, []);

  return(
      <div ref={homeRef} className="home">
        <div id="Hero-logo" className="Hero-logo"><div className="img-wrapper"></div></div>
        <div id="Hero" className="Hero"><Hero/></div>
        <div className="Project-1" id="projects" >
          <Project
            Background={LealBG}
            Title={"Leal Tattoo"}
            Description={"Strona przeznaczona dla znajomej zajmującej się tworzenie tatuaży. Projekt w czasie tworzenia"}
            GithubLink={"https://github.com/kowalskiadrian/pokeinfo/tree/master"}
            LiveDemoLink={"https://kowalskiadrian.github.io/pokeinfo/"}
            BGColor={"#B13D36"}
            />
        </div>
        <div className="Project-2" id="Project2">
          <Project
            Background={PokeinfoBG}
            Title={"Pokeinfo"}
            Description={"Strona korzystająca z zewnętrznego API, tak aby użytkownik mógł sprawdzić informacje o wybranym przez siebie Pokemonie"}
            GithubLink={"https://github.com/kowalskiadrian/pokeinfo/tree/master"}
            LiveDemoLink={"https://kowalskiadrian.github.io/pokeinfo/"}
            BGColor={"#83321a"}
            />
        </div>
        <div className="Project-3" id="Project3">
            <Project
            Background={GamewaveBG}
            Title={"GameWave"}
            Description={"Celem projektu było stworzenie niewielkiej strony na której można zagrać w szachy, tetrisa, a także ułożyć kostkę rubika."}
            GithubLink={"https://github.com/kowalskiadrian/gamewave/tree/master"}
            LiveDemoLink={"https://kowalskiadrian.github.io/gamewave/"}
            BGColor={"#304757"}
            />
        </div>
        <div className="Project-4" id="Project4">
          <Project
            Background={DribbbleBG}
            Title={"Web Design"}
            Description={"Kilka z moich projektów wykonanych w Figmia"}
            Dribbble={"https://dribbble.com/Quuuu"}
            BGColor={"#6777D2"}
            />
        </div>
        <div className="Project-5" id="Project5">
        <Project
          Background={FolioBG}
          Title={"Strona portfolio"}
          Description={"Strona na której właśnie się znajdujesz"}
          GithubLink={"https://github.com/kowalskiadrian/portfolio/"}
          LiveDemoLink={"https://kowalskiadrian.site/"}
          BGColor={"#000000"}
          />
        </div>
        <div className="About" id="about"><About/></div>
        <div className="About-illustration" id="illustration"></div>
        <div className="Contact" id="contact"><Contact/></div>
        <div id="intro" className="intro-text">
          <h1>Think.</h1>
          <h1>Different.</h1>
        </div>
      </div>
  );
}
