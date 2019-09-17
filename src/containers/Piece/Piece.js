import "./Piece.css";
import React from "react";
import PropTypes from "prop-types";
import { FaHeart, FaRegHeart, FaQuestion, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

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
              <h4>
                <FaQuestion />
              </h4>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Piece;

Piece.propTypes = {
  isFav: PropTypes.bool,
  url: PropTypes.string,
  width: PropTypes.string,
  key: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string,
  handleFavorite: PropTypes.func,
  title: PropTypes.string,
  artist: PropTypes.string
}