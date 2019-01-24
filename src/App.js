import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Logo from "./Assets/brand/logo.svg";

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
      <NavLink exact to="/portfolio/work/">Portfolio</NavLink>
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
      <Route path="/portfolio/work" component={Portfolio} />
      <Route path="/blog/" component={Blog} />
      <Route path="/contact/" component={Contact} />
      </main>

      <footer className="d-flex justify-content-center">©2019 SandyChiu.com All rights reserved.</footer>

      </div>
      </Router>

      )}
    };

    export default App;