import { NavDropdown,Navbar, NavbarBrand } from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

import React from "react";
import { NavLink } from "react-router-dom";

//import {FontAwesomeIcon,faCaretDown,faCaretUp,faUser,faBookmark,faArchive,faCog} from 'react-navbar-dropdown';
import NavbarPage from './navbarpage';
import MainComponent from './components/mainComponent';
function App() {
  return (
    <div>
        
          <div className="container-fluid">
           <h2 style={{color:"#00FFFF"}}>Visualise the Optimize Technique</h2>
          </div>
          
          
        <BrowserRouter>
        
          <MainComponent/>
        </BrowserRouter>
      </div>
  );
  // return (
   
    
  //       <div className="navigation">
  //         <nav className="navbar navbar-expand navbar-dark bg-dark">
  //           <div className="container">
  //             <NavLink className="navbar-brand" to="/">
  //               React Multi-Page Website
  //             </NavLink>
  //             <div>
  //               <ul className="navbar-nav ml-auto">
  //                 <li className="nav-item">
  //                   <NavLink className="nav-link" to="/">
  //                     Home
  //                     <span className="sr-only">(current)</span>
  //                   </NavLink>
  //                 </li>
  //                 <li className="nav-item">
  //                   <NavLink className="nav-link" to="/components/pages/hungarian">
  //                     About
  //                   </NavLink>
  //                 </li>
  //                 <li className="nav-item">
  //                   <NavLink className="nav-link" to="/contact">
  //                     Contact
  //                   </NavLink>
  //                 </li>
  //                 <li className="nav-item">
  //                   <NavLink className="nav-link" to="/blog">
  //                     Blog
  //                   </NavLink>
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>
  //         </nav>
  //       </div>
      
  // );
}

export default App;
