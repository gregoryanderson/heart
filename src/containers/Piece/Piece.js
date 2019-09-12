import "./Piece.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const Piece = ({isFav, url, width, key, alt, id, handleFavorite}) => {
  return (
    <div className="Piece">
      <div className="frame">
        <section className="favorite-icon">
          <img
            className={isFav ? "favorite" : "notFavorite"}
            src={url}
            width={width}
            key={key}
            alt={alt}
            isFav={isFav}
            onClick={() => handleFavorite(id)}
          />
        </section>
      </div>
    </div>
  );
};


export default Piece;
