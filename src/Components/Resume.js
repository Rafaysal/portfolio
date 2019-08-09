import React from 'react';
import bg from '/Users/rafaysalahuddin/Portfolio/rafay/src/Components/bg.jpg'
import cv from '/Users/rafaysalahuddin/Portfolio/rafay/src/Components/cv.jpg'
import './Resume.css'
import phone from './phone.png'
import linkedin from './linkedin.png'
import gmail from './gmail.png'
import {Link} from 'react-router-dom'

export class Resume extends React.Component{
    render(){
        return (<div className = "holder2">
            <img className = 'bg2' src ={bg}></img>
            <div className = 'cv'>

                <div className ="name">
                    <span>R</span>AFAY <span>S</span>ALAHUDDIN
                </div>


                <div className ='info'>
                    <div>
                        <img className = "icon" src = {gmail}/>
                        <span className="iconInfo"> rafaysalahuddin@gmail.com</span>
                    </div>
                    <div className = 'fone'>
                        <img className = "icon" src = {phone}/>
                        <span className="iconInfo"> +1(514)-715-8384</span>
                    </div>
                    <div className="extra">
                        <img className = "icon" src = {linkedin}/>
                        <span className="iconInfo">linkedin.com/in/rafay-salahuddin</span>
                    </div>
                </div>

                <div className = 'name'>
                    <span>E</span>DUCATION

                    <div className = 'education'>
                        <br/>
                    <b className = 'point-title'>Full Stack Web-Development Bootcamp, </b>
                    <em><a target = '_blank' href='https://concordiabootcamps.ca/'>Concordia Bootcamps/DecodeMTL</a></em>
                    <span className = 'date'>June-Aug 2018</span>
                    <div className ='point'>-  Mastered the fundamentals of programming and learnt to build complex web applications
                        at a University approved 500-hour long Full-stack immersive bootcamp
                    </div>
                    <div>- Created multiple <Link id = 'goto' to = '/projects'>React applications</Link> by combining front-end and back-end technologies </div>
                    </div>

                    <div className = 'education'>
                        <br/>
                    <b>Bachelor of Chemical Engineering (GPA: 3.63), </b>
                    <em><a target = '_blank' href='https://www.mcgill.ca/chemeng/'>McGill University </a></em>
                    <span className = 'date'>2014-2019</span>
                    <div className ='point'>-  Graduated in the top quartile of my class in a bachelor's degree 
                    where problem-solving, experimenting, planning, and communication skills are emphasized
                    </div>
                    </div>

                    <div className = 'education'>
                        <br/>
                    <b className='point-title'>Full Stack Web-Development Course, </b>
                    <em><a target = '_blank' href='https://www.codecademy.com'>Codecademy PRO</a></em>
                    <span className = 'date'>July-Aug 2019</span>
                    <div className ='point'>- Completed Codecademy's Full-stack Web-Development course, 
                    which covered HTML, CSS, JavaScript and React
                    </div>
                    </div>

                   
                </div>

                <div className = 'name'>
                    <span>S</span>KILLS
                    <div className = 'education'>
                        <br/>   
                        <div className = 'point'><b >Programming Languages: </b>JavaScript (React), HTML/CSS, MATLAB, C, Arduino IDE</div>
                        <div className = 'point'><b >Languages: </b>Fluent in English, Urdu and Hindi</div>
                        <div className = 'point'><b >Software Tools: </b>Command Line, Git, GitHub, Node.js, Babel, Visual Studio Code</div>
                        <div className = 'point'><b >Tools: </b>Microsoft Excel, HYSYS, Illustrator CC, LabView, ImageJ</div>
                        
                    </div>
                </div>

                <div className = 'name'>
                    <span>E</span>XPERIENCE & <span>P</span>ROJECTS
                    <div className = 'education'>
                        <br/>
                    
                    <b className='point-title'>Front-End E-Market, </b>
                    <em><a target = '_blank' href='https://concordiabootcamps.ca/'>Concordia Bootcamps/DecodeMTL </a></em>
                    <span className = 'date'>2018</span>
                    <div className ='point'>- Designed an online marketplace called <Link id = 'goto' to = '/projects'> SpectacleHUB </Link> 
                    as a Front-end developer in a 3-member team to buy and sell glasses using Javascript, HTML & CSS
                    </div>
                    

                    <b className='point-title'>Front-End Game Designer, </b>
                    <em><a target = '_blank' href='https://concordiabootcamps.ca/'>Concordia Bootcamps/DecodeMTL </a></em>
                    <span className = 'date'>2018</span>
                    <div className ='point'>- Created a <Link id = 'goto' to = '/projects'>Childrens Spongebob game </Link> using Javascript, HTML & CSS
                    </div>

                    <b className='point-title'>Online Portfolio Website Design</b> 
                    <span className = 'date'>2019</span>
                    <div className ='point'>- Created this website portfolio for myself using various web-development tools
                    </div>

                    <b className='point-title'>Capstone Plant Design, </b>
                    <em><a target = '_blank' href='https://www.celluforce.com/'>CelluForce </a></em>
                    <span className = 'date'>2018-2019</span>
                    <div className ='point'>- Designed a highly efficient Levulinic Acid production plant using Aspen HYSYS and Excel</div>
                    <div className ='point'>- Produced a 200-page report which detailed the financial viability, durability and energy requirements of the plant</div>
                   
                    </div>

                  
                </div>
            </div>
            </div> 
        )
    }
}