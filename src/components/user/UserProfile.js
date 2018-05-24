import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';
import withAuth from '../auth/WithAuth';
const Auth = new AuthService();

class UserProfile extends Component{
    handleLogout() {
        Auth.logout()
        this.props.history.replace('/login');
    }
    render(){
        return(
            <div className="App">
                <div className="App-header">
                    <h2>Welcome {this.props.user.username}</h2>
                </div>
                <p className="App-intro">
                    <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
                </p>
            </div>
        );
    }
}

export default withAuth(UserProfile);