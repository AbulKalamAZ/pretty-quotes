import React from "react";
import moment from "moment";

export default function Quote(props) {
  return (
    <div className="card z-depth-0" style={{ cursor: "pointer" }}>
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{props.title}</span>
        <p>Posted by {props.author}</p>
        <p className="grey-text">{moment(props.time.toDate()).calendar()}</p>
      </div>
    </div>
  );
}
