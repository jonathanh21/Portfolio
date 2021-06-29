import Landing from './Landing'
import About from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import React, {useState} from 'react';


function MainPage() {
  const [activeSection, setActiveSection] = useState('landing')
  
  return (
    <div className='App'>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default MainPage;
