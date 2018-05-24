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
            <div className="main-wrapper">
			<div className="breadcrumb-wrapper">
			
				<div className="container">
				
					<ol className="breadcrumb-list booking-step">
						<li><a href="#">Home</a></li>
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
										
									<div className="admin-user-item">
										
										<div className="image">
											<img src={require("../../assets/images/man/01.jpg")} alt="image" className="img-circle" />
										</div>

										<h4>John Doe</h4>
										<p className="user-role">Foodies</p>
										
									</div>
									
									<div className="admin-user-action text-center">

										<a href="#" className="btn btn-primary btn-sm">Edit</a>
										<a href="#" className="btn btn-primary btn-sm btn-inverse">Deactivate</a>
										
									</div>
									
									<ul className="admin-user-menu clearfix">
										<li>
											<a href="#"><i className="fa fa-tachometer"></i> Dashboard</a>
										</li>
										<li className="active">
											<a href="#"><i className="fa fa-user"></i> Profile</a>
										</li>
										<li>
											<a href="#"><i className="fa fa-key"></i> Change Password</a>
										</li>
										<li>
											<a href="#"><i className="fa fa-bookmark"></i> Favourite Restaurant</a>
										</li>
										<li>
											<a href="#"><i className="fa fa-sign-out"></i> Logout</a>
										</li>
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
														<input type="text" className="form-control" value="Christine"/>
													</div>
													
												</div>
												
												<div className="col-sm-6 col-md-4">
												
													<div className="form-group">
														<label>Last Name</label>
														<input type="text" className="form-control" value="Gateau"/>
													</div>
													
												</div>
												
												<div className="clear"></div>
												
												<div className="col-sm-6 col-md-4">
												
													<div className="form-group">
														<label>Born</label>
														<div className="row gap-5">
															<div className="col-xs-3 col-sm-3">
																<select className="selectpicker form-control" data-live-search="false">
																	<option value="0">day</option>
																	<option value="1">01</option>
																	<option value="2" selected>02</option>
																	<option value="3">03</option>
																</select>
															</div>
															<div className="col-xs-5 col-sm-5">
																<select className="selectpicker form-control" data-live-search="false">
																	<option value="0">month</option>
																	<option value="1">Jan</option>
																	<option value="2" selected>Feb</option>
																	<option value="3">Mar</option>
																</select>
															</div>
															<div className="col-xs-4 col-sm-4">
																<select className="selectpicker form-control" data-live-search="false">
																	<option value="0">year</option>
																	<option value="1">1985</option>
																	<option value="2" selected>1986</option>
																	<option value="3">1987</option>
																</select>
															</div>
														</div>
													</div>
													
												</div>
												
												<div className="col-sm-6 col-md-4">
												
													<div className="form-group">
														<label>Email</label>
														<input type="email" className="form-control" value="myemail@gmail.com"/>
													</div>
													
												</div>
												
												<div className="clear"></div>

												<div className="form-group">
												
													<div className="col-sm-12">
														<label>Education</label>
													</div>
													
													<div className="col-sm-6 col-md-4">
														<select className="selectpicker show-tick form-control mb-15" data-live-search="false">
															<option value="0">Select</option>
															<option value="1">Diploma</option>
															<option value="2" selected>Bachelor</option>
															<option value="3">Master</option>
															<option value="4">Doctoral </option>
															<option value="5">Certificate</option>
														</select>
													</div>
													
													<div className="col-sm-6 col-md-4">
														<input type="text" className="form-control mb-15" value="Engineering"/>
													</div>
														
												</div>
												
												<div className="clear"></div>
												
												<div className="col-sm-6 col-md-4">
												
													<div className="form-group">
														<label>Address</label>
														<input type="text" className="form-control" value="254"/>
													</div>
													
												</div>
												
												<div className="col-sm-6 col-md-4">
												
													<div className="form-group">
														<label>City/town</label>
														<input type="text" className="form-control" value="Somewhere "/>
													</div>
													
												</div>
												
												<div className="clear"></div>
												
												<div className="col-sm-6 col-md-4">
												
													<div className="form-group">
														<label>Province/State</label>
														<input type="text" className="form-control" value="Paris"/>
													</div>
													
												</div>
												
												<div className="col-sm-6 col-md-4">
												
													<div className="form-group">
														<label>Street</label>
														<input type="text" className="form-control" value="Somewhere "/>
													</div>
													
												</div>

												<div className="clear"></div>
												
												<div className="col-sm-6 col-md-4">
												
													<div className="form-group">
														<label>Zip Code</label>
														<input type="text" className="form-control" value="35214"/>
													</div>
													
												</div>
												
												<div className="col-sm-6 col-md-4">
												
													<div className="form-group">
														<label>Country</label>
														<select className="selectpicker show-tick form-control" data-live-search="false">
															<option value="0">Select</option>
															<option value="1">Thailand</option>
															<option value="2" selected>France</option>
															<option value="3">China</option>
															<option value="4">Malaysia </option>
															<option value="5">Italy</option>
														</select>
													</div>
													
												</div>

												<div className="clear"></div>
												
												<div className="col-sm-6 col-md-4">
												
													<div className="form-group">
														<label>Phone Number</label>
														<input type="text" className="form-control" value="+66-85-221-5489"/>
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