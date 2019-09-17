import React from "react";
import "./FacetContainer.css";
import PropTypes from "prop-types";
import FacetBtn from "../FacetBtn/FacetBtn";

export const FacetContainer = props => {
  const buttons = props.facets.facets.map(facet => {
    return (
      <FacetBtn
        assignment={facet.key}
        key={facet.value + facet.key}
        name={props.name}
        handleSearch={props.handleSearch}
      />
    );
  });
  return <section> {buttons} </section>;
};

export default FacetContainer;

FacetContainer.propTypes = {
  facets: PropTypes.object,
  name: PropTypes.string,
  handleSearch: PropTypes.func
};
