import React from 'react';
import ContactForm from "../Component/ContactForm";

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <h2 className="title text-center m-4">Come and say hello
                    <span role="img" aria-label="waving-hand">👋</span>
                </h2>
                <p className="text-center">You can find me on
                    <a className="text-decoration-underline" href="https://linkedin.com/in/sandychiuuu/">Linkedin</a>,
                    <a href="https://github.com/orario002">github</a>,
                    <a href="https://www.flickr.com/photos/150763931@N04/albums">flickr</a>,
                    <a href="https://www.twitter.com/sandychiu">twitter</a>,
                    or drop me an <a href="mailto:hello@sandychiu.com">Email</a>
                </p>


            </div>
        );
    }
}

export default Contact;