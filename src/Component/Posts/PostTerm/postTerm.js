import React from "react";
import { Accordion } from "react-bootstrap";
import TimeFormatter from "../TimeFormatter/TimeFormatter";

const postTerm = (props) => {
  return (
    <div id="completePost">
      <div className="mb-5">
        <div className="pb-5">
          <div
            className="card mt-2 responsive outline-info"
            id="myCard"
            style={{ borderRadius: "15px" }}
          >
            <h2
              className="card-title mt-3"
              style={{
                marginLeft: "20px",
                marginTop: "10px",
                color: "#CC46F9",
                fontFamily: "Times New Roman",
              }}
            >
              {props.term.title}
            </h2>

            <div className="responsive align-self-center card-body">
              <img
                className="responsive card-img-top"
                id="myImage"
                src={props.term.image}
                alt=""
              />

              <div className="responsive mt-1 mr-5 float-right">
                <b>
                  <i>
                    {" "}
                    <TimeFormatter term={props.term.dateAdded} />{" "}
                  </i>
                </b>
              </div>
              {/* <MyCollapse term={props.term.description} /> */}
              <Accordion
                defaultActiveKey="1"
                flush
                className="e-accordion responsive"
                style={{ marginBottom: "-10px" }}
              >
                <Accordion.Item className="e-accordion" eventKey="0">
                  <Accordion.Header className="mt-4 e-accordion">
                    <b
                      style={{
                        color: "#d24dff",
                        fontFamily: "Verdana",
                      }}
                    >
                      Read more
                    </b>
                  </Accordion.Header>
                  <Accordion.Body
                    className="e-accordion"
                    style={{ color: "white" }}
                  >
                    <p
                      className="e-accordion"
                      style={{
                        textAlign: "justify",
                        color: "white",
                        fontFamily: "Arial",
                        maxWidth: "620px",
                      }}
                    >
                      {props.term.description}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default postTerm;
