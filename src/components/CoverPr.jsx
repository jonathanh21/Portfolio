import React, { useEffect, useState} from 'react';
import weather from '../assests/images/weather-app.jpg'
// import movies from '../assests/images/movies-app.jpg'
import countries from '../assests/images/countries-app.PNG'
import mist from '../assests/images/mist-app.png';
import anime from 'animejs/lib/anime.es.js';
import previous from '../assests/icons/previous.png'
import nexti from '../assests/icons/next.png'
import inform from '../assests/icons/info.png'


const proj = {
    'COUNTRIES WEB': 'The countries web is a site where you can find information about all the countries in the world and record activies related to each one of them', 
    'WEATHER-APP':'The weather app is an application to find information about the weather in the main cities of the world', 
    // 'YOUR MOVIES': 'Your movies is a website to look out for your favorite movie and find out interesting info realted', 
    'MIST BO':'Mist app is a marketplace where the Allies are able to offer their beautiful care services. Our team developed the On boarding stage the the dashboard for the allies'
}


const CoverPr = () => {
const[activeImg, setActiveImg] = useState(countries)
const[images, setImages] = useState([countries,weather/* ,movies */,mist])
const[activeProject, setActiveProject] = useState('COUNTRIES WEB')
const[projects, setProjects] = useState(['COUNTRIES WEB', 'WEATHER-APP'/* , 'YOUR MOVIES' */, 'MIST BO'])
const[info, setInfo] = useState(true)
const[animation, setAnimation] = useState(false)

useEffect(()=> {
    anime({
        targets: '.projectsHeader',
        opacity:'30%',
        easing: 'easeInOutQuad',
        duration: 500
      });
},[activeProject])

useEffect(()=> {
    anime({
        targets: '.textImg',
        height:['324px','0px'],
        width:['760px','0px'],
        opacity:['100%','0%'],
        fontSize:['20px','0px'],
        translateX:['0','750px'],
        easing: 'easeInOutQuad',
        duration: 50,
    })
},[])

    const next = () => {
        if(!animation) {
            setAnimation(true)
            setActiveImg(images[1])
            const aux = [...images]
            const aux2 = aux.shift()
            aux.push(aux2)
            setImages(aux)

            setActiveProject(projects[1])
            const auxi = [...projects]
            const auxi2 = auxi.shift()
            auxi.push(auxi2)
            setProjects(auxi)

            anime({
                targets: '.leftImg',
                opacity:['100%','50%'],
                height:['325px','250px'],
                width:['500px','400px'],
                translateX:['110px','0px'],
                translateY:['0px','40px'],
                easing: 'linear',
                duration: 400,
                zIndex:[1,0]
            });
            anime({
                targets: '.centerImg',
                height:['250px','325px'],
                width:['400px','500px'],
                translateX:['275px','130px'],
                translateY:['40px','0px'],
                opacity:['100%','100%'],
                easing: 'linear',
                duration: 400,
                zIndex:[0,1]
            })
            anime({
                targets: '.rightImg',
                opacity:['50%','50%'],
                translateX:['250px','357px'],
                translateY:['40px','40px'],
                easing: 'linear',
                duration: 400,
                zIndex:[-1,0]
            });
            setTimeout(()=>{
                anime({
                    targets: '.centerImg',
                    translateX:['130px','125px'],
                    scale:1.02,
                    easing: 'linear',
                    duration: 75,
                    direction:'alternate'
                })
            },400)
            setTimeout(() => {
                setAnimation(false)
            }, 475);
        }
    }

    const activeInfo = () => {
        setInfo(!info)
        if (info) {
            anime({
                targets: '.textImg',
                height:['0px','324px'],
                width:['0px','760px'],
                opacity:['100%'],
                fontSize:['0px','20px'],
                translateX:['750px','0'],
                easing: 'easeInOutQuad',
                duration: 600,
            })
        } else {
            anime({
                targets: '.textImg',
                height:['324px','0px'],
                width:['750px','0px'],
                opacity:['100%','0%'],
                fontSize:['20px','0px'],
                translateX:['0','760px'],
                easing: 'easeInOutQuad',
                duration: 600,
            })
        }
    }

    const back = () => {
        if(!animation) {
            setAnimation(true)
            setActiveImg(images[images.length-1])
            const aux = [...images]
            const aux2 = aux.pop()
            aux.unshift(aux2)
            setImages(aux)

            setActiveProject(projects[projects.length-1])
            const auxi = [...projects]
            const auxi2 = auxi.pop()
            auxi.unshift(auxi2)
            setProjects(auxi)

            anime({
                targets: '.leftImg',
                opacity:['50%','50%'],
                translateX:['110px','0px'],
                translateY:['40px','40px'],
                easing: 'linear',
                duration: 400,
                zIndex:[-1,0]
            });
            anime({
                targets: '.centerImg',
                height:['250px','325px'],
                width:['400px','500px'],
                opacity:['100%','100%'],
                translateX:['0px','130px'],
                translateY:['40px','0px'],
                easing: 'linear',
                duration: 400,
                zIndex:[0,1]
            })
            anime({
                targets: '.rightImg',
                opacity:['100%','50%'],
                height:['325px','250px'],
                width:['500px','400px'],
                translateX:['250px','357px'],
                translateY:['0px','40px'],
                easing: 'linear',
                duration: 400,
                zIndex:[1,0]
            });
            setTimeout(()=>{
                anime({
                    targets: '.centerImg',
                    translateX:['130px','135px'],
                    scale:1.02,
                    easing: 'linear',
                    duration: 75,
                    direction:'alternate'
                })
            },400)
            setTimeout(() => {
                setAnimation(false)
            }, 475);
        }
    }
    
    return (
        <div id='projects' className='right second'>
            <div className='projectsHeader'>
                <span>{activeProject}</span>
                <div className='note'>More info about my projects at <a target="_blank" href='https://github.com/jonathanh21'>Github</a></div>
            </div>
            <div className='infoIcon'><img src={inform} onClick={activeInfo} alt=''/></div>
            <div className='flex'>
                <button className='btnCarrouselLeft' onClick={back}><img className='arrows' src={previous}/></button>
                <div className='textImg'>{proj[activeProject]}</div>
                <img className='projectsImg leftImg'  src={images[images.length-1]}/>
                <img className='projectsImg centerImg'  src={activeImg}/>
                <img className='projectsImg rightImg'  src={images[1]}/>
                <button className='btnCarrouselRight'onClick={next}><img className='arrows' src={nexti}/></button>
            </div>
        </div>
    )
}
export default CoverPr