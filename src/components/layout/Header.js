import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthService from '../auth/AuthService';
import withAuth from '../auth/WithAuth';
const Auth = new AuthService();
class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            userlogin : false 
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.Auth = new AuthService();
    }
    componentWillMount(){
        this.setState({
            userlogin: this.props.loginCheck
        });
    }
    handleLogout() {
        Auth.logout();
        window.location.reload();
    }
    render(){
        if (this.state.userlogin) {
            return (
                <header id="header" style={{ background: '#000' }}>
                    <nav className="navbar navbar-default navbar-sticky-function" style={{paddingTop: '10px', paddingBottom: '10px', background: 'rgba(0, 0, 0, 0.3)' }}>
                        <div className="container">
                            <div className="logo-wrapper">
                                <div className="logo">
                                    <Link to={`/`}><img src={require("../../assets/images/logo.png")} alt="Logo" /></Link>
                                </div>
                            </div>
                            <div className="nav-mini-wrapper">
                                <ul className="nav-mini sign-in">
                                    <li>
                                        <Link className="btn" to={'/user/dashboard'}>Account</Link>
                                    </li>
                                    <li>
                                        <Link className="btn" to={'/'} onClick={this.handleLogout}>Logout</Link>
                                        </li>
                                </ul>
                            </div>
                        </div>
                        <div id="slicknav-mobile"></div>
                    </nav>
                </header>
            );
        } else {
            return (
                <header id="header" style={{ background: '#000' }}>
                    <nav className="navbar navbar-default navbar-sticky-function" style={{ paddingTop: '10px', paddingBottom: '10px', background: 'rgba(0, 0, 0, 0.3)' }}>
                        <div className="container">
                            <div className="logo-wrapper">
                                <div className="logo">
                                    <Link to={`/`}><img src={require("../../assets/images/logo.png")} alt="Logo" /></Link>
                                </div>
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
       
    }    
} 

export default Header;