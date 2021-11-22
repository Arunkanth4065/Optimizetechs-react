import React, {Component} from 'react';
import './table.css';
class Table extends Component {
  render() {
      var heading = this.props.heading;
      var body = this.props.body;
      return (
        <div className="Table1" class="jumbotron">
          <table class="table table-bordered table-dark" style={{ width: 500 }}>
              <thead>
                  <tr>
                      {heading.map(head => <th>{head}</th>)}
                  </tr>
              </thead>
              <tbody>
                  {body.map(row => <TableRow row={row} />)}
              </tbody>
          </table>
          </div>
      );
  }
}

class TableRow extends Component {
  render() {
      var row = this.props.row;
      
      return (
          <tr>
            
              {row.map(val => <th>{val}</th>)}
          </tr>
      )
  }
}
export default Table;