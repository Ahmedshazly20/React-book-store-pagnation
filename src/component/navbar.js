import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
 import { FaBook } from 'react-icons/fa';
import './navbar.css'

function Navs() {
  return (
    <nav className="navbar navbar-expand-lg nav-back">
  <div className="container">
    <a className="navbar-brand h3" href="#" ><FaBook /> Booksy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active h3" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link h3" href="#">Link</a>
        </li>
      
       
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navs