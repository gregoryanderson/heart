import React, { Component } from "react";
import "./Wall.css";
import PropTypes from "prop-types";
import Piece from "../Piece/Piece";

export const Wall = ({ handleFavorite, paintings }) => {
  const pieces = paintings.map(painting => {
    return (
      <Piece
        url={painting.url}
        key={painting.id}
        id={painting.id}
        width="700"
        alt={painting.title}
        isFav={painting.isFav}
        handleFavorite={handleFavorite}
      />
    );
  });
  return <section className="Wall">{pieces}</section>;
};

export default Wall;
