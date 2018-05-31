import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';
import withAuth from '../auth/WithAuth';
import SideTop from './SideTop';
const Auth = new AuthService();

class UserProfile extends Component{
    handleLogout() {
        Auth.logout()
        this.props.history.replace('/login');
    }
    render(){
        return(
            <div className="main-wrapper">
				<div className="breadcrumb-wrapper">
				
					<div className="container">
					
						<ol className="breadcrumb-list booking-step">
							<li><Link to={'/'}>Home</Link></li>
							<li><span>User Profile</span></li>
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
											<li className="active">
												<Link to={'/user/profile'}><i className="fa fa-user"></i> Profile</Link>
											</li>
											<li>
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
										
											<h2>Profile</h2>
											<p>Enquire explain another he in brandon enjoyed be service.</p>
											
										</div>
										
										<form className="post-form-wrapper">
												<div className="row gap-20">
													<div className="col-sm-6 col-md-4">
														<div className="form-group bootstrap-fileinput-style-01">
															<label>Photo</label>
															<input type="file" name="form-register-photo" id="form-register-photo"/>
															<span className="font12 font-italic">** photo must not bigger than 250kb</span>
														</div>
													</div>
													<div className="clear"></div>
													<div className="col-sm-6 col-md-4">
														<div className="form-group">
															<label>First Name</label>
															<input type="text" className="form-control" defaultValue="Christine"/>
														</div>
													</div>
													<div className="col-sm-6 col-md-4">
														<div className="form-group">
															<label>Last Name</label>
															<input type="text" className="form-control" defaultValue="Gateau"/>
														</div>
													</div>
													<div className="clear"></div>
													<div className="col-sm-6 col-md-4">
														<div className="form-group">
															<label>Born</label>
															<div className="row gap-5">
																<div className="col-xs-3 col-sm-3">
																	<select className="selectpicker form-control" data-live-search="false">
																		<option defaultValue="0">day</option>
																		<option defaultValue="1">01</option>
																		<option defaultValue="2">02</option>
																		<option defaultValue="3">03</option>
																	</select>
																</div>
																<div className="col-xs-5 col-sm-5">
																	<select className="selectpicker form-control" data-live-search="false">
																		<option defaultValue="0">month</option>
																		<option defaultValue="1">Jan</option>
																		<option defaultValue="2">Feb</option>
																		<option defaultValue="3">Mar</option>
																	</select>
																</div>
																<div className="col-xs-4 col-sm-4">
																	<select className="selectpicker form-control" data-live-search="false">
																		<option defaultValue="0">year</option>
																		<option defaultValue="1">1985</option>
																		<option defaultValue="2">1986</option>
																		<option defaultValue="3">1987</option>
																	</select>
																</div>
															</div>
														</div>
														
													</div>
													<div className="col-sm-6 col-md-4">
														<div className="form-group">
															<label>Email</label>
															<input type="email" className="form-control" defaultValue="myemail@gmail.com"/>
														</div>
													</div>
													<div className="clear"></div>
													<div className="form-group">
														<div className="col-sm-12">
															<label>Education</label>
														</div>
														<div className="col-sm-6 col-md-4">
															<select className="selectpicker show-tick form-control mb-15" data-live-search="false">
																<option defaultValue="0">Select</option>
																<option defaultValue="1">Diploma</option>
																<option defaultValue="2">Bachelor</option>
																<option defaultValue="3">Master</option>
																<option defaultValue="4">Doctoral </option>
																<option defaultValue="5">Certificate</option>
															</select>
														</div>
														<div className="col-sm-6 col-md-4">
															<input type="text" className="form-control mb-15" defaultValue="Engineering"/>
														</div>
													</div>
													<div className="clear"></div>
													<div className="col-sm-6 col-md-4">
														<div className="form-group">
															<label>Address</label>
															<input type="text" className="form-control" defaultValue="254"/>
														</div>
													</div>
													<div className="col-sm-6 col-md-4">
														<div className="form-group">
															<label>City/town</label>
															<input type="text" className="form-control" defaultValue="Somewhere "/>
														</div>
													</div>
													<div className="clear"></div>
													<div className="col-sm-6 col-md-4">
														<div className="form-group">
															<label>Province/State</label>
															<input type="text" className="form-control" defaultValue="Paris"/>
														</div>
													</div>
													<div className="col-sm-6 col-md-4">
														<div className="form-group">
															<label>Street</label>
															<input type="text" className="form-control" defaultValue="Somewhere "/>
														</div>
													</div>
													<div className="clear"></div>
													<div className="col-sm-6 col-md-4">
														<div className="form-group">
															<label>Zip Code</label>
															<input type="text" className="form-control" defaultValue="35214"/>
														</div>
													</div>
													<div className="col-sm-6 col-md-4">
														<div className="form-group">
															<label>Country</label>
															<select className="selectpicker show-tick form-control" data-live-search="false">
																<option defaultValue="0">Select</option>
																<option defaultValue="1">Thailand</option>
																<option defaultValue="2">France</option>
																<option defaultValue="3">China</option>
																<option defaultValue="4">Malaysia </option>
																<option defaultValue="5">Italy</option>
															</select>
														</div>
													</div>
													<div className="clear"></div>
													<div className="col-sm-6 col-md-4">
														<div className="form-group">
															<label>Phone Number</label>
															<input type="text" className="form-control" defaultValue="+66-85-221-5489"/>
														</div>
													</div>
													<div className="clear"></div>
													<div className="col-sm-12 col-md-12">
													
														<div className="form-group bootstrap3-wysihtml5-wrapper">
															<label>About me</label>
															<textarea className="bootstrap3-wysihtml5 form-control" placeholder="Enter text ..." style={{height: '200px'}}></textarea>
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

export default withAuth(UserProfile);