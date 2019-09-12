import React, { Component } from "react";
import "./SearchForm.css";
import PropTypes from "prop-types";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        color: ''
    };
  }

  render() {
    return (
      <section>
        <form>
            <input type="text" placeholder="Pick a color" name="color" className='search' value={this.state.color}></input>
        </form>
      </section>
    );
  }
}

export default SearchForm;