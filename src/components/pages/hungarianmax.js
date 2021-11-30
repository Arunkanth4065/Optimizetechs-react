import React from 'react';
import './table.css';
import Process from "./process";
import Calculation from "./calculation";
const Hungarianmax = () => {
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
                  <td className="cell">942</td>
                  <td>681</td>
                  <td>336</td>
                </tr>
                <tr>
                  <th scope="row">Row2</th>
                  <td>523</td>
                  <td>769</td>
                  <td>255</td>
                </tr>
                <tr>
                  <th scope="row">Row3</th>
                  <td>114</td>
                  <td>478</td>
                  <td>255</td>
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
          <Process name= "Identify the minimum element in each row and subtract it from every element of that row. The result is shown in the following table. For each row or column with a single zero value cell that has not be assigned or eliminated, box that zero value as an assigned cell. For every zero that becomes assigned, cross out (X) all other zeros in the same row and the same column. If for a row and a column, there are two or more zeros and one cannot be chosen by inspection, choose the cell arbitrarily for assignment. The above process may be continued until every zero cell is either assigned or crossed (X)." />
          </div>
        </div>,
          <div class="grid-container">
            
        <div  className="table1">
        <h2>STEP-2:</h2>
        
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
                <td class="CellWithComment">0<span class="CellComment">942-942</span></td>
                <td class="CellWithComment">261<span class="CellComment">942-681</span></td>
                <td class="CellWithComment">606<span class="CellComment">942-336</span></td>
              </tr>
              <tr>
                <th scope="row">Row2</th>
                <td class="CellWithComment">419<span class="CellComment">942-523</span></td>
                <td class="CellWithComment">173<span class="CellComment">942-769</span></td>
                <td class="CellWithComment">687<span class="CellComment">942-255</span></td>
              </tr>
              <tr>
                <th scope="row">Row3</th>
                <td class="CellWithComment">828<span class="CellComment">942-114</span></td>
                <td class="CellWithComment">464<span class="CellComment">942-478</span></td>
                <td class="CellWithComment">687<span class="CellComment">942-255</span></td>
              </tr>
            </tbody>
          </table>
          </div>
          <div>
          <Calculation name="Minimum Values
                             319
                             413
                             213 
                              "/>
        </div>
          <div>
          <Process name= "Draw the minimum number of vertical and horizontal lines necessary to cover all the zeros in the reduced matrix obtained from step 3. Select the smallest element from all the uncovered elements. Subtract this smallest element from all the uncovered elements and add it to the elements, which lie at the intersection of two lines. Thus, we obtain another reduced matrix for fresh assignment. Repeat Step 3 to Step 6 this process until total assignments(N)=number of rows/columns." />
          </div>
        </div>,
        <div class="grid-container">
        <div className="table1">
        <h2>STEP-3:</h2>
        <table class="table table-bordered table-dark" style={{ width: 500,fontSize:30}}>
            
            <thead>
              <tr>
                <th >ROW/COL</th>
                <th scope="col" style={{color:"red"}}>Column1</th>
                <th scope="col" style={{color:"red"}}>Column2</th>
                <th scope="col" >Column3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="CellWithComment">Row1</th>
                <td style={{backgroundColor:"yellow",color:"red"}} class="CellWithComment">0<span class="CellComment">0-0</span></td>
                <td style={{color:"red"}} class="CellWithComment">261<span class="CellComment">261-0</span></td>
                <td class="CellWithComment">606<span class="CellComment">606-0</span></td>
              </tr>
              <tr >
                <th scope="row">Row2</th>
                <td style={{color:"red"}} class="CellWithComment">246<span class="CellComment">419-173</span></td>
                <td style={{backgroundColor:"yellow",color:"red"}} class="CellWithComment">0<span class="CellComment">173-173</span></td>
                <td class="CellWithComment">514<span class="CellComment">687-173</span></td>
              </tr>
              <tr>
                <th scope="row" class="CellWithComment">Row3</th>
                <td style={{color:"red"}} class="CellWithComment">364<span class="CellComment">828-464</span></td>
                <td style={{color:"red"}} class="CellWithComment">0<span class="CellComment">464-464</span></td>
                <td class="CellWithComment">223<span class="CellComment">687-464</span></td>
              </tr>
            </tbody>
          </table>
          </div>
          <div>
          <Calculation name="Minimum Values
                             319
                             413
                             213 
                              "/>
        </div>
          <div>
          <Process  name= "Identify the minimum element in each row and subtract it from every element of that row. The result is shown in the following table." />
          </div>
        </div>,
        <div class="grid-container">
        <div className="table1">
        <h2>STEP-4:</h2>
        <table class="table table-bordered table-dark" style={{ width: 500,fontSize:30}}>
            
            <thead>
              <tr>
                <th>ROW/COL</th>
                <th scope="col" style={{color:"red"}}>Column1</th>
                <th scope="col" style={{color:"red"}}>Column2</th>
                <th scope="col" style={{color:"red"}}>Column3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"  >Row1</th>
                <td style={{backgroundColor:"yellow",color:"red"}}>0</td>
                <td style={{color:"red"}}>261</td>
                <td style={{color:"red"}} class="CellWithComment">383<span class="CellComment">606-223</span></td>
              </tr>
              <tr >
                <th scope="row">Row2</th>
                <td style={{color:"red"}}>246</td>
                <td style={{backgroundColor:"yellow",color:"red"}}>0</td>
                <td style={{color:"red"}} class="CellWithComment">291<span class="CellComment">514-223</span></td>
              </tr>
              <tr>
                <th scope="row" >Row3</th>
                <td style={{color:"red"}}>364</td>
                <td style={{color:"red"}}>0</td>
                <td style={{backgroundColor:"yellow",color:"red"}} class="CellWithComment">0<span class="CellComment">223-223</span></td>
              </tr>
            </tbody>
          </table>
          </div>
          <div>
          <Calculation name="Minimum Values
                             319
                             413
                             213 
                              "/>
        </div>
          <div>
          <Process  name= "Identify the minimum element in each row and subtract it from every element of that row. The result is shown in the following table." />
          </div>
        </div>,
  <div class="grid-container">
  <div className="table1">
  <h2>STEP-5:</h2>
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
          <td style={{backgroundColor:"yellow",color:"red"}} >942</td>
          <td class="CellWithComment">0<span class="CellComment">681</span></td>
          <td class="CellWithComment">0<span class="CellComment">336</span></td>
        </tr>
        <tr >
          <th scope="row">Row2</th>
          <td class="CellWithComment">0<span class="CellComment">523</span></td>
          <td style={{backgroundColor:"yellow",color:"red"}}>769</td>
          <td class="CellWithComment">0<span class="CellComment">255</span></td>
        </tr>
        <tr>
          <th scope="row" >Row3</th>
          <td class="CellWithComment">0<span class="CellComment">114</span></td>
          <td class="CellWithComment">0<span class="CellComment">478</span></td>
          <td style={{backgroundColor:"yellow",color:"red"}}>255</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div>
    <Calculation name="Minimum Values
                       319
                       413
                       213 
                        "/>
  </div>
    <div>
    <Process  name= "Identify the minimum element in each row and subtract it from every element of that row. The result is shown in the following table." />
    </div>
  </div>
]

    return <div>
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
export default Hungarianmax