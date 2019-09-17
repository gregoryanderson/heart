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
        <p className="link">
          <NavLink style={{ textDecoration: "none" }} to="/">
            Home
          </NavLink>
        </p>
        <FaHeart />
        <p className="link">
          <NavLink style={{ textDecoration: "none" }} to="/favorites">
            heArts
          </NavLink>
        </p>
      </div>
      <p className="please-text">please search by...</p>
      <div className="search-links">
        <p >
          <NavLink style={{ textDecoration: "none" }} to="/artist">
            Artist
          </NavLink>
        </p>
        <FaHeart />
        <p >
          <NavLink style={{ textDecoration: "none" }} to="/color">
            Color
          </NavLink>
        </p>
        <FaHeart />
        <p >
          <NavLink style={{ textDecoration: "none" }} to="/medium">
            Medium
          </NavLink>
        </p>
        <FaHeart />
        <p >
          <NavLink style={{ textDecoration: "none" }} to="/century">
            Century
          </NavLink>
        </p>
        <FaHeart />
        <p >
          <NavLink style={{ textDecoration: "none" }} to="/type">
            Type
          </NavLink>
        </p>
        <FaHeart />
        <p >
          <NavLink style={{ textDecoration: "none" }} to="/place">
            Place
          </NavLink>
        </p>
        <FaHeart />
        <p >
          <NavLink style={{ textDecoration: "none" }} to="/technique">
            Technique
          </NavLink>
        </p>
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