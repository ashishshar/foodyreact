import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const SideTop = () => {
    return (
        <div>
            <div className="admin-user-item">
                <div className="image">
                    <img src={require("../../assets/images/man/01.jpg")} alt="image" className="img-circle" style={{borderRadius:'50%'}} />
                </div>
                <h4>John Doe</h4>
                <p className="user-role">Foodies</p>
            </div>
            <div className="admin-user-action text-center">
                <a href="#" className="btn btn-primary btn-sm">Edit</a>
                <a href="#" className="btn btn-primary btn-sm btn-inverse">Deactivate</a>
            </div>
        </div>
    );
}
export default SideTop;