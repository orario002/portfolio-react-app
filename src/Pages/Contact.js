import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact container">
                <h2 className="brand text-center m-4">Come and say hello
                    <span className="pl-2" role="img" aria-label="waving-hand">👋</span>
                </h2>
                <p className="text-center mb-4">You can find me on
                    <a target="_blank" rel="noopener noreferrer" className="text-decoration-underline"
                       href="https://linkedin.com/in/sandychiuuu/">Linkedin</a>,
                    <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/sandychiu">Dribbble</a>,
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/orario002">GitHub</a>,
                    or drop me an<a href="mailto:hello@sandychiu.com">Email</a>
                </p>
                <p className="text-center mb-4">Follow me on<a target="_blank" rel="noopener noreferrer"
                                                               href="https://www.instagram.com/sandychiuuu">Instagram
                    <span role="img" aria-label="camera emoji">📸</span></a>and
                    <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/sandychiu">Twitter<span role="img" aria-label="bird emoji">🐦</span></a>
                </p>
            </div>
        );
    }
}

export default Contact;