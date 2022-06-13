import React from "react";
import AddSubscriber from "../Subscribers/AddSubscriber/AddSubscriber";
import CopyClipboard from "./CopyToClipboard";

const Membership = (props) => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col"></div>
        <div
          className="hover-zoom col-lg-6 col-sm-12 text-white text-center mt-4"
          style={{ fontSize: "60px", fontFamily: "Times New Roman" }}
        >
          Membership Plans
        </div>
        <div className="col"></div>
      </div>
      <div className="row d-flex">
        <div className="col-lg-4 col-md-6 col-sm-12 justify-content-center mt-4">
          <div className="ml-5 ">
            <a href="#subscribe" style={{ textDecoration: "none" }}>
              <div
                className="card hover-shadow"
                style={{
                  width: "87%",
                  alignContent: "cenater",
                  backgroundColor: "#d9d9d9",
                }}
              >
                <div className="card-body">
                  <div className="card-title">
                    <div
                      className="h2 text-dark text-center mt-4"
                      style={{ fontFamily: "Georgia" }}
                    >
                      <strong>1 Month</strong>
                    </div>
                  </div>
                  <div className="card-title">
                    <div
                      className="h1 text-success text-center mt-4"
                      style={{ fontFamily: "Georgia" }}
                    >
                      $149
                    </div>
                  </div>
                  <div className="card-title h5 text-danger text-center mt-5">
                    One month membership
                  </div>
                  <div className="card-title h5 text-dark text-center mt-4">
                    Access to crypto analisys
                  </div>
                  <div className="card-title h5 text-dark text-center mt-4">
                    Trade signals and alerts
                  </div>
                  <div className="card-title h5 text-dark text-center mt-4">
                    Personal technical support
                  </div>
                  <div className="card-title h5 text-dark text-center mt-4">
                    Contact support 24/7
                  </div>
                  <div
                    className="card-title h5 text-center mt-4"
                    style={{ color: "#ff9900" }}
                  >
                    Cancel anytime
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
          <div className="ml-5">
            <a href="#subscribe" style={{ textDecoration: "none" }}>
              <div
                className="card"
                style={{
                  width: "87%",
                  alignContent: "cenater",
                  backgroundColor: "#ccffcc",
                }}
              >
                <div className="card-body">
                  <div className="card-title">
                    <div
                      className="h2 text-dark text-center mt-4"
                      style={{ fontFamily: "Georgia" }}
                    >
                      <strong>3 Months</strong>
                    </div>
                  </div>
                  <div className="card-title">
                    <div
                      className="h1 text-success text-center mt-4"
                      style={{ fontFamily: "Georgia" }}
                    >
                      $399
                    </div>
                  </div>
                  <div className="card-title h5 text-danger text-center mt-5">
                    Three months membership
                  </div>
                  <div className="card-title h5 text-dark text-center mt-4">
                    Access to crypto analisys
                  </div>
                  <div className="card-title h5 text-dark text-center mt-4">
                    Trade signals and alerts
                  </div>
                  <div className="card-title h5 text-dark text-center mt-4">
                    Personal technical support
                  </div>
                  <div className="card-title h5 text-dark text-center mt-4">
                    Contact support 24/7
                  </div>
                  <div
                    className="card-title h5 text-center mt-4"
                    style={{ color: "#ff9900" }}
                  >
                    Cancel anytime
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
          <div className="ml-5 ">
            <a href="#subscribe" style={{ textDecoration: "none" }}>
              <div
                className="card"
                style={{
                  width: "87%",
                  alignContent: "cenater",
                  backgroundColor: "#d9d9d9",
                }}
              >
                <div className="card-body">
                  <div className="card-title">
                    <div
                      className="h2 text-dark text-center mt-4"
                      style={{ fontFamily: "Georgia" }}
                    >
                      <strong>6 Months</strong>
                    </div>
                  </div>
                  <div className="card-title">
                    <p
                      className="h1 text-success text-center mt-4"
                      style={{ fontFamily: "Georgia" }}
                    >
                      $699
                    </p>
                  </div>
                  <div className="card-title h5 text-danger text-center mt-5">
                    Six months membership
                  </div>
                  <div className="card-title h5 text-dark text-center mt-4">
                    Access to crypto analisys
                  </div>
                  <div className="card-title h5 text-dark text-center mt-4">
                    Trade signals and alerts
                  </div>
                  <div className="card-title h5 text-dark text-center mt-4">
                    Personal technical support
                  </div>
                  <div className="card-title h5 text-dark text-center mt-4">
                    Contact support 24/7
                  </div>
                  <div
                    className="card-title h5 text-center mt-4"
                    style={{ color: "#ff9900" }}
                  >
                    Cancel anytime
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-5"></div>
      <div className="row mt-5"></div>
      <div className="row mt-5" id="subscribe"></div>
      <div className="row mt-5"></div>

      <div className="row mt-5">
        <div className="col display-1 text-white text-center">
          <div className="h1 display-1">
            <b>How to subscrcibe ?</b>
          </div>
        </div>

        <div className="row mt-5"></div>

        <div className="row mt-5">
          <div className="col-12 text-white ml-5">
            <div className="h1">1. Click on Sign UP</div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-white ml-5">
            <div className="h1">2. Create an account</div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-white ml-5">
            <div className="h1">
              3. Send us crypto for the value of the chosen plan
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center mt-1 ml-4">
          <div className="col col-md-2 text-center pt-3 h5 text-white">
            Binance address:
          </div>
          <div className="col col-md-10">
            <CopyClipboard />
          </div>
          <div className="col-12 text-white mt-1"></div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-white ml-5">
            <div className="h1">4. Scroll down</div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-white ml-5">
            <div className="h1">5. Fill the lablel with your username</div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-white ml-5">
            <div className="h1">6. Click submit</div>
          </div>
        </div>

        <div className="row mt-5"></div>
        <div className="row mt-5">
          <div className="coll"></div>
          <div className="col-12">
            <hr className="text-white" style={{ height: "3px" }} />
          </div>
          <div className="coll"></div>
        </div>
        <div className="row">
          <AddSubscriber onSubscriberAdd={props.onSubscriberAdd} />
        </div>
      </div>
    </div>
  );
};

export default Membership;
