import React, { Component } from "react";
import "./LoginForm.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        password: ''
    };
  }

  handleChangeOfInput = e => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value });
  };

  render() {
    return (
    <form>
        <input className="form-input" type='text' placeholder='Please enter your name' name='name' value={this.state.name} onChange={e => this.handleChangeOfInput(e)}/>
        <input className="form-input" type='text' placeholder='Please enter your password' name='password' value={this.state.password} onChange={e => this.handleChangeOfInput(e)}/>
        <button onClick={(e) => this.props.checkUser(e, this.state)}>Submit!</button>
    </form>
    );
  }
}

export default LoginForm;