import React from 'react';
import Body from "../components/Body"
import RightSideBarContent from '../components/RightSideBarContent';

const HomePage = () => {


    const page = { lcontent: <RightSideBarContent />, rcontent: " mustang", maincontent: "EHEHEHEH" }

    return (
        <div>
            <Body props={page} />
        </div>
    );
};

export default HomePage;