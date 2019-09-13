import React, { Component } from "react";
import "./Heart.css";
import {
  getPaintingsFromApiCalls,
  getSearchedForPaintingsByColor,
  getSearchForPaintingsByArtist,
  getSearchedForPaintingsByMedium,
  getSearchedForPaintingsByCentury,
  getSearchedForPaintingsByPlace,
  getSearchedForPaintingsByType,
  getSearchedForPaintingsByTechnique
} from "../../apiCalls/apiCalls.js";
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
import Piece from "../Piece/Piece";
import SearchForm from "../SearchForm/SearchForm";

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

    try {
      const facets = await getFacets();
      this.props.establishFacetsInRedux(facets)
    } catch ({message}){
      this.setState({ error: message})
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

  handleSearch = async (e, type, input) => {
    console.log(type);
    console.log(input);
    if (type === "color") {
      const pieces = await getSearchedForPaintingsByColor(input);
      this.props.establishPaintingsInRedux(pieces);
    } else if (type === "medium") {
      const pieces = await getSearchedForPaintingsByMedium(input);
      this.props.establishPaintingsInRedux(pieces);
    } else if (type === "century") {
      const pieces = await getSearchedForPaintingsByCentury(input);
      this.props.establishPaintingsInRedux(pieces);
    } else if (type === "type") {
      const pieces = await getSearchedForPaintingsByType(input);
      this.props.establishPaintingsInRedux(pieces);
    } else if (type === "place") {
      const pieces = await getSearchedForPaintingsByPlace(input);
      this.props.establishPaintingsInRedux(pieces);
    } else if (type === "technique") {
      const pieces = await getSearchedForPaintingsByTechnique(input);
      this.props.establishPaintingsInRedux(pieces);
    } else {
      const pieces = await getSearchForPaintingsByArtist(input);
      this.props.establishPaintingsInRedux(pieces);
    }
  };

  render() {
    return (
      <main>
        <section>
          <Nav handleSearch={this.handleSearch} />
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
          <Route
            exact
            path="/artist"
            render={() => (
              <SearchForm
                paintings={this.props.paintings}
                name="artist"
                handleSearch={this.handleSearch}
                placeholder="Please search for an artist"
              />
            )}
          />
          <Route
            exact
            path="/artist/:name"
            render={() => (
              <Wall
                paintings={this.props.paintings}
                handleFavorite={this.handleFavorite}
              />
            )}
          />
          <Route
            exact
            path="/medium"
            render={() => (
              <SearchForm
                paintings={this.props.paintings}
                name="medium"
                handleSearch={this.handleSearch}
                placeholder="Please search for a medium"
              />
            )}
          />
          <Route
            exact
            path="/medium/:medium"
            render={() => (
              <Wall
                paintings={this.props.paintings}
                handleFavorite={this.handleFavorite}
              />
            )}
          />
          <Route
            exact
            path="/color"
            render={() => (
              <SearchForm
                paintings={this.props.paintings}
                name="color"
                handleSearch={this.handleSearch}
                placeholder="Please search for a color"
              />
            )}
          />
          <Route
            exact
            path="/color/:color"
            render={() => (
              <Wall
                paintings={this.props.paintings}
                handleFavorite={this.handleFavorite}
              />
            )}
          />
          <Route
            exact
            path="/century"
            render={() => (
              <SearchForm
                paintings={this.props.paintings}
                name="century"
                handleSearch={this.handleSearch}
                placeholder="Please search for a century"
              />
            )}
          />
          <Route
            exact
            path="/century/:century"
            render={() => (
              <Wall
                paintings={this.props.paintings}
                handleFavorite={this.handleFavorite}
              />
            )}
          />
          <Route
            exact
            path="/type"
            render={() => (
              <SearchForm
                paintings={this.props.paintings}
                name="type"
                handleSearch={this.handleSearch}
                placeholder="Please search for a type"
              />
            )}
          />
          <Route
            exact
            path="/type/:type"
            render={() => (
              <Wall
                paintings={this.props.paintings}
                handleFavorite={this.handleFavorite}
              />
            )}
          />
          <Route
            exact
            path="/place"
            render={() => (
              <SearchForm
                paintings={this.props.paintings}
                name="place"
                handleSearch={this.handleSearch}
                placeholder="Please search for a place"
              />
            )}
          />
          <Route
            exact
            path="/place/:place"
            render={() => (
              <Wall
                paintings={this.props.paintings}
                handleFavorite={this.handleFavorite}
              />
            )}
          />
          <Route
            exact
            path="/technique"
            render={() => (
              <SearchForm
                paintings={this.props.paintings}
                name="technique"
                handleSearch={this.handleSearch}
                placeholder="Please search for a technique"
              />
            )}
          />
          <Route
            exact
            path="/technique/:technique"
            render={() => (
              <Wall
                paintings={this.props.paintings}
                handleFavorite={this.handleFavorite}
              />
            )}
          />
          <Route
            path="/paintings/:id"
            render={({ match }) => {
              const foundPainting = this.props.paintings.find(
                painting => painting.id === match.params.id
              );
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
  establishFacetsInRedux: facets => dispatch(establishFacetsInRedux(facets)),
  addFavoriteInRedux: favorite => dispatch(addFavoriteInRedux(favorite)),
  deleteFavoriteInRedux: favorite => dispatch(deleteFavoriteInRedux(favorite))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Heart);

Heart.propTypes = {};
