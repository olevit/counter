import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'
const Header = () => {
    return (
        <header className="header row">
            <ul className="d-flex">
                <li>
                    <Link to="/">
                        <div className="logo text-dark">First</div>
                    </Link>
                </li>
                <li>
                    <Link to="/second">
                        <div className="logo text-dark">Second</div>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;