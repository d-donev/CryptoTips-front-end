import React from "react";
import { Link } from "react-router-dom";
import AnalyzeTimeFormatter from "../AnalyzeTimeFormatter/AnalazyeTimeFormatter";

const AnalyzeTerm = (props) => {
  return (
    <div className="card" style={{ width: "80%" }}>
      <img
        className="card-img-top"
        style={{ width: "100%" }}
        src={props.term.part1}
        alt=""
      />

      <div className="card-body">
        <h5 className="card-title">{props.term.title}</h5>
        <p className="card-text text-dark">{props.term.part2}</p>
        <div className="d-inline pb-2">
          <b>
            <i>
              <AnalyzeTimeFormatter term={props.term.postedOn} />
            </i>
          </b>
        </div>
        <Link
          className="btn btn-success d-inline"
          onClick={() => props.getAnalyze(props.term.id)}
          to={`/view/${props.term.id}`}
        >
          See more
        </Link>
        <Link
          className="btn btn-default self-aling-end "
          onClick={() => props.getAnalyze(props.term.id)}
          to={`/analyze/edit/${props.term.id}`}
        >
          🖊️
        </Link>
        <Link
          className="btn btn-default"
          onClick={() => {
            props.onDelete(props.term.id);
          }}
          to={"/analyze"}
        >
          🗑️
        </Link>
      </div>
    </div>
  );
};

export default AnalyzeTerm;
