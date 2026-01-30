import logo from './logo.svg';
import './App.css';

// import FunctionDemo from "./functional_components/FunctionDemo";
// import ClassDemo from "./class_components/ClassDemo";

import Menu from './routingwebpages/Menu';
import Home from './routingwebpages/Home';
import ContactUs from './routingwebpages/ContactUs';
import NoMatch from './routingwebpages/NoMatch';
import AboutUs from './routingwebpages/AboutUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Footer from './routingwebpages/Footer';
import Header from './routingwebpages/Header';
function App() {

  return (
    <>
    <div >
      {/* <h1> Welcome to Create-React-App </h1>
      <h4> Example of types of Components :</h4>
     {/* props -- means to access the properties of one components or passing the data from one c to another company */}
      {/* <FunctionDemo username="Niti" company="GreatLearning"/> */}
      {/* } */}
    
    </div>
    <h1> Welcome to Create-React-App </h1>
    
        <Header></Header>
        
    <Menu></Menu>
   
    <Routes> {/*this block decides which page to show based on URL*/}
        <Route path="/about" element={<AboutUs/>}></Route> {/*“When URL is about/, show About component.”*/}
        <Route path="/contact" element={<ContactUs/>}></Route> {/*When URL is /contact, show ContactUs page.*/}
        <Route path="/" element={<Home/>}></Route> {/*When URL is /, show Home page.*/}
        <Route path="*" element={<NoMatch/>}></Route>
    </Routes>
     <Footer/>
     
     <FunctionDemo/>
     <ClassDemo/>
</>
  );
}
export default App
