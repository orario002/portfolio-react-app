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
                            <nav className="d-flex justify-content-between">
                                <div>
                                    <NavLink to="/"><img src={Logo} alt="logo" width="50" height="50"/>Sandy Chiu | Product Designer</NavLink>
                                </div>
                                <div>
                                    <NavLink activeClassName="selected" exact to="/portfolio/work/">Portfolio</NavLink>
                                    <NavLink activeClassName="selected" to="/about/">About</NavLink>
                                    <NavLink activeClassName="selected" to="/blog/">Blog</NavLink>
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
                    <footer className="d-flex justify-content-between align-items-center">
                        <div>
                        <span>©2020 sandychiu.com All rights reserved.</span>
                        </div>
                        <div>
                        <span className="mr-2">Built in ReactJs.</span>
                        <span class="social-emoji">
                        <a class="mr-2" target="_blank" href="https://www.instagram.com/sandychiuuu">📸</a>
                            <a target="_blank" href="https://www.twitter.com/sandychiu">🐦</a>
                        </span>
                        </div>
                    </footer>

                </div>
            </Router>

        )
    }
};

export default App;