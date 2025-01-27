import React from 'react';
import '../styles/GetInvolved.css';

const GetInvolved = () => {
    return (
        <div className="get-involved">
            <h1>Get Involved</h1>
            <p>There are many ways you can help save our planet. Here are some ways to get involved:</p>
            <ul>
                <li>Volunteer with local environmental organizations.</li>
                <li>Join environmental protection campaigns and events.</li>
                <li>Spread awareness about climate change and sustainability.</li>
                <li>Reduce, reuse, and recycle in your daily life.</li>
            </ul>
            <h2>Become a Climate Advocate</h2>
            <p>Start by educating yourself and others about climate change. Together, we can make a big impact!</p>
            <a href="/donate" className="btn">Donate Now</a>
        </div>
    );
};

export default GetInvolved;

