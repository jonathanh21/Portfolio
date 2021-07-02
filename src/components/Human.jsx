import React, {useEffect} from 'react';
import anime from 'animejs/lib/anime.es.js';
import icon from '../assests/icons/backarrow.png'

const Human = (props) => {

    useEffect(()=> {
        anime({
            targets: '.coverHeader',
            translateY: [-250,0],
            opacity:'10%',
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: 500
        });

        anime({
            targets: '.humanText',
            translateY: [-250,0],
            opacity:'100%',
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: 1500
        });
    })

    return (
        <div className='human aboutContainer'>
            <img className='backArrow' onClick={props.handleCover} src={icon}/>
            <div className='container'>
                <div className='coverHeader bg'>
                    ABOUT
                </div>
                <div className='humanText'>
                    <p>A 27 years old person who loves sports, animals, videogames and anime. The thing that I enjoy the most 
                        in life is <strong>learning about other people</strong>, things like science, logic, music and art.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Human