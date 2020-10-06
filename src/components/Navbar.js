import React, { useState, useRef, useEffect  } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { Link as Scroll} from 'react-scroll';
import './styles/Navbar.css';

export default function Navbar(){

  const [menuOpened, setMenuOpend] = useState(false);

  const handleOpenMenu = () => setMenuOpend(!menuOpened);

  const navRef = useRef(null);

  useEffect(() => {
    const elements = navRef.current.children;

    const container = elements.namedItem("container");

    gsap.set(container, {autoAlpha: 0});

    const timeline = gsap.timeline({defaults: {ease: 'power3.inOut'}});
    timeline.fromTo(container, {y: '-=300'}, {duration: 1, y:'+=300', autoAlpha: 1}, '+=2.5');
  }, []);
  return(
      <>
        <nav ref={navRef} className="navbar">
          <div id="container" className="navbar-container">
            <Link to="/" className="navbar-logo">Kowalski Adrian</Link>
            <i className={menuOpened ? "fas fa-times" : "fas fa-bars"} onClick={handleOpenMenu}/>
          </div>
            <ul className={menuOpened ? "navbar-menu active" : "navbar-menu"}>
              <li className="navbar-menu-item">
                <Scroll to="hero" spy={true} smooth={true} offset={0} duration={500} className="navbar-link-item" onClick={handleOpenMenu}>Home</Scroll>
              </li>
              <li className="navbar-menu-item">
                <Scroll to="projects" spy={true} smooth={true} offset={-100} duration={500} className="navbar-link-item" onClick={handleOpenMenu}>Projects</Scroll>
              </li>
              <li className="navbar-menu-item">
                <Scroll to="about" spy={true} smooth={true} offset={0} duration={500} className="navbar-link-item" onClick={handleOpenMenu}>About</Scroll>
              </li>
              <li className="navbar-menu-item">
                <Scroll to="contact" spy={true} smooth={true} offset={0} duration={500} className="navbar-link-item" onClick={handleOpenMenu}>Contact</Scroll>
              </li>
            </ul>
        </nav>
      </>
  );
}
