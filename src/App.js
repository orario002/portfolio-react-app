import React, {Component} from "react";

import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";

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
                <div className="site">
                    <div className="site-content">
                        <header>
                            <nav>
                                <div>
                                    <NavLink to="/"><img src={Logo} alt="logo" width="50" height="50"/></NavLink>
                                </div>
                                <div>
                                    <NavLink activeClassName="selected" exact to="/portfolio/work/">Portfolio</NavLink>
                                </div>
                                <div>
                                    <NavLink activeClassName="selected" to="/about/">About</NavLink>
                                </div>
                                <div>
                                    <NavLink activeClassName="selected" to="/blog/">Blog</NavLink>
                                </div>
                                <div>
                                    <NavLink activeClassName="selected" to="/contact/">Contact</NavLink>
                                </div>
                            </nav>
                        </header>

                        <main>
                            <Route path="/" exact component={Home}/>
                            <Route path="/about/" component={About}/>
                            <Route path="/portfolio/work" component={Portfolio}/>
                            <Route path="/blog/" component={Blog}/>
                            <Route path="/contact/" component={Contact}/>
                        </main>
                    </div>
                    <footer className="d-flex justify-content-between">
                        <span>©2019 sandychiu.com All rights reserved.</span>
                        <span class="social-emoji">
                        <a class="mr-2" target="_blank" href="https://www.instagram.com/sandychiuuu">📸</a>
                            <a target="_blank" href="https://www.twitter.com/sandychiu">🐦</a>
                        </span>
                    </footer>

                </div>
            </Router>

        )
    }
};

export default App;