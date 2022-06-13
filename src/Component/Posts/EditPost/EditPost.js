import React from "react";
import { useNavigate } from "react-router-dom";

const EditPost = (props) => {
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

    const title = formData.title !== "" ? formData.title : props.post.title;
    const description =
      formData.description !== ""
        ? formData.description
        : props.post.description;
    const image = formData.image !== "" ? formData.image : props.post.image;

    props.onEdit(props.post.id, title, description, image);
    navigate("/post");
  };

  return (
    <div className="container">
      <div>
        <h2 style={{ marginTop: "99px", color: "white" }}>Edit post</h2>
        <div className="row mt-5 ml-1" style={{ marginLeft: "30px" }}></div>
        <div className="">
          <div className="col-md-5">
            <form onSubmit={onFormSubmit}>
              <div className="form-group">
                <label htmlFor="title" style={{ color: "white" }}>
                  {" "}
                  <b>Post title</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder={props.post.title}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="description" style={{ color: "white" }}>
                  <b>Post description</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  placeholder={props.post.description}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="image" style={{ color: "white" }}>
                  <b>Post image</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  name="image"
                  placeholder={props.post.image}
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

export default EditPost;
