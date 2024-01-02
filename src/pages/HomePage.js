import React from 'react';
import Body from "../components/Body"

const HomePage = () => {


    const page = { lcontent: "cette page", rcontent: " mustang", maincontent: "EHEHEHEH" }

    return (
        <div>
            <Body props={page} />
        </div>
    );
};

export default HomePage;