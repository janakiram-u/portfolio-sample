import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css'; // Make sure to import your CSS file

export function Home() {
  return (

       <section id="home" className="d-flex flex-column justify-content-center align-items-center">
      <div className="container hero-container">
        <h1>U JANAKIRAM</h1>
        <p>I'm <span className="typed">Developer |</span></p>
      </div>
    </section>
    
  )
}


