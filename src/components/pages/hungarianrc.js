import React from 'react';
import './table.css';
import Process from "./process";
import Calculation from "./calculation";

const Hungarianrc = () => {
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
                  <th scope="col">Column4</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <th scope="row">Row1</th>
                  <td >455</td>
                  <td >347</td>
                  <td >879</td>
                  <td >657</td>
                </tr>
                <tr>
                  <th scope="row">Row2</th>
                  <td>155</td>
                  <td>675</td>
                  <td>456</td>
                  <td>890</td>
                </tr>
                <tr>
                  <th scope="row">Row3</th>
                  <td>754</td>
                  <td>234</td>
                  <td>576</td>
                  <td>945</td>
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
         <div className="table1" >
        <h2>STEP-2:</h2>
        <table class="table table-bordered table-dark" style={{ width: 500 ,fontSize:30}}>
               
            <thead>
              <tr>
                <th>ROW/COL</th>
                <th scope="col">Column1</th>
                <th scope="col">Column2</th>
                <th scope="col">Column3</th>
                <th scope="col">Column4</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <th scope="row">Row1</th>
                <td >455</td>
                <td >347</td>
                <td >879</td>
                <td >657</td>
              </tr>
              <tr>
                <th scope="row">Row2</th>
                <td>155</td>
                <td>675</td>
                <td>456</td>
                <td>890</td>
              </tr>
              <tr>
                <th scope="row">Row3</th>
                <td>754</td>
                <td>234</td>
                <td>576</td>
                <td>945</td>
              </tr>
              <tr>
                <th scope="row">Row4</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
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
       <div className="table1">
       <h2>STEP-3:</h2>
       <table class="table table-bordered table-dark" style={{ width: 500,fontSize:30}}>
           
           <thead>
             <tr>
               <th>ROW/COL</th>
               <th scope="col" style={{color:"red"}}>Column1</th>
               <th scope="col" style={{color:"red"}}>Column2</th>
               <th scope="col" style={{color:"red"}}>Column3</th>
               <th scope="col" style={{color:"red"}}>Column4</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <th scope="row"  >Row1</th>
               <td style={{color:"red"}} class="CellWithComment">108<span class="CellComment">455-347</span></td>
               <td style={{color:"red"}} class="CellWithComment">0<span class="CellComment">347-347</span></td>
               <td style={{backgroundColor:"yellow",color:"red"}} class="CellWithComment">532<span class="CellComment">879-347</span></td>
               <td class="CellWithComment">310<span class="CellComment">657-347</span></td>
             </tr>
             <tr >
               <th scope="row">Row2</th>
               <td style={{backgroundColor:"yellow",color:"red"}} class="CellWithComment">0<span class="CellComment">155-155</span></td>
               <td style={{color:"red"}} class="CellWithComment">520<span class="CellComment">675-155</span></td>
               <td style={{color:"red"}} class="CellWithComment">301<span class="CellComment">456-155</span></td>
               <td class="CellWithComment">735<span class="CellComment">890-155</span></td>
             </tr>
             <tr>
               <th scope="row" >Row3</th>
               <td style={{color:"red"}} class="CellWithComment">520<span class="CellComment">754-234</span></td>
               <td style={{backgroundColor:"yellow",color:"red"}} class="CellWithComment">0<span class="CellComment">234-234</span></td>
               <td style={{color:"red"}} class="CellWithComment">342<span class="CellComment">576-234</span></td>
               <td class="CellWithComment">711<span class="CellComment">945-255</span></td>
             </tr>
             <tr>
               <th scope="row" >Row4</th>
               <td style={{color:"red"}} class="CellWithComment">0</td>
               <td style={{backgroundColor:"yellow",color:"red"}} class="CellWithComment">0</td>
               <td style={{color:"red"}} class="CellWithComment">0</td>
               <td class="CellWithComment">0</td>
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
            
        <div  className="table1">
        <h2>STEP-4:</h2>
        
        <table class="table table-bordered table-dark" style={{ width: 500 ,fontSize:30}}>
            
            <thead>
              <tr>
                <th>ROW/COL</th>
                <th scope="col" style={{color:"red"}}>Column1</th>
                <th scope="col">Column2</th>
                <th scope="col" style={{color:"red"}}>Column3</th>
                <th scope="col" style={{color:"red"}}>Column4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Row1</th>
                <td class="CellWithComment" style={{color:"red"}}>108</td>
                <td class="CellWithComment">0</td>
                <td style={{backgroundColor:"yellow",color:"red"}} class="CellWithComment">231<span class="CellComment">532-301</span></td>
                <td class="CellWithComment">9<span class="CellComment">310-301</span></td>
              </tr>
              <tr>
                <th scope="row">Row2</th>
                <td style={{backgroundColor:"yellow",color:"red"}}class="CellWithComment">0</td>
                <td class="CellWithComment">520</td>
                <td style={{color:"red"}} class="CellWithComment">0<span class="CellComment">301-301</span></td>
                <td class="CellWithComment">434<span class="CellComment">735-301</span></td>
              </tr>
              <tr>
                <th scope="row">Row3</th>
                <td style={{color:"red"}} class="CellWithComment">520</td>
                <td  class="CellWithComment">0</td>
                <td style={{color:"red"}} class="CellWithComment">41<span class="CellComment">342-301</span></td>
                <td class="CellWithComment">410<span class="CellComment">711-301</span></td>
              </tr>
              <tr>
                <th scope="row">Row4</th>
                <td style={{color:"red"}} class="CellWithComment">301<span class="CellComment">301+0</span></td>
                <td  class="CellWithComment">301<span class="CellComment">301+0</span></td>
                <td style={{color:"red"}} class="CellWithComment">0</td>
                <td class="CellWithComment">0</td>
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
        <h2>STEP-5:</h2>
        <table class="table table-bordered table-dark" style={{ width: 500,fontSize:30}}>
            
            <thead>
              <tr>
                <th>ROW/COL</th>
                <th scope="col" style={{color:"white"}}>Column1</th>
                <th scope="col" style={{color:"white"}}>Column2</th>
                <th scope="col" style={{color:"white"}}>Column3</th>
                <th scope="col" style={{color:"white"}}>Column4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"  >Row1</th>
                <td style={{color:"white"}} class="CellWithComment">99<span class="CellComment">108-9</span></td>
                <td style={{color:"white"}} class="CellWithComment">0</td>
                <td style={{backgroundColor:"yellow",color:"red"}}>222<span class="CellComment">231-9</span></td>
                <td class="CellWithComment">0</td>
              </tr>
              <tr >
                <th scope="row">Row2</th>
                <td style={{backgroundColor:"yellow",color:"red"}}>0</td>
                <td style={{color:"white"}} class="CellWithComment">529<span class="CellComment">520+9</span></td>
                <td style={{color:"white"}} class="CellWithComment">0</td>
                <td class="CellWithComment">425</td>
              </tr>
              <tr>
                <th scope="row" >Row3</th>
                <td style={{color:"white"}} class="CellWithComment">511<span class="CellComment">520-9</span></td>
                <td style={{backgroundColor:"yellow",color:"red"}} >0</td>
                <td style={{color:"white"}} class="CellWithComment">32<span class="CellComment">41-9</span></td>
                <td class="CellWithComment">401<span class="CellComment">410-9</span></td>
              </tr>
              <tr>
                <th scope="row" >Row4</th>
                <td style={{color:"white"}} class="CellWithComment">301</td>
                <td style={{backgroundColor:"yellow",color:"red"}} >310<span class="CellComment">301+9</span></td>
                <td style={{color:"white"}} class="CellWithComment">0</td>
                <td class="CellWithComment">0</td>
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
        <h2>STEP-6:</h2>
        <table class="table table-bordered table-dark" style={{ width: 500,fontSize:30}}>
            
            <thead>
              <tr>
                <th>ROW/COL</th>
                <th scope="col" style={{color:"white"}}>Column1</th>
                <th scope="col" style={{color:"white"}}>Column2</th>
                <th scope="col" style={{color:"white"}}>Column3</th>
                <th scope="col" style={{color:"white"}}>Column4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"  >Row1</th>
                <td class="CellWithComment">0<span class="CellComment">455</span></td>
                <td class="CellWithComment">0<span class="CellComment">347</span></td>
                <td class="CellWithComment">0<span class="CellComment">879</span></td>
                <td style={{backgroundColor:"yellow",color:"red"}} class="CellWithComment">657</td>
              </tr>
              <tr >
                <th scope="row">Row2</th>
                <td style={{backgroundColor:"yellow",color:"red"}}>155</td>
                <td  class="CellWithComment">0<span class="CellComment">675</span></td>
                <td  class="CellWithComment">0<span class="CellComment">456</span></td>
                <td class="CellWithComment">0<span class="CellComment">890</span></td>
              </tr>
              <tr>
                <th scope="row" >Row3</th>
                <td style={{color:"white"}} class="CellWithComment">0<span class="CellComment">754</span></td>
                <td style={{backgroundColor:"yellow",color:"red"}} >234</td>
                <td style={{color:"white"}} class="CellWithComment">0<span class="CellComment">576</span></td>
                <td class="CellWithComment">0<span class="CellComment">945</span></td>
              </tr>
              <tr>
                <th scope="row" >Row4</th>
                <td class="CellWithComment">0</td>
                <td class="CellWithComment">0</td>
                <td style={{backgroundColor:"yellow",color:"red"}} class="CellWithComment">0</td>
                <td class="CellWithComment">0</td>
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
export default Hungarianrc