import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authAction";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Spring } from "react-spring/renderprops";

class SignIn extends Component {
  state = {
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
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;

    if (auth.uid) return <Redirect to="/" />;
    return (
      <Spring from={{ opacity: 0, margin: 0 }} to={{ opacity: 1, margin: 5 }}>
        {props => (
          <div
            className="sign-in container white"
            style={{
              opacity: `${props.opacity}`,
              padding: "10px",
              marginTop: `${props.margin}%`
            }}
          >
            <form onSubmit={this.handleSubmit} className="white">
              <div className="row">
                <div className="col s12">
                  <h5 className="text-grey text-darken-3">Sign In</h5>
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
                      ref="email"
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
                      ref="password"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col s12 m6">
                  <div className="input-field">
                    <button className="btn blue darken-2 z-depth-0">
                      Sign In
                    </button>
                  </div>
                </div>
                <div
                  className="col s12 m6 blue-text lighten-3"
                  style={{ textAlign: "right", cursor: "pointer" }}
                >
                  <p>
                    <NavLink to="/sign-up">Don't have an accout?</NavLink>
                  </p>
                </div>
              </div>
              <div className="container red-text center">
                {authError ? <p>{authError}</p> : null}
              </div>
            </form>
          </div>
        )}
      </Spring>
    );
  }
}
const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: cred => dispatch(signIn(cred))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
