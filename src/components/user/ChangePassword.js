import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import {Tab, Row, Col, Nav, NavItem}  from 'react-bootstrap';
import AuthService from '../auth/AuthService';
import withAuth from '../auth/WithAuth';
import SideTop from './SideTop';
const Auth = new AuthService();

class ChangePassword extends Component {
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
                            <li><span>Change Password</span></li>
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
                                            <li className="active">
                                                <Link to={'/user/changepassword'}><i className="fa fa-key"></i> Change Password</Link>
                                            </li>
                                            <li>
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
                                            <h2>Change Password</h2>
                                            <p>Change your password.</p>
                                        </div>
                                        <form className="post-form-wrapper">
                                            <div className="row gap-20">
                                                <div className="col-sm-6 col-md-4">
                                                    <div className="form-group">
                                                        <label>Current Password</label>
                                                        <input type="password" className="form-control" placeholder="Current Password" />
                                                    </div>
                                                </div>
                                                <div className="clear"></div>
                                                <div className="col-sm-6 col-md-4">
                                                    <div className="form-group">
                                                        <label>New Password</label>
                                                        <input type="password" className="form-control" placeholder="New Password" />
                                                    </div>
                                                </div>
                                                <div className="clear"></div>
                                                <div className="col-sm-6 col-md-4">
                                                    <div className="form-group">
                                                        <label>Confirm Password</label>
                                                        <input type="password" className="form-control" placeholder="Confirm Password" />
                                                    </div>
                                                </div>
                                                <div className="clear"></div>
                                                <div className="col-sm-12 mt-10">
                                                    <a href="#" className="btn btn-primary">Save</a>
                                                    <a href="#" className="btn btn-primary btn-inverse">Cancel</a>
                                                </div>
                                            </div>
                                        </form>
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
export default withAuth(ChangePassword);