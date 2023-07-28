import React from 'react';
import Body from "../components/Body";

const About = () => {

    const page = { ltext: " Ceci est un text sur la page ABOUT", rtext: " Prononcer : ABOUTE" }

    return (
        <div>
            <Body props={page} />
        </div >
    );
};

export default About;