import React, { Component } from "react";
import "./Heart.css";
import { getPaintingsFromApiCalls } from "../../apiCalls/apiCalls.js";
import { establishPaintingsInRedux, addFavoriteInRedux, deleteFavoriteInRedux} from '../../actions'
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
    if (!foundPainting.isFav){
      foundPainting.isFav = !foundPainting.isFav
      this.props.addFavoriteInRedux(foundPainting)
    } else {
      foundPainting.isFav = !foundPainting.isFav
      this.props.deleteFavoriteInRedux(foundPainting)      
    }
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
  addFavoriteInRedux: favorite => dispatch(addFavoriteInRedux(favorite)),
  deleteFavoriteInRedux: favorite => dispatch(deleteFavoriteInRedux(favorite))
})



export default connect(mapStateToProps, mapDispatchToProps)(Heart);

Heart.propTypes = {};
