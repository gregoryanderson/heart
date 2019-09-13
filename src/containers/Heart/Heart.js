import React, { Component } from "react";
import "./Heart.css";
import { getPaintingsFromApiCalls } from "../../apiCalls/apiCalls.js";
import {
  establishPaintingsInRedux,
  addFavoriteInRedux,
  deleteFavoriteInRedux
} from "../../actions";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Wall from "../Wall/Wall";
import Nav from "../Nav/Nav";
import Piece from '../Piece/Piece'

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
      this.props.establishPaintingsInRedux(pieces);
    } catch ({ message }) {
      this.setState({ error: message });
    }
  }

  handleFavorite = artId => {
    const foundPainting = this.props.paintings.find(painting => {
      return painting.id == artId;
    });
    if (!foundPainting.isFav) {
      foundPainting.isFav = !foundPainting.isFav;
      this.props.addFavoriteInRedux(foundPainting);
    } else {
      foundPainting.isFav = !foundPainting.isFav;
      this.props.deleteFavoriteInRedux(foundPainting);
    }
  };

  render() {
    return (
      <main>
        <section>
          <Nav />
          <Route
            exact
            path="/"
            render={() => (
              <Wall
                paintings={this.props.paintings}
                handleFavorite={this.handleFavorite}
              />
            )}
          />
          <Route
            exact
            path="/favorites"
            render={() => (
              <Wall
                paintings={this.props.favorites}
                handleFavorite={this.handleFavorite}
              />
            )}
          />
        </section>
        <section className="selected__section">
          <Route
            path="/paintings/:id"
            render={({ match }) => {
              const foundPainting = this.props.paintings.find(
                painting => painting.id === match.params.id
              );
              console.log(foundPainting)
              return (
                <Piece
                  url={foundPainting.url}
                  key={foundPainting.id}
                  id={foundPainting.id}
                  width="1000"
                  alt={foundPainting.title}
                  isFav={foundPainting.isFav}
                  handleFavorite={this.handleFavorite}
                  title={foundPainting.title}
                  artist={foundPainting.artist}
                />
              );
            }}
          />
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  paintings: state.paintings,
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  establishPaintingsInRedux: paintings =>
    dispatch(establishPaintingsInRedux(paintings)),
  addFavoriteInRedux: favorite => dispatch(addFavoriteInRedux(favorite)),
  deleteFavoriteInRedux: favorite => dispatch(deleteFavoriteInRedux(favorite))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Heart);

Heart.propTypes = {};
