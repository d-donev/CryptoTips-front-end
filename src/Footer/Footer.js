import React from "react";
const footer = (props) => {
  return (
    <div className="container-fluid my-5">
      <footer
        id="footer"
        className="text-center bg-dark text-lg-start text-white"
        style={{ paddingBottom: "-90px" }}
      >
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold">
                  Crypto Analysis
                </h5>
                <p>
                  We want to help people by sharing our own researches, analysis
                  and crypto predictions. We are not a crypto advisors or
                  financial advisors. You have to do your own research.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Products
                </h6>
                <b>
                  <p>Daily analitics</p>
                  <p>Predictions</p>
                  <p>New coins</p>
                </b>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <i>
                  <p>
                    <a href="https://google.com" className="text-white">
                      Terms and conditions
                    </a>
                  </p>
                  <p>
                    <a href="https://google.com" className="text-white">
                      Help
                    </a>
                  </p>
                </i>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 ml-3 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </section>

          <hr className="my-3"></hr>

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2022 Copyright: <b>Crypto Analysis</b>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end"></div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default footer;
