import "./FacetBtn.css";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FacetBtn = props => {
  console.log("face", props);
  return (
    <Link to={`/${props.name}/${props.assignment}`}>
      <button onClick={() => props.handleSearch(props.name, props.assignment)}>
        {props.assignment}
      </button>
    </Link>
  );
};

export default FacetBtn;
