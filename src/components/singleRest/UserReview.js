import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import AuthService from '../auth/AuthService';
import withAuth from '../auth/WithAuth';
const Auth = new AuthService();
class UserReview extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.changeHandle = this.changeHandle.bind(this);
    }
    changeHandle(value){
        console.log(value);
    }
    render(){
        return(
            <div>
                <Rating
                    {...this.props} 
                    initialRating={this.state.value} 
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                    onChange={this.changeHandle}
                />
            </div>
        );
    }
}

export default withAuth(UserReview);