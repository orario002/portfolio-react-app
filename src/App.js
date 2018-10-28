import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Pages/Home"
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

// const Index = () => <h2>Home</h2>;
// // const About = () => <h2>About</h2>;
// // const Portfolio = () => <h2>Portfolio</h2>;
// // const Blog = () => <h2>Blog</h2>;
// // const Contact = () => <h2>Contact</h2>;

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <nav>
      <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/about/">About</Link>
      </li>
      <li>
      <Link to="/portfolio/">Portfolio</Link>
      </li>
      <li>
      <Link to="/blog/">Blog</Link>
      </li>
      <li>
      <Link to="/contact/">Contact</Link>
      </li>
      </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/portfolio/" component={Portfolio} />
      <Route path="/blog/" component={Blog} />
      <Route path="/contact/" component={Contact} />
      </div>
      </Router>
      )}
  };

  export default App;