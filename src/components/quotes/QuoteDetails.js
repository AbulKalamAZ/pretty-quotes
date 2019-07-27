import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { useSpring, animated } from "react-spring";

function QuoteDetails(props) {
  const { quote, auth } = props;
  const componentStyle = useSpring({ opacity: 1, from: { opacity: 0 } });

  if (!auth.uid) return <Redirect to="/sign-in" />;

  if (quote) {
    return (
      <animated.div style={componentStyle} className="container section">
        <div className="card z-depth-0" style={{ marginTop: "5%" }}>
          <div className="card-content grey-text text-darken-3">
            <p>{quote.quote}</p>
          </div>
          <div className="card-action grey-text">
            <p>Posted by {quote.author}</p>
            <p>{moment(quote.createdAt.toDate()).calendar()}</p>
          </div>
        </div>
      </animated.div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading quote ...</p>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const quotes = state.firestore.data.quotes;
  const quote = quotes ? quotes[id] : null;

  return {
    quote: quote,
    auth: state.firebase.auth
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "quotes" }])
)(QuoteDetails);
