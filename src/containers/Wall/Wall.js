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
        width="500"
        alt={painting.title}
        isFav={painting.isFav}
        handleFavorite={handleFavorite}
      />
    );
  });
  return <section className="Wall">{pieces}</section>;
};

export default Wall;

// hasImage: true
// headerImage: {guid: "000fd881-7317-426f-9604-3ff9cd008129", offsetPercentageX: 0, offsetPercentageY: 0, width: 1920, height: 460, …}
// id: "en-NG-KOG-1208"
// links: {self: "http://www.rijksmuseum.nl/api/en/collection/NG-KOG-1208", web: "http://www.rijksmuseum.nl/en/collection/NG-KOG-1208"}
// longTitle: "Book chest of Hugo de Groot, anonymous, c. 1600 - c. 1615"
// objectNumber: "NG-KOG-1208"
// permitDownload: true
// principalOrFirstMaker: "anonymous"
// productionPlaces: ["Northern Netherlands"]
// showImage: true
// title: "Book chest of Hugo de Groot"
// webImage:
// guid: "ca37e593-a8d7-4ddd-8d69-1360a343e8fb"
// height: 1875
// offsetPercentageX: 0
// offsetPercentageY: 1
// url: "https://lh6.ggpht.com/2EO0M6YvvVy1QQ3VVHsWXuTWOomEJwp26G9bxRa3uE-lp66MNlhU-Bbi9mEcDDPuCMFXH3ZGaaTTHwpcORo6qO1EwrAX=s0"
// width: 2500
