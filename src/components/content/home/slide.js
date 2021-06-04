import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import nsc from '../../images/nsc.gif'
import nsc2 from '../../images/nsc2.gif'
import nsc3 from '../../images/nsc3.gif'
import '../home/slide.css'

const slideImages = [
  nsc,
  nsc2,
  nsc3
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;