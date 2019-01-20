import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Pages/Home"
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Logo from "./Assets/logo.svg"

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
      <div>
      <Link to="/"><img src={Logo} alt="logo" width="50" height="50"/></Link>
      </div>
      <div>
      <Link to="/about/">About</Link>
      </div>
      <div>
      <Link to="/portfolio/">Portfolio</Link>
      </div>
      <div>
      <Link to="/blog/">Blog</Link>
      </div>
      <div>
      <Link to="/contact/">Contact</Link>
      </div>
      </nav>

      <main>
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/portfolio/" component={Portfolio} />
      <Route path="/blog/" component={Blog} />
      <Route path="/contact/" component={Contact} />
      </main>

      <footer>©2018 SandyChiu.com All rights reserved.</footer>

      </div>
      </Router>

      )}
    };

    export default App;