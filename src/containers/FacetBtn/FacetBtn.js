import "./FacetBtn.css";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const FacetBtn = props => {
  const colorStyle = {
    backgroundColor: props.assignment
  };

  return (
    <Link to={`/${props.name}/${props.assignment}`}>
      <button
        style={colorStyle}
        onClick={() => props.handleSearch(props.name, props.assignment)}
      >
        {props.assignment}
      </button>
    </Link>
  );
};

export default FacetBtn;

FacetBtn.propTypes = {
  assignment: PropTypes.string,
  name: PropTypes.string,
  handleSearch: PropTypes.func
};
