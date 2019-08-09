import React from 'react'
import './Project.css'
import bg from '/Users/rafaysalahuddin/Portfolio/rafay/src/Components/bg.jpg'

export class Projects extends React.Component{
    render(){
        return (<div className = "holder">
              <img className = 'bg3' src ={bg}/>
            <div className = 'vid'>
            
             <iframe  width="525" height="394"
src="https://www.youtube.com/embed/l89KFKK7agI">
            </iframe>

            <iframe  width="525" height="394"
src="https://www.youtube.com/embed/rsIJigh2Y3c">
            </iframe>

            <iframe  width="525" height="394"
src="https://www.youtube.com/embed/oYU99sG6lRQ">
            </iframe>

            </div>
        </div>)
    }
}