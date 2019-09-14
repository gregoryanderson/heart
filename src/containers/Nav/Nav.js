import "./Nav.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SearchForm from "../SearchForm/SearchForm";
import { FaHeart, FaRegHeart, FaQuestion } from "react-icons/fa";


export const Nav = (props) => {
  return (
    <section className="Nav">
      <div className="nav--links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorites">Art that you heArt</NavLink>
        <p>or search by...</p>
        <NavLink to="/artist">Artist</NavLink>
        <NavLink to="/color">Color</NavLink>
        <NavLink to="/medium">Medium</NavLink>
        <NavLink to="/century">Century</NavLink>
        <NavLink to="/type">Type</NavLink>
        <NavLink to="/place">Place</NavLink>
        <NavLink to="/technique">Technique</NavLink>
      </div>
      <h1 className="logo">sh<span className="nav--art">Art</span></h1>
    </section>
  );
};

export default Nav;
