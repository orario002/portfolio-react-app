import React, {Component} from "react";

import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Logo from "./Assets/brand/hexagon.png";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="site">
                    <div className="site-content">
                        <header>
                            <nav className="d-flex justify-content-between">
                                <div>
                                    <NavLink to="/"><span className="brand">Sandy Chiu</span></NavLink>
                                    {/*<img src={Logo} alt="logo" width="50" height="50"/>*/}
                                </div>
                                <div>
                                    <NavLink activeClassName="selected" exact
                                             to="/portfolio/design/">Portfolio</NavLink>
                                    <NavLink activeClassName="selected" to="/about/">About</NavLink>
                                    <NavLink activeClassName="selected" to="/blog/">Blog</NavLink>
                                    <NavLink activeClassName="selected" to="/contact/">Contact</NavLink>
                                </div>
                            </nav>
                        </header>

                        <main className="container">
                            <Route path="/" exact component={Home}/>
                            <Route path="/about/" component={About}/>
                            <Route path="/portfolio/design" component={Portfolio}/>
                            <Route path="/blog/" component={Blog}/>
                            <Route path="/contact/" component={Contact}/>
                        </main>
                    </div>
                    <footer className="d-flex justify-content-between align-items-center">
                        <div>
                            <span>©2020 Made with ReactJs by Sandy Chiu.</span>
                        </div>
                        <div>
                            <div>
                                <div><a target="_blank" href="mailto:hello@sandychiu.com">hello@sandychiu.com</a></div>
                                <div><a className="mr-2" target="_blank"
                                        href="https://www.instagram.com/sandychiuuu">Instagram</a></div>
                                <div><a target="_blank" href="https://www.twitter.com/sandychiu">Twitter</a></div>
                            </div>
                        </div>
                    </footer>
                </div>
            </Router>

        )
    }
};

export default App;