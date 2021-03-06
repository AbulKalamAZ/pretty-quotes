import React from "react";
import Quote from "./Quote";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export default function QuoteList(props) {
  const componentStyle = useSpring({
    from: { opacity: 0 },
    opacity: 1
  });

  return (
    <animated.div style={componentStyle} className="quote-list section">
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
    </animated.div>
  );
}
