import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemeSelector = () => {

    const contextValue = useContext(ThemeContext)

    const handleChange = event => {
        const value = event.currentTarget.value;
        contextValue.updateTheme(value);
    };


    return (
        <center>
            <select className="" name="theme" defaultValue={contextValue.theme} onChange={handleChange}>
                <option value="dark"> Sombre </option>
                <option value="light"> Clair </option>
            </select>
        </center>
    );
};

export default ThemeSelector;
