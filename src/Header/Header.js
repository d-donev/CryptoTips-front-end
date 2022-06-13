import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

const header = (props) => {
  let authenticate;
  if (localStorage.getItem("JWT")) {
    authenticate = (
      <button
        className="btn btn-outline-info my-2 my-sm-0"
        onClick={() => localStorage.removeItem("JWT")}
      >
        Logout
      </button>
    );
  } else {
    authenticate = (
      <Link className="btn btn-outline-info my-2 my-sm-0" to={"/login"}>
        Login
      </Link>
    );
  }

  return (
    <header id="header" className="fixed-top">
      <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
        <Link to={"/post"} onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} style={{ width: "70%" }} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className=" navbar-nav mr-auto">
            <li className="nav-item active">
              <Link
                className="nav-link"
                to={"/home"}
                onClick={() => window.scrollTo(0, 0)}
              >
                <b style={{ fontSize: "17px", fontFamily: "Times New Roman" }}>
                  HOME
                </b>
              </Link>
            </li>
            <li className=" nav-item active">
              <Link
                className="nav-link"
                to={"/post"}
                onClick={() => window.scrollTo(0, 0)}
              >
                <b style={{ fontSize: "17px", fontFamily: "Times New Roman" }}>
                  EARNINGS
                </b>
              </Link>
            </li>
            <li className=" nav-item active">
              <Link
                className="nav-link"
                to={"/analyze"}
                onClick={() => window.scrollTo(0, 0)}
              >
                <b style={{ fontSize: "17px", fontFamily: "Times New Roman" }}>
                  ANALYSIS
                </b>
              </Link>
            </li>
            <li className=" nav-item active">
              <Link
                className="nav-link"
                to={"/memberships"}
                onClick={() => window.scrollTo(0, 0)}
              >
                <b style={{ fontSize: "17px", fontFamily: "Times New Roman" }}>
                  MEMBERSHIPS
                </b>
              </Link>
            </li>
            <li className=" nav-item active">
              <Link
                className={"nav-link"}
                to={"/subscribers"}
                onClick={() => window.scrollTo(0, 0)}
              >
                <b style={{ fontSize: "17px", fontFamily: "Times New Roman" }}>
                  SUBSCRIBERS
                </b>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className={"nav-link"} to={"/post/add"}>
                <b style={{ fontSize: "17px", fontFamily: "Times New Roman" }}>
                  ADD POST
                </b>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className={"nav-link"} to={"/analyze/add"}>
                <b style={{ fontSize: "17px", fontFamily: "Times New Roman" }}>
                  ADD ANALYZE
                </b>
              </Link>
            </li>
          </ul>
          <form className="form-inline mt-2 mt-md-0 ml-3">{authenticate}</form>
        </div>
      </nav>
    </header>
  );
};

export default header;
