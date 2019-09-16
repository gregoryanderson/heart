import React, { Component } from "react";
import "./FacetContainer.css";
import PropTypes from "prop-types";
import FacetBtn from "../FacetBtn/FacetBtn";

const FacetContainer = props => {
  const buttons = props.facets.facets.map(facet => {
    return (
      <FacetBtn
        assignment={facet.key}
        key={facet.value}
        name={props.name}
        handleSearch={props.handleSearch}
      />
    );
  });
  return <section> {buttons} </section>;
};

export default FacetContainer;
