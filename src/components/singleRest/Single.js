import React, {
    Component
} from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';
import withAuth from '../auth/WithAuth';
import UserReview from './UserReview';
const Auth = new AuthService();
const imgUrl = require("../../assets/images/top.jpg");
const heroStyle = {
	backgroundImage: 'url(' + imgUrl + ')'
};

const API = 'http://localhost:8080/restaurant/';

class Single extends Component{
    constructor(props) {
        super(props);
        this.state = {
			searchResult: '',
			userlogin: false
		};
		this.checkReview = this.checkReview.bind(this);
		this.Auth = new AuthService();
    }
    componentWillMount() {
        const url = API + this.props.match.params.id;
        const parent = this;
        fetch(url)
            .then(response => response.json())
            .then(function (result) {
                console.log(result);
                parent.setState({ searchResult: result.data})
			}); 
		if (parent.Auth.loggedIn()) {
			parent.setState({ userlogin: true });
		} else {
			parent.setState({ userlogin: false });
		}  
	}
	checkReview(){
		if (this.state.userlogin){
			return (
				<div>
					<h3>Add Rating</h3>
					<UserReview />
				</div>
				
			);
		}else{
			return "";
		}
	}
    render(){
        const {searchResult} = this.state;
        console.log(searchResult);
        return(
            <div className="main-wrapper">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <ol className="breadcrumb-list booking-step">
                            <li><a>Home</a></li>
                            <li><span>{searchResult.rs_name}</span></li>
                        </ol>
                    </div>
                </div>
			    <div className="section sm">
			        <div className="container">
					    <div className="row">
							<div className="col-sm-6 col-md-8">
								<div className="restaurant-detail-wrapper">
									<div className="restaurant-detail-header bb mb-30">
										<div style={{marginBottom: '10px'}}>
											<img src={require("../../assets/images/top.jpg")} style={{height:'360px', width:'100%'}}/>
										</div>
                                        <h2 className="heading mb-15">{searchResult.rs_name}</h2>
										<div className="meta-div clearfix mb-25">
                                            <span>Cusine <a>{searchResult.rs_city}</a> </span>
											<span className="res-btn label label-success">{searchResult.rs_restType}</span>
										</div>
									</div>
									<div className="restaurant-detail-content mt-30 clearfix">
										{this.checkReview()}
										<h3>Overview</h3>
										<div className="row" style={{ marginBottom: '20px' }}>
											<div className="col-sm-6 col-md-4">
												<strong>Phone Numbers</strong><br />
												<span style={{ color: 'blue'}}>{searchResult.rs_phone}</span>
											</div>
											<div className="col-sm-6 col-md-4">
												<strong>Opening Hours ({searchResult.rs_openStatus})</strong><br />
												<span style={{ color: 'red' }}>{searchResult.rs_openHours}</span>
											</div>
											<div className="col-sm-6 col-md-4">
												<strong>Seating</strong><br />
												<span style={{ color: 'blue'}}>{searchResult.rs_seating} People</span>
												
											</div>
										</div>
										<div className="row" style={{ marginBottom: '20px' }}>
											<div className="col-sm-6 col-md-4">
												<strong>Cuisines</strong><br />
												<span style={{ color: 'green'}}>{searchResult.rs_cuisines}</span>
											</div>
											<div className="col-sm-6 col-md-4">
												<strong>Average Cost</strong><br />
												<span style={{ color: 'red' }}>&#8377; {searchResult.rs_averageCost} for two persons</span>
											</div>
											<div className="col-sm-6 col-md-4">
												<strong>Alcohol</strong><br />
												<span style={{ color: 'red' }}>{searchResult.rs_alcohol}</span>
											</div>
										</div>
										<div className="row" style={{ marginBottom: '20px' }}>
											<div className="col-sm-6 col-md-6">
												<strong>Address</strong><br />
												<span>{searchResult.rs_address}</span>
											</div>
											<div className="col-sm-6 col-md-6">
												<strong>More Info</strong><br />
												<span>{searchResult.rs_services}</span>
											</div>
										</div>
									</div>
									<div className="join-our-team-wrapper">
										<button className="btn btn-primary btn-hidden btn-lg collapsed" data-toggle="collapse" data-target="#apply-job-toggle">Order Now</button>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-4">
								<h3>POPULAR</h3>
								<aside className="sidebar with-filter">
									<div className="sidebar-inner">
										<div className="sidebar-module">

											<div className="top-company-2-wrapper">

												<div className="GridLex-gap-10">

													<div className="GridLex-grid-noGutter-equalHeight">
														<div className="GridLex-col-12_sm-12_xs-6_xss-12">

															<div className="top-company-2">
																<a >

																	<div className="image">
																		<img src={require("../../assets/images/brands/08.png")} alt="image" />
																	</div>

																	<div className="content">
																		<h5 className="heading text-primary font700">Spice Delight</h5>
																		<p className="texting font600">Lorem ipsum dolor sit amet, consectetur and much more...</p>
																		<p className="mata-p clearfix"><span className="text-primary font700">&pound;15</span> <span className="font13">min order</span> <span className="pull-right icon"><i className="fa fa-long-arrow-right"></i></span></p>
																	</div>

																</a>

															</div>

														</div>

														<div className="GridLex-col-12_sm-12_xs-6_xss-12">

															<div className="top-company-2">
																<a >

																	<div className="image">
																		<img src={require("../../assets/images/brands/09.png")} alt="image" />
																	</div>

																	<div className="content">
																		<h5 className="heading text-primary font700">Fish Chips</h5>
																		<p className="texting font600">Lorem ipsum dolor sit amet, consectetur and much more...</p>
																		<p className="mata-p clearfix"><span className="text-primary font700">&pound;15</span> <span className="font13">min order</span> <span className="pull-right icon"><i className="fa fa-long-arrow-right"></i></span></p>
																	</div>

																</a>

															</div>

														</div>

														<div className="GridLex-col-12_sm-12_xs-6_xss-12">

															<div className="top-company-2">
																<a >
																	<div className="image">
																		<img src={require("../../assets/images/brands/05.png")} alt="image" />
																	</div>
																	<div className="content">
																		<h5 className="heading text-primary font700">Green Chilli</h5>
																		<p className="texting font600">Lorem ipsum dolor sit amet, consectetur and much more...</p>
																		<p className="mata-p clearfix"><span className="text-primary font700">&pound;15</span> <span className="font13">min order</span> <span className="pull-right icon"><i className="fa fa-long-arrow-right"></i></span></p>
																	</div>
																</a>
															</div>

														</div>

													</div>

												</div>

											</div>

										</div>
									</div>

								</aside>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
}
export default Single;