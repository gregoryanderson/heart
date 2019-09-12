import "./Piece.css";
import React from "react";
import PropTypes from "prop-types";

const Piece = props => {
  return (
    <div className="Piece">
      <img src={props.url} width={props.width} key={props.key} alt={props.alt}/>
    </div>
  );
};

export default Piece;
