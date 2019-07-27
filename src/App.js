import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import QuoteDetails from "./components/quotes/QuoteDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateQuote from "./components/quotes/CreateQuotes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/quotes/:id" component={QuoteDetails} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/create-quote" component={CreateQuote} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
