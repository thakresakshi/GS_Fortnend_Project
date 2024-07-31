// src/ErrorPage.js
import React from 'react';
import './Error.css';

function ErrorPage() {
  return (
    <div className="error-page-container">
      <img src='notAllow.jpeg' alt='<h1>404</h1>' />
      {/* <h1>404</h1> */}
      <p>Page Not Found</p>
      <a href="/home" className="btn">Go Home</a>
    </div>
  );
}

export default ErrorPage;
