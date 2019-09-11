import React, { Component } from "react";
import "./Heart.css";
import { getPaintings } from "../../apiCalls/apiCalls.js";
import PropTypes from "prop-types";
import { Route, NavLink } from "react-router-dom";
import Wall from "../Wall/Wall";
import Nav from "../Nav/Nav";

class Heart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paintings: [],
      error: ""
    };
  }

  async componentDidMount() {
    try {
      const pieces = await getPaintings();
      this.setState({ paintings: pieces.artObjects });
    } catch ({ message }) {
      this.setState({ error: message });
    }
  }

  render() {
    return (
      <section>
        <Nav />
        <Wall paintings={this.state.paintings} />
      </section>
    );
  }
}

export default Heart;

Heart.propTypes = {};
