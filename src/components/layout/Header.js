import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id="header" style={{ background: '#000' }}>
            <nav className="navbar navbar-default navbar-sticky-function" style={{ borderBottom: '1px solid #696969', paddingTop: '10px', paddingBottom: '10px', background: 'rgba(0, 0, 0, 0.3)' }}>
                <div className="container">
                    <div className="logo-wrapper">
                        <div className="logo">
                            <Link to={`/`}><img src={require("../../assets/images/logo.png")} alt="Logo" /></Link>
                        </div>
                    </div>
                    <div id="navbar" className="navbar-arrow">
                        <ul className="nav navbar-nav navbar-text" id="responsive-menu">
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Restaurant</a>
                            </li>
                            <li>
                                <a>Order</a>
                            </li>
                            <li>
                                <a>Blog</a>
                            </li>
                            <li>
                                <a>Page</a>
                            </li>
                        </ul>
                    </div>
					<div className="nav-mini-wrapper">
                        <ul className="nav-mini sign-in">
                            <li><Link to={`/login`}>Login</Link></li>
                            <li><Link to={`/register`}>Register</Link></li>
                        </ul>
                    </div>
                </div>
                <div id="slicknav-mobile"></div>
            </nav>
		</header>
    );
} 

export default Header;