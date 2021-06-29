import React from 'react';
import Name from '../components/Name'
import Title from '../components/Title'
import Menu from '../components/Menu'


const Landing = (props) => {
    return (
        <div className='landingContainer'>
            <Menu setPage={props.setActiveSection}/>
            <div id='info' className='first right'>
                <Name />
                <Title />
            </div>
        </div>
    )
}
export default Landing