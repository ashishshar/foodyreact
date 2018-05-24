import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';
class Register extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();

    }
    componentWillMount() {
        if (this.Auth.loggedIn())
            this.props.history.replace('/');
    }
    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    handleFormSubmit(e) {
        e.preventDefault();
        this.Auth.register(this.state)
            .then(res => {
                window.location.reload();
                this.props.history.replace('/profile');

            })
            .catch(err => {
                alert(err);
            })
    }
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
                                                <form className="form" role="form" onSubmit={this.handleFormSubmit}>
                                                    <div className="form-group">
                                                        <label className="control-label">Email</label>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            placeholder="Enter Email" 
                                                            name="email"
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="control-label">Password</label>
                                                        <input 
                                                            type="password" 
                                                            className="form-control" 
                                                            placeholder="Enter Password"
                                                            name="password"
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="control-label">Confirm Password</label>
                                                        <input 
                                                            type="password" 
                                                            className="form-control" 
                                                            name="confirm"
                                                            placeholder="Re-type password again"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input 
                                                                    type="checkbox" 
                                                                    name="trms"
                                                                    onChange={this.handleChange}
                                                                /> By register, I read & accept  <a href="#">the terms</a>
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