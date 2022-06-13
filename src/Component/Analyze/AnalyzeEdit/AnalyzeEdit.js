import React from "react";
import { useNavigate } from "react-router-dom";

const EditAnalyze = (props) => {
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

    const title = formData.title !== "" ? formData.title : props.analyze.title;
    const part1 = formData.part1 !== "" ? formData.part1 : props.analyze.part1;
    const part2 = formData.part2 !== "" ? formData.part2 : props.analyze.part2;
    const part3 = formData.part3 !== "" ? formData.part3 : props.analyze.part3;
    const part4 = formData.part4 !== "" ? formData.part4 : props.analyze.part4;

    props.onEdit(props.analyze.id, title, part1, part2, part3, part4);
    navigate("/analyze");
  };

  return (
    <div className="container">
      <div>
        <h2 style={{ marginTop: "79px", color: "white" }}>Edit analzye</h2>
        <div className="row mt-3 ml-1" style={{ marginLeft: "30px" }}></div>
        <div className="">
          <div className="col-md-5">
            <form onSubmit={onFormSubmit}>
              <div className="form-group">
                <label htmlFor="title" style={{ color: "white" }}>
                  {" "}
                  <b>Analzye title</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder={props.analyze.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="part1" style={{ color: "white" }}>
                  <b>Image url</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="part1"
                  name="part1"
                  placeholder={props.analyze.part1}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="part2" style={{ color: "white" }}>
                  <b>Short text</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="part2"
                  name="part2"
                  placeholder={props.analyze.part2}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="part3" style={{ color: "white" }}>
                  <b>Paragraph one</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="part3"
                  name="part3"
                  placeholder={props.analyze.part3}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="part4" style={{ color: "white" }}>
                  <b>Paragraph two</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="part4"
                  name="part4"
                  placeholder={props.analyze.part4}
                  onChange={handleChange}
                />
              </div>
              <button
                id="submit"
                type="submit"
                className="btn btn-success mb-5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAnalyze;
