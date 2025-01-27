import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Save Mother Nature</h1>
            <p>Join us in our mission to protect and preserve the planet for future generations.</p>
            <div className="cta">
                <h2>What Can You Do?</h2>
                <p>Explore resources, get involved, and take action now to help save mother nature!</p>
                <a href="/get-involved" className="btn">Get Involved</a>
	        <br/>
                <a href="/explore-resources" className="btn">Explore Resources</a>
            </div>
        </div>
    );
};

export default Home;

