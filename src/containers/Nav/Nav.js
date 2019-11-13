import "./Nav.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import PropTypes from "prop-types";

export const Nav = () => {
  return (
    <section className="Nav">
      <h1 className="logo">
        he<span className="nav--art">Art</span>
      </h1>
      <div className="top-section">
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <FaHeart />
        <NavLink className="link" to="/favorites">
          heArts
        </NavLink>
      </div>
      <p className="please-text">please search by...</p>
      <div className="search-links">
        <NavLink className="link" to="/artist">
          Artist
        </NavLink>
        <FaHeart className="heart-icon"/>

        <NavLink className="link" to="/color">
          Color
        </NavLink>
        <FaHeart className="heart-icon"/>

        <NavLink className="link" to="/medium">
          Medium
        </NavLink>
        <FaHeart className="heart-icon"/>

        <NavLink className="link" to="/century">
          Century
        </NavLink>
        <FaHeart className="heart-icon"/>

        <NavLink className="link" to="/type">
          Type
        </NavLink>
        <FaHeart className="heart-icon"/>

        <NavLink className="link" to="/place">
          Place
        </NavLink>
        <FaHeart className="heart-icon"/>

        <NavLink className="link" to="/technique">
          Technique
        </NavLink>
      </div>
    </section>
  );
};

export default Nav;

Nav.propTypes = {
  addFavoriteInRedux: PropTypes.func,
  deleteFavoriteInRedux: PropTypes.func,
  establishFacetsInRedux: PropTypes.func,
  establishPaintingsInRedux: PropTypes.func,
  facets: PropTypes.array,
  favorites: PropTypes.array,
  paintings: PropTypes.array
};
