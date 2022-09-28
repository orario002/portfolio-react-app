import React from 'react';
import Sloth from "../Assets/images/sloth-4617460_1280.png";

const Home = "/";

class Error extends React.Component {
    render() {
        return (
            <div className="error d-flex align-items-center justify-content-center">
                <img className="mr-3" alt="sloth sleeping in a cup" src={Sloth} width={200}/>
                <span><p>Sorry, this page does not exist.</p>
                    <p>Please try again or visit the <a className="btn btn-link" href={Home}>Home page ♥</a></p></span>
            </div>
        );
    }
}

export default Error;