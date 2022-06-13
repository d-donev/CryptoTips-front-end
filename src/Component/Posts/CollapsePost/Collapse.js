import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";
import { Collapse } from "bootstrap";

function MyCollapse(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="responsive">
        <Button
          className="btn btn-info"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="fadeID"
        >
          Click to see Fade Effect!
        </Button>
        <Fade in={open}>
          <div
            id="fadeID"
            style={{
              width: 780,
              textAlign: "justify",
            }}
          >
            {props.term}
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default MyCollapse;
