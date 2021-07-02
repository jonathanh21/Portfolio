import React, {useEffect} from 'react';
import anime from 'animejs/lib/anime.es.js';
import icon from '../assests/icons/backarrow.png'

const Soft = (props) => {

    useEffect(()=> {
        anime({
            targets: '.skill',
            opacity:'100%',
            background:['rgba(0,0,0,1)','rgba(255,255,255,0)'],
            easing: 'linear',
            duration: 40,
            delay: function(el, i, l) {
                return i * 40 + 500;
                },
        });
        anime({
            targets: '.skill2',
            opacity:'100%',
            background:['rgba(0,0,0,1)','rgba(255,255,255,0)'],
            easing: 'linear',
            duration: 40,
            delay: function(el, i, l) {
                return i * 40 +500;
                },
        });
    })

    const skills = ['Team Work','Self-Taught', 'Leadearship', 'Adaptability', 'Fast-Learning', 'Assertive-Communication']
    const skills2= ['English','Empathy','SCRUM', 'Problem-Solving', 'Project-Management', 'Written-Communication']
    const skillsLyrics = skills.map((element)=> <div className='skillRow'>{element.split("").map((skill,i)=><div className='skill'>{skill}</div>)}</div>) 
    const skillsLyrics2 = skills2.map((element)=> <div className='skillRow'>{element.split("").map((skill,i)=><div  className='skill2'>{skill}</div>)}</div>) 

    return (
        <div className='human aboutContainer'>
            <img className='backArrow' onClick={props.handleCover} src={icon}/>
            <div className='container'>
                <div className='coverHeader bg'>
                    SKILLS
                </div>
                <div className='skillsContainer'>
                    <div className='skillsCol'>
                        {skillsLyrics2}
                    </div>
                    <div className='skillsCol'>
                        {skillsLyrics}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Soft
