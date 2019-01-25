import React, {Component} from "react";

import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import Work from "./Portfolio/Work"
import Gallery from "./Portfolio/Gallery"
import Photography from "./Portfolio/Photography"

class Portfolio extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/portfolio/work/">Websites</Link>
                        </li>
                        <li>
                            <Link to="/portfolio/gallery/">Illustration</Link>
                        </li>
                        <li>
                            <Link to="/portfolio/photography/">Photography</Link>
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