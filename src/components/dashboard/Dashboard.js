import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteList from "../quotes/QuoteList";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { quotes, auth } = this.props;

    if (!auth.uid) return <Redirect to="/sign-in" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6" style={{ marginTop: "10%" }}>
            <QuoteList quotes={quotes} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.firestore.ordered.quotes,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "quotes", orderBy: ["createdAt", "desc"] }])
)(Dashboard);
