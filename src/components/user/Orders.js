import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';
import withAuth from '../auth/WithAuth';
const Auth = new AuthService();

class Orders extends Component {
    handleLogout() {
        Auth.logout()
        this.props.history.replace('/login');
    }
    render() {
        return (
            <div>See All Orders</div>
        );
    }
}

export default withAuth(Orders);