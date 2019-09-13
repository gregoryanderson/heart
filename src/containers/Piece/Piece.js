import "./Piece.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FaHeart, FaRegHeart, FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Piece = ({ isFav, url, width, key, alt, id, handleFavorite, title, artist }) => {
  return (
    <div className="Piece">
      <div className="frame">
        <section className="inlay">
          {title && <h2>{title}</h2>}
          {artist && <h3>{artist}</h3>}
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
            <Link to={`/paintings/${id}`}>
              <p>
                <FaQuestion />
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Piece;
