import React, {useEffect} from 'react';

const Cover = (props) => {

    return (
        <div className='cover aboutContainer'>
            <div className='coverHeader'>
                MY SKILLS
            </div>
            <div className='coverContent'>
                <div className='coverButton' onClick={props.handleTech}>
                    <span>TECH SKILLS</span>
                </div>
                <div className='coverButton' onClick={props.handleSoft}>
                    <span>SOFT SKILLS & OTHERS </span>
                </div>
            </div>
        </div>
    )
}
export default Cover