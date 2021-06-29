import React, { useState, useEffect } from 'react';
import Cover from '../components/Cover';
import Human from '../components/Human';
import Professional from '../components/Professional';
import anime from 'animejs/lib/anime.es.js';


const About = () => {
    const [activeInfo, setActiveInfo] = useState('cover')

    useEffect (()=> {
        anime({
            targets: '.aboutContainer',
            translateX: [-250,0],
            opacity:'100%',
            easing: 'easeInOutQuad',
            duration: 500
          });
    },[activeInfo])
    
    const handleHumanButtonClick = () => {
        setActiveInfo('human')
    }

    const handleProfessionalButtonClick = () => {
        setActiveInfo('professional')
    }

    const handleCoverClick = () => {
        setActiveInfo('cover')
    }

    return (
        <div id= 'about' className='right'>
            {activeInfo === 'cover' ? <Cover 
                                        handleHuman={handleHumanButtonClick} 
                                        handleProfessional={handleProfessionalButtonClick}/>
                                    :null}
            {activeInfo === 'human' ? <Human handleCover={handleCoverClick}/> :null}
            {activeInfo === 'professional' ? <Professional handleCover={handleCoverClick} />: null}
        </div>
    )
}
export default About