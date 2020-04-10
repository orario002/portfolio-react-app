import React from 'react';
import ContactForm from "../Component/ContactForm";

class Contact extends React.Component {
    render() {
        return (
            <div className="contact container">
                <h2 className="title text-center m-4">Come and say hello
                    <span role="img" aria-label="waving-hand">👋</span>
                </h2>
                <p className="text-center mb-4">You can find me on
                    <a target="_blank" className="text-decoration-underline"
                       href="https://linkedin.com/in/sandychiuuu/">Linkedin</a>,
                    <a target="_blank" href="https://dribbble.com/sandychiu">Dribbble</a>,
                    <a target="_blank" href="https://github.com/orario002">GitHub</a>,
                    or drop me an <a href="mailto:hello@sandychiu.com">Email</a>
                </p>
                <p className="text-center mb-4">Follow me on <a target="_blank"
                                                                href="https://www.instagram.com/sandychiuuu">Instagram
                    📸</a> and
                    <a target="_blank" href="https://www.twitter.com/sandychiu">Twitter 🐦</a>
                </p>
            </div>
        );
    }
}

export default Contact;