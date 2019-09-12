import "./Nav.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SearchForm from "../SearchForm/SearchForm";

const Nav = () => {
  return (
    <section className="Nav">
      <div className="nav--links">
        <NavLink>Home</NavLink>
        <NavLink>Favorites</NavLink>
      </div>
      <h1>he<span className="nav--art">Art</span></h1>
      <SearchForm />
    </section>
  );
};

export default Nav;
