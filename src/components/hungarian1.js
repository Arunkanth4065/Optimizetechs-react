import React, {Component} from 'react';
import './table.css';
import Process from "./process";
import Calculation from "./calculation";
class Hungarian extends Component {
  
  render() {
     
      return (
          <div >
            <div>
            <div className="table1" >
            <caption>STEP-1:</caption>
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
                      <td>523</td>
                      <td>769</td>
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
              <Process name= "Identify the minimum element in each row and subtract it from every element of that row. The result is shown in the following table. For each row or column with a single zero value cell that has not be assigned or eliminated, box that zero value as an assigned cell. For every zero that becomes assigned, cross out (X) all other zeros in the same row and the same column. If for a row and a column, there are two or more zeros and one cannot be chosen by inspection, choose the cell arbitrarily for assignment. The above process may be continued until every zero cell is either assigned or crossed (X)." />
              </div>
            </div>
            
            
            
            
            <div>
            
            <div  className="table1">
            <caption>STEP-2:</caption>
            
            <table class="table table-bordered table-dark" style={{ width: 500 ,fontSize:30}}>
                
                <thead>
                  <tr>
                    <th>ROW/COL</th>
                    <th scope="col" style={{color:"red"}}>Column1</th>
                    <th scope="col">Column2</th>
                    <th scope="col" style={{color:"red"}}>Column3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Row1</th>
                    <td style={{color:"red"}}>268</td>
                    <td>514</td>
                    <td style={{backgroundColor:"yellow",color:"red"}}>0</td>
                  </tr>
                  <tr>
                    <th scope="row">Row2</th>
                    <td style={{backgroundColor:"yellow",color:"red"}}>0</td>
                    <td>364</td>
                    <td style={{color:"red"}}>783</td>
                  </tr>
                  <tr>
                    <th scope="row">Row3</th>
                    <td style={{color:"red"}}>606</td>
                    <td>345</td>
                    <td style={{color:"red"}}>0</td>
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
            </div>
            <div>
            <div className="table1">
            <caption>STEP-3:</caption>
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
                    <td style={{color:"red"}}>268</td>
                    <td style={{color:"red"}}>169</td>
                    <td style={{backgroundColor:"yellow",color:"red"}}>0</td>
                  </tr>
                  <tr >
                    <th scope="row">Row2</th>
                    <td style={{backgroundColor:"yellow",color:"red"}}>0</td>
                    <td style={{color:"red"}}>19</td>
                    <td style={{color:"red"}}>783</td>
                  </tr>
                  <tr>
                    <th scope="row" >Row3</th>
                    <td style={{color:"red"}}>606</td>
                    <td style={{backgroundColor:"yellow",color:"red"}}>0</td>
                    <td style={{color:"red"}}>0</td>
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
          </div>

      );
  }
}

export default Hungarian;