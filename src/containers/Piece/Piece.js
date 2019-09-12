import "./Piece.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FaHeart, FaRegHeart, FaQuestion } from "react-icons/fa";

export const Piece = ({ isFav, url, width, key, alt, id, handleFavorite }) => {

  return (
    <div className="Piece">
      <div className="frame">
        <section className="inlay">
          <img
            className={isFav ? "favorite" : "notFavorite"}
            src={url}
            width={width}
            key={key}
            alt={alt}
            isFav={isFav}
            onClick={() => handleFavorite(id)}
          />
          <div className="bottom-icons">
            <p>{isFav ? <FaHeart /> : <FaRegHeart />}</p>
            <p><FaQuestion /></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Piece;
