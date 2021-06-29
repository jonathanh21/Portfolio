import React, {useEffect} from 'react';
import anime from 'animejs/lib/anime.es.js';

const Title = () => {
    useEffect (()=> {
        anime({
            targets: '.title',
            translateY: [-150,-50],
            opacity:'100%',
            easing: 'easeInOutQuad',
            delay:1500,
            duration: 1500
          });
    })
    return (
        <div className='title'>
            FullStack Developer | Civil Engineer
        </div>
    )
}

export default Title