import React, {useEffect}from 'react';
import anime from 'animejs/lib/anime.es.js';


const Name = () => {
    useEffect (()=> {
        anime({
            targets: '.name',
            translateX: [-150,0],
            opacity:'100%',
            easing: 'easeInOutQuad',
            duration: 1500
          });
    })

    return (
        <div className='name'>
            Jonathan Herrera Ochoa
        </div>
    )
}

export default Name