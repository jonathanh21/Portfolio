import React, { useEffect, useState} from 'react';
import CoverPr from "../components/CoverPr"

const Projects = () => {
    const [activeProject, setActiveProject] = useState('cover ')
    
    return (
        <CoverPr />
    )
}
export default Projects