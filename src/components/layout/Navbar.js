import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

function Navbar(props) {
  const { auth } = props;
  const nav_menu = auth.uid ? (
    <SignedInLinks userProfile={props.profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <nav
      className="nav-wrapper blue darken-2"
      style={{ position: "fixed", zIndex: "999", top: "0" }}
    >
      <div className="container">
        <Link to="/" className="brand-logo">
          Pretty Quotes
        </Link>
        {nav_menu}
      </div>
    </nav>
  );
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
