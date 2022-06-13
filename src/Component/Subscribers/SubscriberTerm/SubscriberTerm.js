import React from "react";
import { Link } from "react-router-dom";
import TimeFormatter from "../../Posts/TimeFormatter/TimeFormatter";

const SubscriberTerm = (props) => {
  return (
    <tr>
      <td style={{ color: "#d24dff" }}>
        <b>{props.term.username}</b>
      </td>
      <td className="text-white">
        <b>
          <TimeFormatter term={props.term.validFrom} />
        </b>
      </td>
      <td className="text-white">
        <Link
          className="btn btn-danger"
          onClick={() => props.onDelete(props.term.id)}
          to={"/subscribers"}
        >
          Delete
        </Link>
      </td>
    </tr>
  );
};

export default SubscriberTerm;
