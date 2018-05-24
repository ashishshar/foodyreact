import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';
import withAuth from '../auth/WithAuth';
const Auth = new AuthService();

class EditProfile extends Component {
    handleLogout() {
        Auth.logout()
        this.props.history.replace('/login');
    }
    render() {
        return (
            <div>Edit Your Profile</div>
        );
    }
}

export default withAuth(EditProfile);