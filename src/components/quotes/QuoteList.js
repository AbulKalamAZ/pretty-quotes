import React from "react";
import Quote from "./Quote";
import { Link } from "react-router-dom";

export default function QuoteList(props) {
  return (
    <div className="quote-list section">
      {props.quotes
        ? props.quotes.map(quote => (
            <Link to={"/quotes/" + quote.id} key={quote.id}>
              <Quote
                title={quote.quote}
                author={quote.author}
                time={quote.createdAt}
              />
            </Link>
          ))
        : null}
    </div>
  );
}
