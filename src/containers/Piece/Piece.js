import "./Piece.css";
import React from "react";
import PropTypes from 'prop-types'

const Piece = (props) => {
    return (
      <div className="Piece">
          <img src={props.url} alt='' height='200px' width='200px'/>
      </div>
    );
  };

  export default Piece;