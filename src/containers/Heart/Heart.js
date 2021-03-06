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
  establishFacetsInRedux,
  addUserInRedux,
  addUsersToRedux
} from "../../actions";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Wall from "../Wall/Wall";
import Nav from "../Nav/Nav";
import Piece from "../Piece/Piece";
import SearchForm from "../SearchForm/SearchForm";
import Spinner from "../../Images/Spinner.svg";
import firebase from "firebase";
import LoginForm from "../LoginForm/LoginForm";
import ReactModal from "react-modal";

export class Heart extends Component {
  constructor() {
    super();
    this.state = {
      users: "",
      user: "",
      error: "",
      showModal: true
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
      return painting.id === artId;
    });
    if (!foundPainting.isfav) {
      foundPainting.isfav = !foundPainting.isfav;
      this.props.addFavoriteInRedux(foundPainting);
    } else {
      foundPainting.isfav = !foundPainting.isfav;
      this.props.deleteFavoriteInRedux(foundPainting);
    }
  };

  handleSearch = async (type, input) => {
    this.props.establishFacetsInRedux([]);
    if (type === "color") {
      if (input.includes("#")) {
        input = input.replace(/\s*#/g, "");
        console.log(input);
        const pieces = await getSearchedForPaintingsByColor(input);
        this.props.establishPaintingsInRedux(pieces);
        const facets = await getFacetsFromApiCalls();
        this.props.establishFacetsInRedux(facets);
      } else {
        const pieces = await getSearchedForPaintingsByColor(input);
        this.props.establishPaintingsInRedux(pieces);
        const facets = await getFacetsFromApiCalls();
        this.props.establishFacetsInRedux(facets);
      }
    } else if (type === "medium") {
      const pieces = await getSearchedForPaintingsByMedium(input);
      this.props.establishPaintingsInRedux(pieces);
      const facets = await getFacetsFromApiCalls();
      this.props.establishFacetsInRedux(facets);
    } else if (type === "century") {
      const pieces = await getSearchedForPaintingsByCentury(input);
      this.props.establishPaintingsInRedux(pieces);
      const facets = await getFacetsFromApiCalls();
      console.log('facet', facets)
      this.props.establishFacetsInRedux(facets);
    } else if (type === "type") {
      const pieces = await getSearchedForPaintingsByType(input);
      this.props.establishPaintingsInRedux(pieces);
      const facets = await getFacetsFromApiCalls();
      this.props.establishFacetsInRedux(facets);
    } else if (type === "place") {
      const pieces = await getSearchedForPaintingsByPlace(input);
      this.props.establishPaintingsInRedux(pieces);
      const facets = await getFacetsFromApiCalls();
      this.props.establishFacetsInRedux(facets);
    } else if (type === "technique") {
      const pieces = await getSearchedForPaintingsByTechnique(input);
      this.props.establishPaintingsInRedux(pieces);
      const facets = await getFacetsFromApiCalls();
      this.props.establishFacetsInRedux(facets);
    } else {
      const pieces = await getSearchForPaintingsByArtist(input);
      this.props.establishPaintingsInRedux(pieces);
      const facets = await getFacetsFromApiCalls();
      this.props.establishFacetsInRedux(facets);
    }
  };

  render() {
    return (
      <main>
        <section>
          <Nav />
          {this.state.error && <p>{this.state.error}</p>}
          {!this.props.facets.length && (
            <div className="loading-div">
              <img src={Spinner} alt="Loading frame" className="loading" />
              <p>Please wait while we curate your gallery..</p>
            </div>
          )}
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
                name="artist"
                handleFavorite={this.handleFavorite}
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
                name="medium"
                handleFavorite={this.handleFavorite}
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
                name="color"
                handleFavorite={this.handleFavorite}
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
                name="century"
                handleFavorite={this.handleFavorite}
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
                name="type"
                handleSearch={this.handleSearch}
                handleFavorite={this.handleFavorite}
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
                name="place"
                handleSearch={this.handleSearch}
                handleFavorite={this.handleFavorite}
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
                name="technique"
                handleSearch={this.handleSearch}
                handleFavorite={this.handleFavorite}
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
                  width="900"
                  alt={foundPainting.title}
                  isfav={foundPainting.isfav}
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
  facets: state.facets,
  user: state.user,
  users: state.users
});

export const mapDispatchToProps = dispatch => ({
  establishPaintingsInRedux: paintings =>
    dispatch(establishPaintingsInRedux(paintings)),
  establishFacetsInRedux: facets => dispatch(establishFacetsInRedux(facets)),
  addFavoriteInRedux: favorite => dispatch(addFavoriteInRedux(favorite)),
  deleteFavoriteInRedux: favorite => dispatch(deleteFavoriteInRedux(favorite)),
  addUserInRedux: user => dispatch(addUserInRedux(user)),
  addUsersToRedux: users => dispatch(addUsersToRedux(users))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Heart);

Heart.propTypes = {
  addFavoriteInRedux: PropTypes.func,
  deleteFavoriteInRedux: PropTypes.func,
  establishFacetsInRedux: PropTypes.func,
  establishPaintingsInRedux: PropTypes.func,
  facets: PropTypes.array,
  favorites: PropTypes.array,
  paintings: PropTypes.array
};
