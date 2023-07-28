import React from 'react';
import Body from "../components/Body"

const HomePage = () => {

    const page = { ltext: " Welcome on Homepage", rtext: " mustang" }

    return (
        <div>
            <Body props={page} />
        </div>
    );
};

export default HomePage;