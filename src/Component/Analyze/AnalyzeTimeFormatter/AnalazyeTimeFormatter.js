import React from "react";

const Date = (props) => {
  const date = props.term;
  const date1 = date.toString();
  const date2 = date1.slice(0, 16);
  const year = date2.substr(0, 4);
  const month = date2.substr(5, 2);
  const day = date2.substr(8, 2);
  const time = date2.substr(11, 5);
  return <p>{day + "/" + month + "/" + year + " - " + time}</p>;
};

export default Date;
