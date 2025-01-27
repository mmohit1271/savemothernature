import React from 'react';
import '../styles/Learn.css';

const Learn = () => {
    return (
        <div className="learn">
            <h1>Learn About Climate Change</h1>
            <p>Understanding climate change is crucial in combating it. Here are some key topics you should explore:</p>
            <ul>
                <li>What is climate change and why is it happening?</li>
                <li>The effects of climate change on the environment and human health.</li>
                <li>How global warming contributes to rising sea levels and extreme weather events.</li>
                <li>What actions can we take to reduce emissions and slow down climate change?</li>
            </ul>
            <h2>Watch This Video</h2>
            <p>Watch a short documentary about the impact of climate change on wildlife and ecosystems.</p>
            <a href="https://www.youtube.com/watch?v=Vl6VhCAeEfQ" target="_blank" rel="noopener noreferrer" className="btn">Watch Video</a>
        </div>
    );
};

export default Learn;

