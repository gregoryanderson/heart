import React from "react";
import "./Wall.css";
import PropTypes from "prop-types";
import Piece from "../Piece/Piece";

export const Wall = ({ handleFavorite, paintings, route }) => {
  const pieces = paintings.map(painting => {
    return (
      <Piece
        url={painting.url}
        key={painting.id}
        id={painting.id}
        width="700"
        alt="Dutch Painting"
        isFav={painting.isFav}
        handleFavorite={handleFavorite}
        route={route}
      />
    );
  });
  return <section className="Wall">{pieces}</section>;
};

export default Wall;

Wall.propTypes = {
  route: PropTypes.string,
  paintings: PropTypes.array,
  handleFavorite: PropTypes.func
};
