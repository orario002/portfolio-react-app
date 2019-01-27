import React, {Component} from "react";

import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";

import Work from "./Portfolio/Work"
import Gallery from "./Portfolio/Gallery"
import Photography from "./Portfolio/Photography"

class Portfolio extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className="m-4">
                        <li>
                            <NavLink activeClassName="selected" to="/portfolio/work/">Websites</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="selected" to="/portfolio/gallery/">Illustration</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="selected" to="/portfolio/photography/">Photography</NavLink>
                        </li>
                    </ul>
                    <main>
                        <Switch>
                            <Route exact path="/portfolio/work/" component={Work}/>
                            <Route path="/portfolio/gallery/" component={Gallery}/>
                            <Route path="/portfolio/photography/" component={Photography}/>
                        </Switch>
                    </main>
                </div>
            </Router>
        )
    }
};

export default Portfolio;