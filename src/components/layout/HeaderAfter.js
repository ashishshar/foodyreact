import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';
import withAuth from '../auth/WithAuth';
const Auth = new AuthService();
class HeaderAfter extends Component{
    constructor(props) {
        super(props);
        this.LogOutClick = this.LogOutClick.bind(this);
    }
    LogOutClick(){
        Auth.logout();
        //this.props.history.push('/login');
    }
    render(){
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
                                <li><button onClick={this.LogOutClick}>Login Out</button></li>
                            </ul>
                        </div>
                    </div>
                    <div id="slicknav-mobile"></div>
                </nav>
            </header>
        );
    }
} 

export default HeaderAfter;