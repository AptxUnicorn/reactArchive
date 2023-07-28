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
                        <p>WIP but will never be working !!! </p>
                    </div>
                    <aside id='rightSidebar' className='sidebar'>
                        <p>{props.rtext}</p>
                    </aside>
                    <aside id='leftSidebar' className='sidebar'>
                        <p>{props.ltext}</p>
                    </aside>
                </div>
            </div>
        </div >
    );
};

export default Body;