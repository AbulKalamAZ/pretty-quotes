import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import M from "materialize-css";

class Navbar extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    const { auth } = this.props;
    const nav_menu = auth.uid ? (
      <SignedInLinks userProfile={this.props.profile} />
    ) : (
      <SignedOutLinks />
    );

    return (
      <div>
        <div className="navbar-fixed">
          <nav className="blue darken-2" role="navigation">
            <div className="nav-wrapper container">
              <Link to="/" id="logo-container" className="brand-logo">
                <h5>Pretty Quotes</h5>
              </Link>

              {/* burger menu icon */}
              <a
                href="/"
                data-target="mobile-links"
                className="right sidenav-trigger"
              >
                <i className="material-icons">menu</i>
              </a>

              <ul className="right hide-on-med-and-down">{nav_menu}</ul>
            </div>
          </nav>
        </div>

        {/* side nav here */}
        <ul id="mobile-links" className="sidenav">
          {nav_menu}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
