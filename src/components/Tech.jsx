import React, {useEffect} from 'react';
import anime from 'animejs/lib/anime.es.js';
import html from '../assests/icons/html.png'
import css from '../assests/icons/css.jpg'
import javascript from '../assests/icons/javascript.png'
import git from '../assests/icons/git.png'
import github from '../assests/icons/github.png'
import express from '../assests/icons/express.png'
import firebase from '../assests/icons/firebase.png'
import less from '../assests/icons/less.png'
import node from '../assests/icons/node.png'
import postgress from '../assests/icons/postgress.png'
import react from '../assests/icons/react.png'
import redux from '../assests/icons/redux.png'
import rxjs from '../assests/icons/rxjs.png'
import sass from '../assests/icons/sass.png'
import sequelize from '../assests/icons/sequelize.png'
import typescript from '../assests/icons/typescript.png'
import icon from '../assests/icons/backarrow.png'


const Tech = (props) => {

    useEffect(()=> {
        anime({
            targets: '.coverHeader',
            opacity:'10%',
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: 500
        });

        anime({
            targets: '.skillBlock',
            opacity: '100%',
            duration:750,
            easing: 'easeInOutQuad'
          });
        anime({
            targets: '.skillsRow',
            translateX: [-250,-30],
            opacity: '100%',
            duration:1600,
            easing: 'easeInOutQuad',
            delay: function(el, i, l) {
                return i * 200;
                },
        });
    })

    return (
        <div className='human aboutContainer'>
            <img className='backArrow' onClick={props.handleCover} src={icon}/>
                <div className='container'>
                <div className='coverHeader bg'>
                    SKILLS
                </div>
                <div className='skillsRow'>
                    <div className='skillBlock'>
                        <img className='iconSkill' src={html}/>
                        <span>HTML</span>
                    </div>
                    <div className='skillBlock'>
                        <img className='iconSkill' src={javascript}/>
                        <span>JAVASCRIPT</span>
                    </div>
                    <div className='skillBlock'>
                        <img className='iconSkill' src={css}/>
                        <span>CSS</span>
                    </div>
                    <div className='skillBlock'>
                        <img className='iconSkill' src={react}/>
                        <span>REACT JS</span>
                    </div>
                </div>
                <div className='skillsRow'>
                    <div className='skillBlock'>
                        <img className='iconSkill' src={redux}/>
                        <span>REDUX JS</span>
                    </div>
                    <div className='skillBlock'>
                        <img className='iconSkill' src={typescript}/>
                        <span>TYPESCRIPT JS</span>
                    </div>
                    <div className='skillBlock'>
                        <img className='iconSkill' src={node}/> 
                        <span>NODE JS</span>
                    </div>
                    <div className='skillBlock'>
                        <img className='iconSkill longIcon' src={express}/>
                        <span>EXPRESS JS</span>
                    </div>
                </div>
                <div className='skillsRow'>
                    <div className='skillBlock'>
                        <img className='iconSkill' src={sequelize}/>
                        <span>SEQUELIZE JS</span>
                    </div>
                    <div className='skillBlock'>
                        <img className='iconSkill' src={postgress}/>
                        <span>POSTGRESQL</span>
                    </div>
                    <div className='skillBlock'>
                        <img className='iconSkill' src={firebase}/>
                        <span>FIREBASE</span>
                    </div>
                    <div className='skillBlock'>
                        <img className='iconSkill' src={less}/>
                        <span>LESS</span>
                    </div>
                </div>
                <div className='skillsRow'>
                    <div className='skillBlock'>
                        <img className='iconSkill' src={rxjs}/>
                        <span>RXJS</span>
                    </div>
                    <div className='skillBlock'>
                        <img className='iconSkill' src={sass}/>
                        <span>SASS</span>
                    </div>
                    <div className='skillBlock'>
                        <img className='iconSkill' src={git}/>
                        <span>GIT</span>
                    </div>
                    <div className='skillBlock'>
                        <img className='iconSkill' src={github}/>
                        <span>GITHUB</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Tech