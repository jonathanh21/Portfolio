import React, {useEffect} from 'react';

const Cover = (props) => {

    return (
        <div className='cover aboutContainer'>
            <div className='coverHeader'>
                ABOUT ME
            </div>
            <div className='coverContent'>
                <div className='coverButton' onClick={props.handleHuman}>
                    <span>THE PERSON</span>
                </div>
                <div className='coverButton' onClick={props.handleProfessional}>
                    <span>THE PROFESSIONAL </span>
                </div>
            </div>
        </div>
    )
}
export default Cover