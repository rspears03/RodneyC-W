import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Cart from "./components/Cart";

export default function App(){

  return (
    <Router>
    <div>
      <header>
        <nav>Course Finder</nav>
      </header>
        <Route path="/Cart" component={Cart} />
        <Route path="/" component={Home} />

    </div>
    </Router>
  );
}
// {chicken.title},
// {chicken.photo},
// {chicken.descr}