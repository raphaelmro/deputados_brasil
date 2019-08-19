import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <div className="title is-4 header-is-white">DEPUTADOS DO BRASIL</div>
                </div>
            </div>
        </nav>
    );
}

export default Header