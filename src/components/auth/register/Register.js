import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <ol className="breadcrumb-list">
                            <li><a href="index-2.html">Home</a></li>
                            <li><span>Login</span></li>
                        </ol>
                    </div>

                </div>

                <div className="error-page-wrapper">

                    <div className="container">

                        <div className="row">

                            <div className="login-container">
                                <div className="login-container-content">
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="register-block">
                                            <div className="register-block-form">
                                                <h4>Create the New Account</h4>
                                                <div className="bor bg-orange"></div>
                                                <form className="form" role="form">
                                                    <div className="form-group">
                                                        <label className="control-label">Name</label>
                                                        <input type="text" className="form-control" placeholder="Enter Name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="control-label">Email</label>
                                                        <input type="text" className="form-control" placeholder="Enter Email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="control-label">Password</label>
                                                        <input type="password" className="form-control" placeholder="Enter Password" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="control-label">Confirm Password</label>
                                                        <input type="password" className="form-control" placeholder="Re-type password again" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="control-label">Your Country</label>
                                                        <select className="form-control" id="country">
                                                            <option>Select Your Country</option>
                                                            <option>India</option>
                                                            <option>USA</option>
                                                            <option>London</option>
                                                            <option>Canada</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" /> By register, I read & accept  <a href="#">the terms</a>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
														<button type="submit" className="btn btn-primary btn-inverse">Reset</button>
                                                    </div>
                                                </form>
                                            </div>
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

export default Register;