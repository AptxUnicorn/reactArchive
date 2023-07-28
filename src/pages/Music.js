import React from 'react';
import Body from "../components/Body"

const Music = () => {

    const page = { ltext: " Ford", rtext: " mustang" }

    return (
        <div>
            <Body props={page} />
        </div>
    );
};

export default Music;