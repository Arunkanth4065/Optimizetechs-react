import React from 'react';
import './table.css';
import Process from "./process";
import Calculation from "./calculation";

const Hungarianmin = () => {
    const [count, setCount] = React.useState(0);
    
    const components = [
       <div class="grid-container">
        <div className="table1" >
        <h2>STEP-1:</h2>
          <table class="table table-bordered table-dark" style={{ width: 500 ,fontSize:30}}>
                 
              <thead>
                <tr>
                  <th>ROW/COL</th>
                  <th scope="col">Column1</th>
                  <th scope="col">Column2</th>
                  <th scope="col">Column3</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <th scope="row">Row1</th>
                  <td >523</td>
                  <td >769</td>
                  <td>255</td>
                </tr>
                <tr>
                  <th scope="row">Row2</th>
                  <td>114</td>
                  <td>478</td>
                  <td>897</td>
                </tr>
                <tr>
                  <th scope="row">Row3</th>
                  <td>942</td>
                  <td>681</td>
                  <td>336</td>
                </tr>
              </tbody>
            </table>
        </div>
        <div>
          <Calculation name="Minimum Values
                             in 1st-row 255,
                             in 2nd-row 114,
                             in 3rd-row 336
                              "/>
        </div>
        <div className="process1">
          <Process name= "Reduce the matrix by selecting the smallest element in each row and subtract with other elements in that row.Take any row or column which has a single zero and assign by squaring it. Strike off the remaining zeros, if any, in that row and column (X). Repeat the process until all the assignments have been made." />
          </div>
        </div>,
          <div class="grid-container">
            
        <div  className="table1">
        <h2>STEP-2:</h2>
        
        <table class="table table-bordered table-dark" style={{ width: 500 ,fontSize:30}}>
            
            <thead>
              <tr>
                <th>ROW/COL</th>
                <th scope="col" style={{color:"#FF3300"}}>Column1</th>
                <th scope="col">Column2</th>
                <th scope="col" style={{color:"#FF3300"}}>Column3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Row1</th>
                <td class="CellWithComment" style={{color:"#FF3300"}}>268<span class="CellComment">523-255</span></td>
                <td class="CellWithComment">514<span class="CellComment">769-255</span></td>
                <td style={{backgroundColor:"#F2AA4cFF",color:"#FF3300"}} class="CellWithComment">0<span class="CellComment">255-255</span></td>
              </tr>
              <tr>
                <th scope="row">Row2</th>
                <td style={{backgroundColor:"#F2AA4cFF",color:"#FF3300"}}class="CellWithComment">0<span class="CellComment">114-114</span></td>
                <td class="CellWithComment">364<span class="CellComment">478-114</span></td>
                <td style={{color:"#FF3300"}} class="CellWithComment">783<span class="CellComment">897-114</span></td>
              </tr>
              <tr>
                <th scope="row">Row3</th>
                <td style={{color:"#FF3300"}} class="CellWithComment">606<span class="CellComment">942-336</span></td>
                <td  class="CellWithComment">345<span class="CellComment">681-336</span></td>
                <td style={{color:"#FF3300"}} class="CellWithComment">0<span class="CellComment">336-336</span></td>
              </tr>
            </tbody>
          </table>
          </div>
          <div>
          <Calculation name="After marking all rows and columns small value is 345
                              "/>
        </div>
          <div>
          <Process name= "Select the smallest element of the whole matrix, which is NOT COVERED by lines. Subtract this smallest element with all other remaining elements that are NOT COVERED by lines and add the element at the intersection of lines. Leave the elements covered by single line as it is. " />
          </div>
        </div>,
        <div class="grid-container">
        <div className="table1">
        <h2>STEP-3:</h2>
        <table class="table table-bordered table-dark" style={{ width: 500,fontSize:30}}>
            
            <thead>
              <tr>
                <th>ROW/COL</th>
                <th scope="col" style={{color:"#FF3300"}}>Column1</th>
                <th scope="col" style={{color:"#FF3300"}}>Column2</th>
                <th scope="col" style={{color:"#FF3300"}}>Column3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"  >Row1</th>
                <td style={{color:"#FF3300"}} class="CellWithComment">268</td>
                <td style={{color:"#FF3300"}} class="CellWithComment">169<span class="CellComment">514-345</span></td>
                <td style={{backgroundColor:"#F2AA4cFF",color:"#FF3300"}} class="CellWithComment">0</td>
              </tr>
              <tr >
                <th scope="row">Row2</th>
                <td style={{backgroundColor:"#F2AA4cFF",color:"#FF3300"}} class="CellWithComment">0</td>
                <td style={{color:"#FF3300"}} class="CellWithComment">19<span class="CellComment">364-345</span></td>
                <td style={{color:"#FF3300"}} class="CellWithComment">783</td>
              </tr>
              <tr>
                <th scope="row" >Row3</th>
                <td style={{color:"#FF3300"}} class="CellWithComment">606</td>
                <td style={{backgroundColor:"#F2AA4CFF",color:"#FF3300"}} class="CellWithComment">0<span class="CellComment">345-345</span></td>
                <td style={{color:"#FF3300"}} class="CellWithComment">0</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div>
          <Calculation name="Given marix is optimized.
                              "/>
        </div>
          <div>
          <Process  name= "Number of lines drawn = order of matrix, then optimally is reached.Take any row or column which has a single zero and assign by squaring it. Strike off the remaining zeros, if any, in that row and column (X). Repeat the process until all the assignments have been made" />
          </div>
        </div>,
        <div class="grid-container">
        <div className="table1">
        <h2>STEP-4:</h2>
        <table class="table table-bordered table-dark" style={{ width: 500,fontSize:30}}>
            
            <thead>
              <tr>
                <th>ROW/COL</th>
                <th scope="col" style={{color:"white"}}>Column1</th>
                <th scope="col" style={{color:"white"}}>Column2</th>
                <th scope="col" style={{color:"white"}}>Column3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"  >Row1</th>
                <td style={{color:"white"}} class="CellWithComment">0<span class="CellComment">523</span></td>
                <td style={{color:"white"}} class="CellWithComment">0<span class="CellComment">769</span></td>
                <td style={{backgroundColor:"#F2AA4cFF",color:"#FF3300"}}>255</td>
              </tr>
              <tr >
                <th scope="row">Row2</th>
                <td style={{backgroundColor:"#F2AA4cFF",color:"#FF3300"}}>114</td>
                <td style={{color:"white"}} class="CellWithComment">0<span class="CellComment">478</span></td>
                <td style={{color:"white"}} class="CellWithComment">0<span class="CellComment">897</span></td>
              </tr>
              <tr>
                <th scope="row" >Row3</th>
                <td style={{color:"white"}} class="CellWithComment">0<span class="CellComment">942</span></td>
                <td style={{backgroundColor:"#F2AA4cFF",color:"#FF3300"}} >681</td>
                <td style={{color:"white"}} class="CellWithComment">0<span class="CellComment">336</span></td>
              </tr>
            </tbody>
          </table>
          </div>
          <div>
          <Calculation name="Minimization Cost of given matrix is 255+114+681=1050
                              "/>
        </div>
          <div>
          <Process  name= "Now given Assignment Problem is optimized by hungarian method" />
          </div>
        </div>
    ]

    return <div>
      <h3>Minimization of Assignment Problem</h3>
       <div>
        {
            // render component from our components array
            components[count]
        }
        </div>
        <div className="pagebtn">
        {/* show previous button if we are not on first element */}
        {count > 0 && <button className="previous" onClick={() => setCount(count - 1)}>&laquo; Previous</button>}
        
        {/* hide hungarianmax button if we are at the last element */}
        {count < components.length - 1 && <button className="next" onClick={() => setCount(count + 1)}>Next &raquo;</button>}
        </div>
    </div>
}
export default Hungarianmin