import React from 'react';
import Navigation from "../components/Navigation"

const Music = () => {
    return (
        <div>
            <div className='container'>
                <div className='header'></div>
                <Navigation />
                <div className='flex'>
                    <div className='main'>
                        <h1>here will be a music player (if only i manage to get it)</h1>
                    </div>
                    <aside id='rightSidebar'><p>right</p></aside>
                    <aside id='leftSidebar'><p>left</p></aside>
                </div>
            </div>
        </div>
    );
};

export default Music;