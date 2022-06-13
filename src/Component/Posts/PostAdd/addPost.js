import React from "react";
import { useNavigate } from "react-router-dom";

const PostAdd = (props) => {
  const navigate = useNavigate();
  const [formData, updateFormData] = React.useState({
    title: "",
    description: "",
    image: "",
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
    const description = formData.description;
    const image = formData.image;

    props.onPostAdd(title, description, image);
    navigate("/post");
  };

  return (
    <div className="container">
      <div>
        <h2 style={{ marginTop: "99px", color: "white" }}>Add new post</h2>
        <div className="row mt-5 ml-1" style={{ marginLeft: "30px" }}>
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
              <br />
              <div className="form-group">
                <label htmlFor="description">
                  <b style={{ color: "white" }}> Post description </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  required
                  placeholder="Enter post description"
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="image">
                  <b style={{ color: "white" }}> Post image url </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  name="image"
                  required
                  placeholder="Enter post image url"
                  onChange={handleChange}
                />
              </div>
              <br />
              <button id="submit" type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default PostAdd;
