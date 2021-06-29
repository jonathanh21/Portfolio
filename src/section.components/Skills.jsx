import React, {useEffect, useState} from 'react';
import CoverSk from '../components/CoverSk';
import Tech from '../components/Tech';
import Soft from '../components/Soft';
import anime from 'animejs/lib/anime.es.js';

const Skills = () => {
    
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
    
    const handleTechButtonClick = () => {
        setActiveInfo('tech')
    }

    const handleSoftButtonClick = () => {
        setActiveInfo('soft')
    }

    const handleCoverClick = () => {
        setActiveInfo('cover')
    }

    return (
        <div id='skills' className='right'>
            {activeInfo === 'cover' ? <CoverSk 
                                        handleTech={handleTechButtonClick} 
                                        handleSoft={handleSoftButtonClick}/>
                                    :null}
            {activeInfo === 'tech' ? <Tech handleCover={handleCoverClick}/> :null}
            {activeInfo === 'soft' ? <Soft handleCover={handleCoverClick} />: null}
        </div>
    )
}
export default Skills