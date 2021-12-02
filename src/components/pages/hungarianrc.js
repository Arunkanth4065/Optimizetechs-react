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
                             in 1st-row 347,
                             in 2nd-row 155,
                             in 3rd-row 234,
                          
                              "/>
        </div>
        <div>
          <Process name= " Consider the given matrix. In a given problem,the number of rows is not equal to the number of columns , So add a dummy row or a dummy column which balances rows*columns as n*n. The assignment costs for dummy cells are always assigned as zero." />
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
                           in 1st-row 347,
                           in 2nd-row 155,
                           in 3rd-row 234,
                           in 4th-row 0
                            "/>
      </div>
      <div >
        <Process name= "Reduce the matrix by selecting the smallest element in each row and subtract with other elements in that row.Draw minimum number of (here we marked the columns and rows with different colours selected element background color will change)lines to cover all zeros " />
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
               <th scope="col" >Column3</th>
               <th scope="col" >Column4</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <th scope="row"  >Row1</th>
               <td style={{color:"#FF3300"}} class="CellWithComment">108<span class="CellComment">455-347</span></td>
               <td style={{backgroundColor:"#F2AA4CFF",color:"#FF3300"}} class="CellWithComment">0<span class="CellComment">347-347</span></td>
               <td class="CellWithComment">532<span class="CellComment">879-347</span></td>
               <td class="CellWithComment">310<span class="CellComment">657-347</span></td>
             </tr>
             <tr >
               <th scope="row">Row2</th>
               <td style={{backgroundColor:"#F2AA4CFF",color:"#FF3300"}} class="CellWithComment">0<span class="CellComment">155-155</span></td>
               <td style={{color:"#FF3300"}} class="CellWithComment">520<span class="CellComment">675-155</span></td>
               <td class="CellWithComment">301<span class="CellComment">456-155</span></td>
               <td class="CellWithComment">735<span class="CellComment">890-155</span></td>
             </tr>
             <tr>
               <th scope="row" >Row3</th>
               <td style={{color:"#FF3300"}} class="CellWithComment">520<span class="CellComment">754-234</span></td>
               <td style={{color:"#FF3300"}} class="CellWithComment">0<span class="CellComment">234-234</span></td>
               <td class="CellWithComment">342<span class="CellComment">576-234</span></td>
               <td class="CellWithComment">711<span class="CellComment">945-255</span></td>
             </tr>
             <tr>
               <th scope="row" style={{color:"#0000FF"}}>Row4</th>
               <td style={{color:"#991f66"}} class="CellWithComment">0</td>
               <td style={{color:"#991f66"}} class="CellWithComment">0</td>
               <td style={{backgroundColor:"#F2AA4CFF",color:"#0000FF"}} class="CellWithComment">0</td>
               <td class="CellWithComment" style={{color:"#0000FF"}}>0</td>
             </tr>
           </tbody>
         </table>
         </div>
         <div>
         <Calculation name="Minimum Values
                            after marking the rows and columns is 301
                             "/>
       </div>
         <div>
         <Process  name= "Here total marked columns or rows not equal to the total number of rows or columns Select the smallest element of the whole matrix, which is NOT COVERED by lines. Subtract this smallest element with all other remaining elements that are NOT COVERED by lines and add the element at the intersection of lines. Leave the elements covered by single line as it is." />
         </div>
       </div>,
          <div class="grid-container">
            
        <div  className="table1">
        <h2>STEP-4:</h2>
        
        <table class="table table-bordered table-dark" style={{ width: 500 ,fontSize:30}}>
            
            <thead>
              <tr>
                <th>ROW/COL</th>
                <th scope="col" >Column1</th>
                <th scope="col" style={{color:"#FF3300"}}>Column2</th>
                <th scope="col" >Column3</th>
                <th scope="col" >Column4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Row1</th>
                <td class="CellWithComment" >108</td>
                <td class="CellWithComment" style={{backgroundColor:"#F2AA4CFF",color:"#FF3300"}}>0</td>
                <td class="CellWithComment">231<span class="CellComment">532-301</span></td>
                <td class="CellWithComment">9<span class="CellComment">310-301</span></td>
              </tr>
              <tr>
                <th scope="row" style={{color:"#0000FF"}}>Row2</th>
                <td style={{backgroundColor:"#F2AA4CFF",color:"#0000FF"}}class="CellWithComment">0</td>
                <td class="CellWithComment" style={{color:"#991f66"}}>520</td>
                <td style={{color:"#0000FF"}} class="CellWithComment">0<span class="CellComment">301-301</span></td>
                <td class="CellWithComment" style={{color:"#0000FF"}}>434<span class="CellComment">735-301</span></td>
              </tr>
              <tr>
                <th scope="row">Row3</th>
                <td  class="CellWithComment">520</td>
                <td style={{color:"#FF3300"}} class="CellWithComment">0</td>
                <td class="CellWithComment">41<span class="CellComment">342-301</span></td>
                <td class="CellWithComment">410<span class="CellComment">711-301</span></td>
              </tr>
              <tr>
                <th scope="row" style={{color:"#0000FF"}}>Row4</th>
                <td style={{color:"#0000FF"}} class="CellWithComment">301<span class="CellComment">301+0</span></td>
                <td style={{color:"#991f66"}} class="CellWithComment">301<span class="CellComment" >301+0</span></td>
                <td style={{backgroundColor:"#F2AA4CFF", color:"#0000FF"}} class="CellWithComment">0</td>
                <td style={{color:"#0000FF"}} class="CellWithComment">0</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div>
          <Calculation name="Minimum Values
                            after marking the rows and columns is 9
                              "/>
        </div>
          <div>
          <Process name= "Here total marked columns or rows not equal to the total number of rows or columns Select the smallest element of the whole matrix, which is NOT COVERED by lines. Subtract this smallest element with all other remaining elements that are NOT COVERED by lines and add the element at the intersection of lines. Leave the elements covered by single line as it is" />
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
                <th scope="col" style={{color:"#FF3300"}}>Column2</th>
                <th scope="col" style={{color:"white"}}>Column3</th>
                <th scope="col" style={{color:"white"}}>Column4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"  style={{color:"#0000FF"}} >Row1</th>
                <td style={{color:"#0000FF"}} class="CellWithComment">99<span class="CellComment">108-9</span></td>
                <td style={{color:"#991f66"}} class="CellWithComment">0</td>
                <td style={{color:"#0000FF"}}>222<span class="CellComment">231-9</span></td>
                <td style={{backgroundColor:"#F2AA4CFF",color:"#0000FF"}} class="CellWithComment">0</td>
              </tr>
              <tr >
                <th scope="row" style={{color:"#0000FF"}} >Row2</th>
                <td style={{backgroundColor:"#F2AA4CFF",color:"#0000FF"}}>0</td>
                <td style={{color:"#991f66"}} class="CellWithComment">529<span class="CellComment">520+9</span></td>
                <td style={{color:"#0000FF"}} class="CellWithComment">0</td>
                <td class="CellWithComment" style={{color:"#0000FF"}}>425</td>
              </tr>
              <tr>
                <th scope="row" >Row3</th>
                <td style={{color:"white"}} class="CellWithComment">511<span class="CellComment">520-9</span></td>
                <td style={{backgroundColor:"#F2AA4CFF",color:"#FF3300"}} >0</td>
                <td style={{color:"white"}} class="CellWithComment">32<span class="CellComment">41-9</span></td>
                <td class="CellWithComment">401<span class="CellComment">410-9</span></td>
              </tr>
              <tr>
                <th scope="row" style={{color:"#0000FF"}} >Row4</th>
                <td style={{color:"#0000FF"}} class="CellWithComment">301</td>
                <td style={{color:"#991f66"}} >310<span class="CellComment">301+9</span></td>
                <td style={{backgroundColor:"#F2AA4CFF",color:"#0000FF"}} class="CellWithComment">0</td>
                <td class="CellWithComment" style={{color:"#0000FF"}}>0</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div>
          <Calculation name="Assigned elements background color will change.
                              "/>
        </div>
          <div>
          <Process  name= " If Number of lines drawn = order of matrix, then optimally is reached,Take any row or column which has a single zero and assign by squaring it. Strike off the remaining zeros, if any, in that row and column (X). Repeat the process until all the assignments have been made" />
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
                <td style={{backgroundColor:"#F2AA4CFF",color:"#FF3300"}} class="CellWithComment">657</td>
              </tr>
              <tr >
                <th scope="row">Row2</th>
                <td style={{backgroundColor:"#F2AA4CFF",color:"#FF3300"}}>155</td>
                <td  class="CellWithComment">0<span class="CellComment">675</span></td>
                <td  class="CellWithComment">0<span class="CellComment">456</span></td>
                <td class="CellWithComment">0<span class="CellComment">890</span></td>
              </tr>
              <tr>
                <th scope="row" >Row3</th>
                <td style={{color:"white"}} class="CellWithComment">0<span class="CellComment">754</span></td>
                <td style={{backgroundColor:"#F2AA4CFF",color:"#FF3300"}} >234</td>
                <td style={{color:"white"}} class="CellWithComment">0<span class="CellComment">576</span></td>
                <td class="CellWithComment">0<span class="CellComment">945</span></td>
              </tr>
              <tr>
                <th scope="row" >Row4</th>
                <td class="CellWithComment">0</td>
                <td class="CellWithComment">0</td>
                <td style={{backgroundColor:"#F2AA4CFF",color:"#FF3300"}} class="CellWithComment">0</td>
                <td class="CellWithComment">0</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div>
          <Calculation name=" So the minimized cost is 155+234+0+657=1046
                              "/>
        </div>
          <div>
          <Process  name= "Finlly the given matrix is optimized by using hungarian method." />
          </div>
        </div>
    ]

    return <div>
      <h3>Columns not equal-to rows</h3>
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