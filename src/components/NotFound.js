import React from 'react';
import '../style.css';

function NotFound() {
    return (
        <div className="alert alert-danger text-center" role="alert">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}

export default NotFound;
