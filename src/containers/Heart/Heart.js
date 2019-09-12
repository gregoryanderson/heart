import React, { Component } from "react";
import "./Heart.css";
import { getPaintingsFromApiCalls } from "../../apiCalls/apiCalls.js";
import { establishPaintingsInRedux } from '../../actions'
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
      const pieces = await getPaintingsFromApiCalls();
      this.props.establishPaintingsInRedux(pieces.artObjects)
      // this.setState({ paintings: pieces.artObjects });
    } catch ({ message }) {
      this.setState({ error: message });
    }

    // getPaintingsFromApiCalls()
    //   .then(pieces => this.props.establishPaintingsInRedux(pieces))
    //   .then(err => this.setState({error: err.message}))
  }

  render() {
    return (
      <section>
        <Nav />
        {!!this.props.paintings.length && <Wall paintings={this.props.paintings} />}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  paintings: state.paintings,
  // favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  establishPaintingsInRedux: paintings => dispatch(establishPaintingsInRedux(paintings)),
})



export default connect(mapStateToProps, mapDispatchToProps)(Heart);

Heart.propTypes = {};
