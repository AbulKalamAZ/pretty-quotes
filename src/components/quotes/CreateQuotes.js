import React, { Component } from "react";
import { createQuote } from "../../store/actions/quotesAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreateQuotes extends Component {
  state = {
    quote: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createQuote(this.state);
    this.refs.quote.value = "";
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="/sign-in" />;

    return (
      <div
        className="sign-in container white"
        style={{ marginTop: "10%", padding: "20px" }}
      >
        <form onSubmit={this.handleSubmit} className="white">
          <div className="row">
            <div className="col s12">
              <h5 className="text-grey text-darken-3">Today's thought</h5>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <div className="input-field">
                <input
                  type="text"
                  id="quote"
                  placeholder="Your thought in words"
                  onChange={this.handleChange}
                  ref="quote"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <div className="input-field">
                <button className="btn blue darken-2 z-depth-0">Done!</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createQuote: quote => dispatch(createQuote(quote))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateQuotes);
