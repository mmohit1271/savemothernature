import React from 'react';
import '../styles/TakeAction.css';

const TakeAction = () => {
    return (
        <div className="take-action">
            <h1>Take Action Against Climate Change</h1>
            <p>There are many actions you can take today to help fight climate change and reduce your carbon footprint:</p>
            <ul>
                <li>Switch to renewable energy sources (e.g., solar, wind).</li>
                <li>Use energy-efficient appliances and reduce energy consumption.</li>
                <li>Support policies and politicians advocating for climate change action.</li>
                <li>Plant trees and support reforestation initiatives.</li>
            </ul>
            <h2>Be the Change</h2>
            <p>Start by taking small steps in your daily life. Every action counts!</p>
            <a href="/explore-resources" className="btn">Explore More Actions</a>
        </div>
    );
};

export default TakeAction;

