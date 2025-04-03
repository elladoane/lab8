import React from 'react';
import '../style.css';

function About() {
    return (
        <div className="card p-4 shadow-lg">
            <h1 className="text-primary">About Me</h1>
            <p className="lead">
                I am a student at Dalhousie University pursuing a degree in Applied Computer Science.
                I have experience in software development, cybersecurity, and web development.
                I am passionate about technology and always eager to learn more.
            </p>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">🎓 Education: Dalhousie University</li>
                <li className="list-group-item">💻 Skills: JavaScript, React, Python, Java</li>
                <li className="list-group-item">🚀 Career Goal: Work in cybersecurity and software development</li>
            </ul>
        </div>
    );
}

export default About;