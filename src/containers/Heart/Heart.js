import React, { Component } from "react";
import "./Heart.css";
import { getPaintingsFromApiCalls } from "../../apiCalls/apiCalls.js";
import { establishPaintingsInRedux, establishFavoritesInRedux } from '../../actions'
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
      this.props.establishPaintingsInRedux(pieces)
    } catch ({ message }) {
      this.setState({ error: message });
    }
  }


  handleFavorite = (artId) => {
    const foundPainting = this.props.paintings.find(painting => {
      return painting.id == artId
    })
    foundPainting.isFav = !foundPainting.isFav
    this.props.establishFavoritesInRedux(foundPainting)
  }


  render() {
    return (
      <section>
        <Nav />
        {!!this.props.paintings.length && <Wall paintings={this.props.paintings} handleFavorite={this.handleFavorite}/>}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  paintings: state.paintings,
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  establishPaintingsInRedux: paintings => dispatch(establishPaintingsInRedux(paintings)),
  establishFavoritesInRedux: favorites => dispatch(establishFavoritesInRedux(favorites))
})



export default connect(mapStateToProps, mapDispatchToProps)(Heart);

Heart.propTypes = {};
