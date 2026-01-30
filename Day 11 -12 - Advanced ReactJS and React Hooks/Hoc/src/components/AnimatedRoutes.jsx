import React from 'react'
import {Routes, Route, useLocation} from "react-router-dom"
import{useRef} from "react"
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import Home from '../pages/Home'
import Employee from '../pages/Employee'
import { ProtectedEmployeePage , ProtectedAdminPage, ProtectedCoursesPage} from '../pages/protectedPages'
function Animation() {
    const location =  useLocation();
    const nodeRef = useRef(null); // useRef is used to remeber the DOM Element, becuase when transition tries to animte then it wont find dom element so react throes a transition error, Reference is null
  return (
    <div>
        <TransitionGroup>
            <CSSTransition key={location.pathname} classNames="fade" timeout ={300} nodeRef = {nodeRef}>
                <div ref={nodeRef}>
                <Routes location={location}>
                    <Route path ="/" element={<Home/>}/>
                    <Route path = "/employees" element={<ProtectedEmployeePage/>}/>
                    <Route path = "/courses" element={<ProtectedCoursesPage/>}/>
                    <Route path = "/admin" element={<ProtectedAdminPage/>}/>
                </Routes>
                </div>
            </CSSTransition>
        </TransitionGroup>
      
    </div>
  )
}

export default Animation
