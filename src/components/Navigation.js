import React from 'react';
import { NavLink } from 'react-router-dom';

const navigation = () => {
    return (
        <div>
            <div className="navbar">
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>About</li>
                    </NavLink>
                    <NavLink to="/music" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Music</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};


export default navigation;