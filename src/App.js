import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import NoMatch from "./Pages/Error";

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
                                </div>
                                <div className="nav">
                                    <NavLink activeClassName="selected" exact
                                             to="/portfolio/design/">Portfolio</NavLink>
                                    <NavLink activeClassName="selected" to="/about/">About</NavLink>
                                    <NavLink activeClassName="selected" to="/blog/">Writing</NavLink>
                                    <NavLink activeClassName="selected" to="/contact/">Contact</NavLink>
                                </div>
                            </nav>
                        </header>
                        <main>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/about/" component={About}/>
                                <Route exact path="/portfolio/design" component={Portfolio}/>
                                <Route exact path="/blog/" component={Blog}/>
                                <Route exact path="/contact/" component={Contact}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        </main>
                    </div>
                    <footer className="d-flex justify-content-between align-items-center">
                        <div>
                            <span>©2020 Made with ReactJs by Sandy Chiu.</span>
                        </div>
                        <div>
                            <div>
                                <a className="pr-2" target="_blank" href="mailto:hello@sandychiu.com">Email</a>•
                                <a className="pl-2 mr-2" target="_blank"
                                   href="https://linkedin.com/in/sandychiuuu/">Linkedin</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </Router>

        )
    }
};

export default App;