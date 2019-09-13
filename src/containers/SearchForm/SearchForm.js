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
    return (
      <section>
        <form>
          <input
            type="text"
            placeholder={this.props.placeholder}
            name={this.props.name}
            className="search"
            value={this.state.name}
            onChange={e => this.handleChangeOfInput(e)}
          ></input>
          <Link to={`/artist/${this.state.currentValue}`} onClick={e =>
                this.props.handleSearch(
                  e,
                  this.props.name,
                  this.state.currentValue
                )
              }>
            <p>
              ..and find some paintings
            </p>
          </Link>
        </form>
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
