import React from 'react';
import Body from "../components/Body"
import ThemeSelector from '../components/ThemeSelector';

const HomePage = () => {


    const page = { lcontent: <ThemeSelector />, rcontent: " mustang", maincontent: "EHEHEHEH" }

    return (
        <div>
            <Body props={page} />
        </div>
    );
};

export default HomePage;