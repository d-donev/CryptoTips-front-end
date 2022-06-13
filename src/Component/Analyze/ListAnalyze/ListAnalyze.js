import React from "react";
import AnalyzeTerm from "../AnalyzeTerm/AnalyzeTerm";

class Analysis extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfitemsShown: 3,
    };
  }

  showMore = () => {
    if (this.state.numberOfitemsShown + 3 <= this.props.analysis.length) {
      this.setState((state) => ({
        numberOfitemsShown: state.numberOfitemsShown + 3,
      }));
    } else {
      this.setState({ numberOfitemsShown: this.props.analysis.length });
    }
  };

  render() {
    const itemsToShow = this.props.analysis
      .slice(0, this.state.numberOfitemsShown)
      .map((term, key) => {
        return (
          <div key={key} className="col-sm-12 col-md-6 col-lg-4 my-3">
            <AnalyzeTerm
              term={term}
              onDelete={this.props.onDelete}
              getAnalyze={this.props.getAnalyze}
            />
          </div>
        );
      });

    return (
      <div className={"container mm-4 mt-5"}>
        <div className="row"></div>
        <div className="row mt-5 mb-3">
          <div className="coll text-center">
            <h1
              style={{ color: "white", fontFamily: "Times New Roman" }}
              className="display-4"
            >
              Analysis, signals & alerts
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <hr style={{ color: "white" }} />
          </div>
        </div>

        <div className="row d-flex justify-content-center ml-5">
          {itemsToShow.length ? itemsToShow : "Loading..."}
          <button
            className="col col-lg-6 btn btn-light mt-5 mr-5"
            onClick={this.showMore}
          >
            <b>Show more</b>
          </button>
        </div>
        <div className="row mb-5"></div>
        <div className="row mb-5"></div>
      </div>
    );
  }
}

export default Analysis;
