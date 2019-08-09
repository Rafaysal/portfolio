import React from 'react'
import pic from '/Users/rafaysalahuddin/Portfolio/rafay/src/Components/rafayFinal.png'
import bg from '/Users/rafaysalahuddin/Portfolio/rafay/src/Components/bg.jpg'
import decode from '/Users/rafaysalahuddin/Portfolio/rafay/src/Components/logo.jpg'
import mcgill from '/Users/rafaysalahuddin/Portfolio/rafay/src/Components/mcgill.jpeg'
import codecademy from '/Users/rafaysalahuddin/Portfolio/rafay/src/Components/codecademy.png'
import './LandingPage.css'


export class LandingPage extends React.Component{
    render(){
        return(<div className = "content">
         <img className = 'bg' src ={bg}/>
         <img className='pic' src={pic}/>
        <span className="webDev"><span id="titles">Full-Stack Web Developer</span> | <span id="titles">Chemical Engineer</span></span>
        
        <span className = "container">
            <img className="decode" src={decode}/>
            <img className="mcgill" src={mcgill}/>
            <img className="mcgill" src={codecademy}/>
        </span>
        <div className = "aboutme">
        <div className = "heading">About Me</div>
        <div className = "info2">I am a fresh chemical engineering graduate from McGill University with
        a passion for web-development and problem solving. When I'm not coding, you can find me either spending time at the
        gym or having a good time with friends and family. Want to work together? I’d love to hear from you. 
        </div>
        
        <br/>
        </div>
        <button href='/contactInfo'className="btn"><a href='./contactInfo' className = 'connect' >CONNECT</a></button>
        <br/><br/><br/>
        
        </div>)
    }
}
