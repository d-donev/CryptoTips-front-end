import React from "react";
import SubscriberTerm from "../SubscriberTerm/SubscriberTerm";

const Subscribers = (props) => {
  return (
    <div className={"container mm-4 mt-5"}>
      <div className="row"></div>
      <div className="row mt-5 mb-3">
        <div className="coll text-center">
          <h1 style={{ color: "#d24dff" }}>SUBSCRIBERS</h1>
        </div>
      </div>
      <div className={"row"}>
        <div className="col"></div>
        <div className="col-9 mt-5">
          <div className={"table-responsive"}>
            <table className={"table table-striped"}>
              <thead>
                <tr>
                  <th scope={"col"} className="text-white">
                    <h5> Username</h5>
                  </th>
                  <th scope={"col"} className="text-white">
                    <h5> Valid from</h5>
                  </th>
                  <th scope={"col"} className="text-white"></th>
                </tr>
              </thead>
              <tbody>
                {props.subscribers.map((term, key) => {
                  return (
                    <SubscriberTerm
                      key={key}
                      term={term}
                      onDelete={props.onDelete}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col mb-5"></div>
      </div>
      <div className="row mb-5"></div>
      <div className="row mb-5"></div>
    </div>
  );
};

export default Subscribers;
