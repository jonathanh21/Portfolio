import React, {useEffect} from 'react';
import anime from 'animejs/lib/anime.es.js';


const Professional = (props) => {
    useEffect(()=> {
        anime({
            targets: '.coverHeader',
            translateY: [250,0],
            opacity:'10%',
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: 500
        });

        anime({
            targets: '.professionalText',
            translateY: [250,0],
            opacity:'100%',
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: 1500
        });
    })

    return (
        <div className='professional aboutContainer'>
            <img className='backArrow' onClick={props.handleCover} src="https://img.icons8.com/ios-filled/50/000000/circled-chevron-left.png"/>
            <div className='container'>
                <div className='coverHeader bg'>
                    ABOUT
                </div>
                <div className='professionalText'>
                    <p> A developer who is passionate about <strong>Front-End</strong> and the whole user experience. I like to build
                        Apps where the user feels comfortable with the design and the interaction. Also, I am really
                        good at solving logic problems with a <strong>very special thinking process</strong> that allows me to evaluate the
                        information faster than the average. 
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Professional