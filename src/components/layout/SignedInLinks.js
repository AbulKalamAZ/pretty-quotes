import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authAction";

function SignedInLinks(props) {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/create-quote">Create Quote</NavLink>
        </li>
        <li onClick={props.signOut}>
          <NavLink to="/sign-in">Log Out</NavLink>
        </li>
        <li>
          <a href="/" className="btn btn-floating indigo darken-2">
            {props.userProfile.initialName}
          </a>
        </li>
      </ul>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
