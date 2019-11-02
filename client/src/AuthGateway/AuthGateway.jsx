import React, {Component} from 'react';
import Register from './Register/Register';
import Login from './Login/Login'
import './Login/Login.css';
import '../App.css';
import { Slide } from 'react-slideshow-image';
import './slideshow.css'
 import pic from '../assets/ARI.png';
 import pic1 from '../assets/ATL.png';
 import pic3 from '../assets/BAL.png';
 import pic29 from '../assets/BUF.png';
 import pic28 from '../assets/CAR.png';
 import pic27 from '../assets/CHI.png';
 import pic30 from '../assets/CIN.png';
 import pic26 from '../assets/CLE.png';
 import pic25 from '../assets/DAL.png';
 import pic24 from '../assets/DEN.png';
 import pic2 from '../assets/DET.png';
 import pic23 from '../assets/GB.png';
 import pic4 from '../assets/HOU.png';
 import pic5 from '../assets/IND.png';
 import pic6 from '../assets/JAX.png';
 import pic7 from '../assets/KC.png';
 import pic8 from '../assets/LAC.png';
 import pic9 from '../assets/LAR.png';
 import pic22 from '../assets/MIA.png';
 import pic31 from '../assets/MIN.png'
 import pic21 from '../assets/NE.png';
 import pic10 from '../assets/NO.png';
 import pic11 from '../assets/NYG.png';
 import pic12 from '../assets/NYJ.png';
 import pic13 from '../assets/OAK.png';
 import pic14 from '../assets/PHI.png';
 import pic15 from '../assets/PIT.png';
 import pic16 from '../assets/SEA.png';
 import pic17 from '../assets/SF.png';
 import pic18 from '../assets/TB.png';
 import pic19 from '../assets/TEN.png';
 import pic20 from '../assets/WAS.png';


const slideImages = [
  'assets/ARI.png',
  '../assets/ATL.png',
  '../assets/BAL.png',
  '../assets/BUF.png',
  '../assets/CAR.png',
  '../assets/CHI.png'
];
 
const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {

    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div class ='slideshow-img' style={{'backgroundImage': `url(${pic})`}}>
              {/* <span>Slide 1</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic1})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic2})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic3})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic4})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic5})`}}>
               
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic6})`}}>
               
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic7})`}}>
               
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic8})`}}>
               
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic9})`}}>
               
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic10})`}}>
               
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic11})`}}>
               
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic12})`}}>
               
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic14})`}}>
               
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic15})`}}>
               
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic13})`}}>
               
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic16})`}}>
               
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic17})`}}>
               
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic18})`}}>
               
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic19})`}}>
               
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic20})`}}>
               
            </div>
          </div> <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic21})`}}>
               
            </div>
          </div> <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic22})`}}>
               
            </div>
          </div> <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic23})`}}>
               
            </div>
          </div> <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic24})`}}>
               
            </div>
          </div> <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic25})`}}>
               
            </div>
          </div> <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic26})`}}>
               
            </div>
          </div> <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic27})`}}>
               
            </div>
          </div> <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic28})`}}>
               
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic29})`}}>
               
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic30})`}}>
               
            </div>
          </div>
          <div className="each-slide">
            <div  class ='slideshow-img' style={{'backgroundImage': `url(${pic31})`}}>
               
            </div>
          </div>
          
        </Slide>
      </div>
    )
}

class AuthGateway extends Component {
    constructor () {
        super();
    }
    render(){
        return(
            <div>
                <h1 class='my-font'>The Fantasy Football Ranker</h1>
                <h2 class='my-font'>Register as a New User</h2>
                <Register handleRegister={this.props.handleRegister}/>
                <h2 class='my-font login-text' >Login</h2>
                <Login handleLogin={this.props.handleLogin}/>
                <Slideshow />
            </div>
        )
    }
}

export default AuthGateway