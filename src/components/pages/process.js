import React, {useState}  from 'react';
import Card from "react-bootstrap/Card";
import { Button,Collapse} from 'react-bootstrap';
function Process(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          {open ? 'Hide Process' : 'Show Process'}
        </Button>
        <br></br>
        <br></br>
        <div style={{minHeight: '250px',display: "flex", justifyContent: "center", alignItems: "center",fontSize:23}}>
          <Collapse in={open} dimension="width">
            <div id="example-collapse-text">
              <Card body style={{width: '850px'}}>
                {props.name}
              </Card>
            </div>
          </Collapse>
        </div>
      </>
    );
  }
export default Process;