import React from 'react';
import '../styles/ExploreResources.css';

const ExploreResources = () => {
    const resources = [
        {
            name: "NASA Climate Change and Global Warming",
            url: "https://climate.nasa.gov/",
            description: "Reliable data and insights on climate change from NASA."
        },
        {
            name: "United Nations Climate Action",
            url: "https://www.un.org/en/climatechange",
            description: "UN's initiatives and actions against climate change."
        },
        {
            name: "Environmental Defense Fund",
            url: "https://www.edf.org/climate",
            description: "Solutions for climate change focusing on policy, science, and economics."
        },
        {
            name: "World Resources Institute (WRI)",
            url: "https://www.wri.org/climate",
            description: "Research and solutions to create a more sustainable world."
        },
        {
            name: "Project Drawdown",
            url: "https://www.drawdown.org/",
            description: "Comprehensive plan for reducing greenhouse gases."
        },
        {
            name: "Climate Reality Project",
            url: "https://www.climaterealityproject.org/",
            description: "Resources to educate and empower people to fight climate change."
        },
        {
            name: "Natural Resources Defense Council (NRDC)",
            url: "https://www.nrdc.org/issues/climate-change",
            description: "Information and action steps to tackle the climate crisis."
        },
        {
            name: "Global Footprint Network",
            url: "https://www.footprintnetwork.org/",
            description: "Insights into human demand vs. Earth's ecological resources."
        },
        {
            name: "350.org",
            url: "https://350.org/",
            description: "A global grassroots movement to end fossil fuel use and transition to renewable energy."
        },
        {
            name: "BBC Climate Change Guide",
            url: "https://www.bbc.com/future/article/20200105-how-to-stop-climate-change-what-you-can-do",
            description: "A practical guide on individual and collective steps to combat climate change."
        }
    ];

    return (
        <div className="explore-resources">
            <h1>Explore Resources</h1>
            <p>Discover websites offering valuable insights on climate change and how to prevent it. Click on the links below to learn more.</p>
            <ul>
                {resources.map((resource, index) => (
                    <li key={index} className="resource-item">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            <strong>{resource.name}</strong>
                        </a>
                        <p>{resource.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExploreResources;

