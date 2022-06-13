import React from "react";
import PostTerm from "../PostTerm/postTerm";
import Carousel from "../Carousel/Carousel";
import JumpToElement from "../JumpToElementView/JumpToElement";
import { Col, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      size: 5,
    };
  }

  render() {
    const offset = this.state.size * this.state.page;
    const nextPageOffset = offset + this.state.size;
    const pageCount = Math.ceil(this.props.posts.length / this.state.size);
    const posts = this.getPostsPage(offset, nextPageOffset);

    return (
      <div>
        <Carousel />
        <div className="mt-5">
          <div className="container mt-5">
            <div style={{ marginTop: "80px" }}>
              <Row className="mt-5">
                <Col xl={8} className="ml-4 mt-3">
                  <div id="postTitle" className="text-center mb-3">
                    DAILY EARNINGS
                  </div>
                  <div className="row d-flex justify-content-center">
                    {posts}
                  </div>
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    containerClassName={
                      "pagination flex justify-content-center"
                    }
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"page-item active"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={1}
                    onPageChange={this.handlePageClick}
                  />
                </Col>
                <Col className="ml-5 mt-4" xl={3}>
                  <JumpToElement />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    this.setState({
      page: selected,
    });
    window.scrollTo(0, 0);
  };

  getPostsPage = (offset, nextPageOffset) => {
    return this.props.posts
      .map((term, key) => {
        return (
          <PostTerm
            key={key}
            term={term}
            onDelete={this.props.onDelete}
            getPost={this.props.getPost}
          />
        );
      })
      .filter((post, index) => {
        return index >= offset && index < nextPageOffset;
      });
  };
}

export default Posts;
