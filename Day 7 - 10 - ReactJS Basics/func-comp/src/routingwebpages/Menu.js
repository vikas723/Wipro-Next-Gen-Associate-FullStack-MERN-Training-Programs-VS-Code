import React from 'react'
import { NavLink } from 'react-router-dom';

function Menu(){
    return(
        <div>

            {/* <h3> Link Tag </h3>
            <ul type=" ">
                <li><NavLink to ="/">Home</NavLink></li>
                <li><NavLink to ="/about">About</NavLink></li>
                <li><NavLink to ="/contact">Contact Us</NavLink></li>
            </ul>
            <h4> Anchor tag </h4>
             <a href= "/"> Home</a>&nbsp;&nbsp;&nbsp;
             <a href= "/about">About Us</a>&nbsp;&nbsp;&nbsp;
             <a href = "/contact">Contact Us </a>&nbsp;&nbsp;&nbsp; */}

             <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">AboutUs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">ContactUs</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true"> //change to true for dropdown menu
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Contact</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Menu
