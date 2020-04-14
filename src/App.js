import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FaArrowUp, FaLinkedin, FaEnvelope} from 'react-icons/fa';

import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import NoMatch from "./Pages/Error";
import FormsManager from "./Pages/Portfolio";
import Plugin from "./Pages/Portfolio";
import SiteBuilder from "./Pages/Portfolio";

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
                                    <NavLink activeClassName="selected" to="/portfolio/design/">Portfolio</NavLink>
                                    <NavLink activeClassName="selected" to="/about/">About</NavLink>
                                    <NavLink activeClassName="selected" to="/blog/">Writing</NavLink>
                                    <NavLink activeClassName="selected" to="/contact/">Contact</NavLink>
                                </div>
                            </nav>
                        </header>
                        <main>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/about/" component={About}/>
                                <Route exact path="/portfolio/design/" component={Portfolio}/>
                                <Route path="/portfolio/design/formsmanager/" component={FormsManager}/>
                                <Route path="/portfolio/design/plugin/" component={Plugin}/>
                                <Route path="/portfolio/design/sitebuilder/" component={SiteBuilder}/>
                                <Route exact path="/portfolio/development/" component={Portfolio}/>
                                <Route path="/blog/" component={Blog}/>
                                <Route path="/contact/" component={Contact}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        </main>
                    </div>
                    <footer className="d-flex justify-content-between align-items-center">
                        <div>
                            <span>©2020 Made with ReactJs by Sandy Chiu.</span>
                        </div>
                        <div>
                            <div className="d-flex">
                                <a className="pr-2 d-flex align-self-center" target="_blank" rel="noopener noreferrer" href="mailto:hello@sandychiu.com"><FaEnvelope size={20} className="mr-2"/>Email</a>•
                                <a className="pl-2 mr-2 d-flex align-self-center" target="_blank" rel="noopener noreferrer"
                                   href="https://linkedin.com/in/sandychiuuu/"><FaLinkedin size={20} className="mr-2"/>Linkedin</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </Router>

        )
    }
};

export default App;