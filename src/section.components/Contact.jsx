import React, {useEffect} from 'react';
import anime from 'animejs/lib/anime.es.js';
import linkedin from '../assests/icons/linkedIn.png'
import gmail from '../assests/icons/gmail.png'
import github from '../assests/icons/github.png'

import CV from '../assests/icons/CV.png'

const Contact = () => {

    useEffect(()=> {
        anime({
            targets: '.coverHeader',
            opacity:'10%',
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: 500
        });

        anime({
            targets: '.contactBlock',
            opacity: '100%',
            duration:750,
            easing: 'easeInOutQuad'
          });
        anime({
            targets: '.contactRow',
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
        <div id='contact' className='right contact'>
            <div className='container'>
                <div className='contactHeader bg'>
                    CONTACT
                </div>
                <div className='contactRow'>
                    <div className='contactBlock'>
                        <a href='mailto:jhonathan.herrerao@gmail.com' target="_blank"><img className='iconContact'  src={gmail}/></a>
                    </div>
                    <div className='contactBlock'>
                        <a href='https://www.linkedin.com/in/jonathanh21' target="_blank"><img className='iconContact' src={linkedin}/></a>
                    </div>
                    <div className='contactBlock'>
                        <a href='https://github.com/jonathanh21' target="_blank"><img className='iconContact' src={github}/></a>
                    </div>
                    <div className='contactBlock'>
                        <a href='https://shorturl.at/orxMY' target="_blank"><img className='iconContact' src={CV}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact