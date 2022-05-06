import React from 'react';
import { conclusion } from '../../data/about-us.json';

const AboutConclusion = () => {
    return (
        <div className='section conclusion-section'>
            <div className="container conclusion-content">
                <div className='conclusion'><span>{conclusion}</span></div>
            </div>
        </div>
    )
}

export default AboutConclusion