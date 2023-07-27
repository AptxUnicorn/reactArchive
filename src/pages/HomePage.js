import React from 'react';
import Navigation from "../components/Navigation"

const HomePage = () => {
    return (
        <div>
            <div className='container'>
                <div className='header'></div>
                <Navigation />
                <div className='flex'>
                    <div className='main'>
                        <p>LOVE YOU FUCKING ALL </p>
                        <h1>Nah, justkidding</h1>
                    </div>
                    <aside id='rightSidebar'><p>right</p></aside>
                    <aside id='leftSidebar'><p>left</p></aside>
                </div>
            </div>
        </div>
    );
};

export default HomePage;