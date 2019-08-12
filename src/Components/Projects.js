import React from 'react'
import './Project.css'
import bg from '/Users/rafaysalahuddin/Portfolio/rafay/src/Components/bg.jpg'
import { UncontrolledCarousel } from 'reactstrap';



export class Projects extends React.Component{
    render(){
        return (
            <div className = "holder">
            <img className = 'bg3' src ={bg}/>
          <div className = 'vid'>

          <div>
              <div className="header">Lion King Game <a target = "_blank" href='https://rafaysal.github.io/LionKingGame/'> - Play now</a></div>
          <iframe  width="525" height="394"
src="https://www.youtube.com/embed/XU59RuOBi_w">
          </iframe>
          </div>

          <div>
              <div className="header">SpongeBob Game <a target='_blank' href = 'http://shy-quince.surge.sh/'> - Play now</a></div>
           <iframe  width="525" height="394"
src="https://www.youtube.com/embed/l89KFKK7agI">
          </iframe>
          </div>

          <div>
              <div className="header">E-Commerce Sunglasses Website</div>
          <iframe  width="525" height="394"
src="https://www.youtube.com/embed/rsIJigh2Y3c">
          </iframe>
          </div>

          <div>
              <div className="header">Oil spill control automated Arduino system</div>
          <iframe  width="525" height="394"
src="https://www.youtube.com/embed/oYU99sG6lRQ">
          </iframe>
          </div>

          </div>
      </div>
        )
    }
}

/**/