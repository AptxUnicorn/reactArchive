import React from 'react';
import Navigation from "../components/Navigation";

const Body = ({ props }) => {


    console.log(props)

    return (
        <div>
            <div className='container'>
                <div className='header'></div>
                <Navigation />
                <div className='flex'>
                    <div className='main'>
                        {props.maincontent}
                    </div>
                    <aside id='rightSidebar' className='sidebar'>
                        {props.rcontent}
                    </aside>
                    <aside id='leftSidebar' className='sidebar'>
                        {props.lcontent}
                    </aside>
                </div>
            </div>
        </div >
    );
};

export default Body;