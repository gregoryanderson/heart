import React from "react";
import "./Wall.css";
import PropTypes from "prop-types";
import Piece from "../Piece/Piece";

export const Wall = ({ handleFavorite, paintings, route }) => {
  const determinePaintings = () => {
    if (paintings.length === 0) {
      return <p className="no-paintings">There don't seem to be any paintings here</p>;
    } else {
      return paintings.map(painting => {
        return (
          <Piece
            url={painting.url}
            key={painting.id}
            id={painting.id}
            width="600"
            alt="Dutch Painting"
            isfav={painting.isfav}
            handleFavorite={handleFavorite}
            route={route}
          />
        );
      });
    }
  };
  return <section className="Wall">{determinePaintings()}</section>;
};

export default Wall;

Wall.propTypes = {
  route: PropTypes.string,
  paintings: PropTypes.array,
  handleFavorite: PropTypes.func
};
