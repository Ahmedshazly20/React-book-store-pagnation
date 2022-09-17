import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import './panner.css' 
import pannerimg from './img/f.png'

function Panner() {
  return (
    <div>
    <div className="container ">
    <div className="panner row  ">
      <div className="texto col-sm-12 col-md-6 col-lg-6 ">
          <h1>upto 75% off</h1>
          <p>Books play a quintessential role in every student's life by introducing them to a world of imagination, providing knowledge of the outside world, improving their reading, writing and speaking skills as well as boosting memory and intelligence.</p>
           <div className="btns"><button>Shop Now</button></div>
          
      </div>
      <div className="photo col-sm-12col-md-6 col-lg-6">
          <img src={pannerimg} alt=""/>
      </div>
    </div>
    
    
  </div>
    
    </div>
  )
}

export default Panner