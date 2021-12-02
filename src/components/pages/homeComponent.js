import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './table.css';
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
           <div>
               
               <div className="home"> 
              
        <div className="home1">  <h3>Assignment Problem(By Hungarian Method)</h3>
        <p>Assignment problem is a special type of lpp in which the objective is to find the optimum alloaction of a number tasks (or) job to an equal number of facilities(persons)</p>
        <p>An assignment problem can be easily solved by applying Hungarian method which consists of two phases. In the first phase, row reductions and column reductions are carried out. In the second phase, the solution is optimized on iterative basis.</p>


          <p>An Assignment problem can be started in the form of m*n matrix[c(i,j)] called cost (or) effectiveness matrix where c(i,j) is the cost of assigning ith facility(person to the jth job</p>
          <p>Assignment models used are are given as follows....</p>
          </div>
        </div>
        <div className="hungarian">
            <div className="dropdown">
            <button  className="dropbtn">Assignment Problem (By Hungarian Method)</button>
            <div className="dropdown-content">
           <Link to='/hungarianmin' activeStyle><a> Assignment Problem(for Minimum)</a></Link>
           <Link to='/hungarianmax' activeStyle><a>Assignment Problem(for Maximum)</a></Link>
          <Link to='/hungarianrc' activeStyle><a>Assignment Problem( for M not equals to N)</a></Link>
            </div>
            
            </div>
            </div>
            </div>
        )
    }
   
}
export default HomeComponent;