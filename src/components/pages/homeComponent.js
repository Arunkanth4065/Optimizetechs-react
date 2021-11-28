import React, {Component} from 'react';
import { Link ,Nav,NavDropdown} from 'react-router-dom';
import { Dropdown , DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MenuItem from 'react-bootstrap';
import './table.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
class HomeComponent extends Component {
    render () {
        return (
            // <div className="homecomponent">
            //     <div className="container">
                    
            //         <div className="row">
            //             <div className="col-md-4">
            //                 <Link to='/hungarianmin'>
            //                     <div className="tech-card">
            //                         <h3 style={{color: "#00FFFF"}}>Assignment Problem(Minimum)</h3>
            //                         <p>The transformation can be represented by aligning two alphabets;
            //                         the cipher alphabet is the plain alphabet rotated left or right by some number of positions.
            //                         <a href="https://en.wikipedia.org/wiki/Caesar_cipher" target="_blank" rel="noopener noreferrer">more...</a></p>
            //                     </div>
            //                 </Link>
            //             </div>
            //             <div className="col-md-4">
            //                 <Link to='/hungarianmax'>
            //                     <div className="tech-card">
            //                         <h3 style={{color: "#00FFFF"}}>Assignment Problem(Maximum)</h3>
            //                         <p>The transformation can be represented by aligning two alphabets;
            //                         the cipher alphabet is the plain alphabet rotated left or right by some number of positions.
            //                         <a href="https://en.wikipedia.org/wiki/Caesar_cipher" target="_blank" rel="noopener noreferrer">more...</a></p>
            //                     </div>
            //                 </Link>
            //             </div>
            //         </div>
            //     </div>
            // </div>
           <div className="hungarian">
            <div className="dropdown">
            <button  className="dropbtn">Assignment Problem (By Hungarian Method)</button>
            <div className="dropdown-content">
           <Link to='/hungarianmin' activeStyle><a> Assignment Problem(for Minimum)</a></Link>
           <Link to='/hungarianmax' activeStyle><a>Assignment Problem(for Maximum)</a></Link>
          <Link to='/homecomponent' activeStyle><a>Assignment Problem( for M not equals to N)</a></Link>
            </div>
            
            </div>
            </div>
        
        )
    }
   
}
export default HomeComponent;