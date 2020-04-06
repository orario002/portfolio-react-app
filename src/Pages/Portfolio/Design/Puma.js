import React from "react";
import {Col} from "reactstrap";

class Puma extends React.Component {
    render() {
        return (
            <div className="row container">
                <h1>Puma</h1>
                <button className="btn btn-primary"><a href="/portfolio/design/adobe">Previous</a></button>
                <button className="btn btn-primary"><a href="/portfolio/design/nfs">Next</a></button>
            </div>
        );
    }
}


export default Puma;