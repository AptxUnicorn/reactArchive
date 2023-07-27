import React from 'react';
import Body from "../components/Body";

const About = () => {

    return (
        <div>
            <div className='container'>
                <Body />
                <div className='flex'>
                    <div className='main'>
                        <p>WIP but will never be working !!! </p>
                    </div>
                    <aside id='rightSidebar'>
                        <p>right</p>
                    </aside>
                    <aside id='leftSidebar'>
                        <p>left</p>
                    </aside>
                </div>
            </div>
        </div >
    );
};

export default About;