import React from "react";
import { useNavigate } from "react-router-dom";

const PostAdd = (props) => {
  const navigate = useNavigate();
  const [formData, updateFormData] = React.useState({
    title: "",
    part1: "",
    part2: "",
    part3: "",
    part4: "",
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const title = formData.title;
    const part1 = formData.part1;
    const part2 = formData.part2;
    const part3 = formData.part3;
    const part4 = formData.part4;

    props.onAnalyzeAdd(title, part1, part2, part3, part4);
    navigate("/analyze");
  };

  return (
    <div className="container">
      <div>
        <h2 style={{ marginTop: "79px", color: "white" }}>Add new analyze</h2>
        <div className="row mt-3 mb-5 ml-1" style={{ marginLeft: "30px" }}>
          <div className="col-md-5">
            <form onSubmit={onFormSubmit}>
              <div className="form-group">
                <label htmlFor="title">
                  {" "}
                  <b style={{ color: "white" }}> Post title </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  required
                  placeholder="Enter post title"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="part1">
                  <b style={{ color: "white" }}> Image url </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="part1"
                  name="part1"
                  required
                  placeholder="Enter image url"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="part2">
                  <b style={{ color: "white" }}> Short text </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="part2"
                  name="part2"
                  required
                  placeholder="Enter short text"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="part3">
                  <b style={{ color: "white" }}> Paragraph one </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="part3"
                  name="part3"
                  required
                  placeholder="Enter the first paragraph"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="part4">
                  <b style={{ color: "white" }}> Paragraph two </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="part4"
                  name="part4"
                  required
                  placeholder="Enter the second paragraph"
                  onChange={handleChange}
                />
              </div>
              <button id="submit" type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAdd;
