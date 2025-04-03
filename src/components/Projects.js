import React from 'react';

function Projects() {
    return (
        <div className="container-fluid py-5">
            <h1 className="text-center mb-4">My Projects</h1>
            <p className="text-center">Here are some of the projects I’ve worked on:</p>
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h5 className="card-title">Quick Cash App</h5>
                            <p className="card-text">A simple app to manage transactions efficiently.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h5 className="card-title">Web Game Using Logic Gates</h5>
                            <p className="card-text">An interactive game that teaches logic gate concepts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
