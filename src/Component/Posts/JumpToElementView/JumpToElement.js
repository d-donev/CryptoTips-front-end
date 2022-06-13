import React from "react";
import win1 from "../../../Images/win1.png";

const List = () => (
  <div className="responsive coll align-self-end">
    <ul className="responsive" style={{ listStyle: "none" }}>
      <li>
        <h3
          id="neon"
          className="responsive"
          style={{
            fontFamily: "arial",
          }}
        >
          BIGGEST WINS
        </h3>
      </li>
      <br></br>
      <li>
        <img
          style={{
            height: "80%",
            width: "80%",
            marginTop: "15px",
            borderRadius: "20px",
            boxShadow: "0px 0px 5px 1px rgb(195, 131, 249 )",
          }}
          className="responsive"
          src={win1}
          alt=""
        />
      </li>
      <li>
        <img
          className="responsive"
          style={{
            height: "80%",
            width: "80%",
            marginTop: "50px",
            borderRadius: "20px",
            boxShadow: "0px 0px 5px 1px rgb(195, 131, 249 )",
          }}
          src={win1}
          alt=""
        />
      </li>
      <li>
        <img
          className="responsive"
          style={{
            height: "80%",
            width: "80%",
            marginTop: "50px",
            borderRadius: "20px",
            boxShadow: "0px 0px 5px 1px rgb(195, 131, 249 )",
          }}
          src={win1}
          alt=""
        />
      </li>
      <li>
        <img
          className="responsive"
          style={{
            height: "80%",
            width: "80%",
            marginTop: "50px",
            borderRadius: "20px",
            boxShadow: "0px 0px 5px 1px rgb(195, 131, 249 )",
          }}
          src={win1}
          alt=""
        />
      </li>
    </ul>
  </div>
);

export default List;
