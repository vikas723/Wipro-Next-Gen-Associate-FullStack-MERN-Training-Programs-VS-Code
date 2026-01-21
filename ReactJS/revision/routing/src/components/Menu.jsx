import React from 'react'
import {Link} from "react-router-dom"

function Menu() {
  return (
    <div>
        <nav style={{padding: "10px", background:"#eee"}}> {/*Inline styling*/}
            <Link to="/"></Link> {/* Linking to routing path in App.jsx */}
            <Link to="/courses">Courses</Link>
            <Link to="/contact">Contact</Link>
            
          
        </nav>
      
    </div>
  )
}

export default Menu
