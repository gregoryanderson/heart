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
  getSearchedForPaintingsByTechnique,
  getFacetsFromApiCalls
} from "../../apiCalls/apiCalls.js";
import {
  establishPaintingsInRedux,
  addFavoriteInRedux,
  deleteFavoriteInRedux,
  establishFacetsInRedux
} from "../../actions";
import { Route, Redirect, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Wall from "../Wall/Wall";
import Nav from "../Nav/Nav";
import Piece from "../Piece/Piece";
import SearchForm from "../SearchForm/SearchForm";

export class Heart extends Component {
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
      const facets = await getFacetsFromApiCalls();
      this.props.establishFacetsInRedux(facets);
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

  handleSearch = async (type, input) => {
    // console.log(type);
    // console.log(input);
    if (type === "color") {
      if (input.includes("#")) {
        input.slice(2);
        console.log(input);
        const pieces = await getSearchedForPaintingsByColor(input);
        this.props.establishPaintingsInRedux(pieces);
      } else {
        const pieces = await getSearchedForPaintingsByColor(input);
        this.props.establishPaintingsInRedux(pieces);
      }
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
            <h1 className="logo">
              sh<span className="nav--art">Art</span>
            </h1>
          </section>
          <Route
            exact
            path="/"
            render={() => (
              <Wall
                paintings={this.props.paintings}
                handleFavorite={this.handleFavorite}
                route=""
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
                route="favorites"
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
                facets={this.props.facets[0]}
              />
            )}
          />
          <Route
            exact
            path="/artist/:artist"
            render={() => (
              <Wall
                paintings={this.props.paintings}
                handleFavorite={this.handleFavorite}
                route="artist"
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
                facets={this.props.facets[4]}
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
                route="medium"
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
                facets={this.props.facets[6]}
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
                route="color"
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
                facets={this.props.facets[2]}
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
                route="century"
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
                facets={this.props.facets[1]}
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
                route="type"
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
                facets={this.props.facets[3]}
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
                route="place"
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
                facets={this.props.facets[5]}
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
                route="technique"
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

export const mapStateToProps = state => ({
  paintings: state.paintings,
  favorites: state.favorites,
  facets: state.facets
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
