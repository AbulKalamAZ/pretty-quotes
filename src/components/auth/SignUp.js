import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authAction";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;

    if (auth.uid) {
      return <Redirect to="/" />;
    } else {
      return (
        <div
          className="sign-in container white"
          style={{ marginTop: "10%", padding: "20px" }}
        >
          <form onSubmit={this.handleSubmit} className="white">
            <div className="row">
              <div className="col s12">
                <h5 className="text-grey text-darken-3">Sign Up</h5>
              </div>
            </div>

            <div className="row">
              <div className="col s12">
                <div className="row">
                  <div className="input-field col s12 m6">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="validate"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="input-field col s12 m6">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="validate"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col s12">
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    className="validate"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col s12">
                <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="validate"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col s12">
                <div className="input-field">
                  <button className="btn blue darken-2 z-depth-0">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="container red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </form>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: userInfo => dispatch(signUp(userInfo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
