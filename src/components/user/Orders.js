import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';
import withAuth from '../auth/WithAuth';
import SideTop from './SideTop';
const Auth = new AuthService();

class Orders extends Component {
    handleLogout() {
        Auth.logout()
        this.props.history.replace('/login');
    }
    render() {
        return (
            <div className="main-wrapper">
                <div className="breadcrumb-wrapper">

                    <div className="container">
                        <ol className="breadcrumb-list booking-step">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><span>My Orders</span></li>
                        </ol>
                    </div>

                </div>
                <div className="admin-container-wrapper">
                    <div className="container">
                        <div className="GridLex-gap-15-wrappper">
                            <div className="GridLex-grid-noGutter-equalHeight">
                                <div className="GridLex-col-3_sm-4_xs-12">
                                    <div className="admin-sidebar">
                                        <SideTop/>
                                        <ul className="admin-user-menu clearfix">
                                            <li>
                                                <Link to={'/user/dashboard'}><i className="fa fa-tachometer"></i> Dashboard</Link>
                                            </li>
                                            <li>
                                                <Link to={'/user/profile'}><i className="fa fa-user"></i> Profile</Link>
                                            </li>
                                            <li>
                                                <Link to={'/user/changepassword'}><i className="fa fa-key"></i> Change Password</Link>
                                            </li>
                                            <li className="active">
                                                <Link to={'/user/orders'}><i className="fa fa-bookmark"></i> Order</Link>
                                            </li>
                                            {/* <li>
												<Link to={'/dashboard'}><i className="fa fa-sign-out"></i> Logout</Link>
											</li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="GridLex-col-9_sm-8_xs-12">
                                    <div className="admin-content-wrapper">
                                        <div className="admin-section-title">
                                            <h2>My Orders</h2>
                                            <p>Welcome to fullka</p>
                                        </div>
                                        <div>
                                            Order List
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withAuth(Orders);