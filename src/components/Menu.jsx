import React, {useEffect} from 'react';
import anime from 'animejs/lib/anime.es.js';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Menu = () => {

    useEffect(() => {
        anime({
            targets: '.menu',
            translateX: [-800,0],
            easing: 'easeInOutQuad',
            delay:2500,
            duration: 1500
          });
    })
    const mouseOnHandler = (e) => {
        anime({
            targets: `.${e.target.className}`,
            background:['linear-gradient(to right, rgba(191,191,191,1) 0%,  rgba(255,255,255,1) 100%)'],
            easing: 'easeInOutQuad',
            duration: 1000,
          });
    }

    const mouseOutHandler = (e) => {
        anime({
            targets: `.${e.target.className}`,
            background:['linear-gradient(to right, rgba(191,191,191,1) 0%,  rgba(255,255,255,1) 100%)','linear-gradient(to right, rgba(191,191,191,0) 0%,  rgba(255,255,255,0) 100%)'],
            easing: 'easeInOutQuad',
            duration: 1000,
          });
    }

    return (
        <ul className='menu'>
            <Link to="about" smooth={true} offset={50} >
                <li className='link1' onMouseOver={mouseOnHandler} onMouseLeave={mouseOutHandler} >
                    ABOUT ME
                </li>
            </Link>
            <Link to="skills" smooth={true} offset={50}>
                <li className='link2' onMouseOver={mouseOnHandler} onMouseLeave={mouseOutHandler}>
                    TECH & SOFT SKILLS
                </li>
            </Link>
            <Link to="projects" smooth={true} offset={50}>
                <li className='link4' onMouseOver={mouseOnHandler} onMouseLeave={mouseOutHandler}>
                    MY PROJECTS
                </li>
            </Link>
            <Link to="contact" smooth={true} offset={50}>
                <li className='link5' onMouseOver={mouseOnHandler} onMouseLeave={mouseOutHandler}>
                    CONTACT ME
                </li>
            </Link>
        </ul>
    )
}

export default Menu