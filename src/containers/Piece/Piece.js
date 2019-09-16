import "./Piece.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FaHeart, FaRegHeart, FaQuestion, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";

export const Piece = ({
  isFav,
  url,
  width,
  key,
  alt,
  id,
  handleFavorite,
  title,
  artist,
  route
}) => {
  return (
    <div className="Piece">
      <div className="frame">
        <section className="inlay">
          <section className="selected">
            {title && (
              <Link
                style={{ textDecoration: "none" }}
                to={"/"}
                className="back-btn"
              >
                <FaChevronLeft />
              </Link>
            )}
            <section className="selected-title">
              {title && <h2>{title}</h2>}
              {artist && <h3>{artist}</h3>}
            </section>
          </section>
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
            <p onClick={() => handleFavorite(id)}>{isFav ? <FaHeart /> : <FaRegHeart />}</p>
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
