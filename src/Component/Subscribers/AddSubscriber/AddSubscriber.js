import React from "react";
import { useNavigate } from "react-router-dom";

const PostAdd = (props) => {
  const navigate = useNavigate();
  const [formData, updateFormData] = React.useState({
    username: "",
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const username = formData.username;
    console.log("IN FORM " + username);
    props.onSubscriberAdd(username);
    navigate("/subscribers");
  };

  return (
    <div className="container">
      <div>
        <div className="row mt-5 ml-1" style={{ marginLeft: "30px" }}>
          <div className="col-md-5">
            <form onSubmit={onFormSubmit}>
              <div className="form-group">
                <label htmlFor="username">
                  {" "}
                  <b style={{ color: "white" }} className="h4">
                    {" "}
                    Subscriber username{" "}
                  </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  required
                  placeholder="Enter your username"
                  onChange={handleChange}
                />
              </div>
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
