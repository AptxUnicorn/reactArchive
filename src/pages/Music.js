import React from 'react';
import Body from "../components/Body";

const Music = () => {

    const page = { lcontent: "ford", rcontent: "nice", maincontent: "woah" }

    return (
        <div>
            <Body props={page} />
        </div>
    );
};

export default Music;