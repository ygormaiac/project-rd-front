import React from 'react';

export default function LaunchCard({ launch }) {

    return (
        <div className='launch-card'>
            <div className='launch-card-img'>
                <img src={launch.links.patch.small} alt={launch.name} />
            </div>
            <div className="launch-card-content">
            <h3>{launch.name}</h3>
            <span>{launch.date_utc}</span>
            </div>
        </div>
    )
}