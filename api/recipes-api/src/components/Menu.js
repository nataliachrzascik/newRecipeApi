import { render } from '@testing-library/react';
import React from 'react';
import './css/menu.css';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    return (
        <nav className="navbar p-5 d-flex justify-content-center">
            <div className="navbar-nav p-1">

                <div className="nav-item ">
                    <Link to='/'>
                        <div className="nav-link">Główna</div>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to='/sweets'>
                        <div className="nav-link">Słodkości</div>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to='/main'>
                        <div className="nav-link">Dania główne</div>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to='/soups'>
                        <div className="nav-link">Zupy</div>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to='/cocktails'>
                        <div className="nav-link">Koktajle</div>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to='/add'>
                        <div className="nav-link">Dodaj własny</div>
                    </Link>
                </div>


            </div>
        </nav>
    );
}
export default Menu;