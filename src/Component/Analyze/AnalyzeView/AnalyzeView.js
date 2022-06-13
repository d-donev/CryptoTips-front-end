import React from "react";

const AnalyzeView = (props) => {
  return (
    <div className="container">
      <div className="row"></div>
      <div className="row mt-5">
        <div className="col-12 text-white text-center h1 mt-5">
          {props.term.title}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-6">
          <img style={{ width: "100%" }} src={props.term.part1} alt="" />
        </div>
        <div className="offset-1 col-5">
          <p className="text-white text-justify">{props.term.part3}</p>
        </div>
      </div>
      <div className="row mt-5 mb-3">
        <div className="col text-white text-justify">{props.term.part4}</div>
      </div>
    </div>
  );
};

export default AnalyzeView;
