import React, { Component } from "react";
import "./SearchForm.css";
import PropTypes from "prop-types";
import {
  establishPaintingsInRedux,
  addFavoriteInRedux,
  deleteFavoriteInRedux
} from "../../actions";
import { connect } from "react-redux";
import Wall from "../Wall/Wall";
import { Link } from "react-router-dom";
import FacetContainer from "../FacetContainer/FacetContainer";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: null
    };
  }

  handleChangeOfInput = e => {
    this.setState({ currentValue: e.target.value });
  };

  render() {
    console.log('search', this.props);
    return (
      <section className="SearchForm">
        <p className="search-text">Please choose from one of these options:</p>
        <FacetContainer
          handleSearch={this.props.handleSearch}
          name={this.props.name}
          facets={this.props.facets}
        />
        <p className="search-text">Or ask for something more specific..</p>
        <form>
          <input
            type="text"
            placeholder={this.props.placeholder}
            name={this.props.name}
            className="search"
            value={this.state.name}
            onChange={e => this.handleChangeOfInput(e)}
          ></input>
          <Link
            to={`/${this.props.name}/${this.state.currentValue}`}
            onClick={e =>
              this.props.handleSearch(this.props.name, this.state.currentValue)
            }
          >
            <p className="search-text">..and find some paintings</p>
          </Link>
        </form>
        <Wall
          paintings={this.props.paintings}
          handleFavorite={this.handleFavorite}
          route="favorites"
        />
      </section>
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
)(SearchForm);
