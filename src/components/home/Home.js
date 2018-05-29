import React, { Component } from 'react';

const imgUrl = require("../../assets/images/top.jpg");
const heroStyle = {
	backgroundImage: 'url(' + imgUrl + ')'
};
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { restaurant: '', place:'' };

		this.handlePlaceChange = this.handlePlaceChange.bind(this);
		this.handleRestaurantChange = this.handleRestaurantChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handlePlaceChange(event) {
		this.setState({ place: event.target.value });
		console.log(this.state);
	}
	handleRestaurantChange(event) {
		this.setState({ restaurant: event.target.value });
		console.log(this.state);
	}
	handleSubmit(event) {
		const place = 'test';
		const restu = this.state.restaurant;
		//alert('A name was submitted: ' + this.state.place);
		event.preventDefault();
		this.props.history.push('/search/' + place + '/' + restu);
	}
	render(){
		return(
			<div className="main-wrapper">
				<div className="hero" style={heroStyle}>
					<div className="container">
						<h1>Fullka</h1>
						
						<p>Find amazing selection of local restaurant delivering food to your door</p>
						<div className="main-search-form-wrapper">
							<form onSubmit={this.handleSubmit}>
								<div className="form-holder">
									<div className="row gap-0">	
										<div className="col-xss-6 col-xs-6 col-sm-6">
											<input className="form-control" placeholder="e.g. SW6 6LG / SW6 / London" value="" onChange={this.handlePlaceChange} readOnly/>
										</div>
										<div className="col-xss-6 col-xs-6 col-sm-6">
											<input className="form-control" placeholder="Find a restaurant" onChange={this.handleRestaurantChange} />
										</div>
									</div>
								</div>
								<div className="btn-holder">
									<button className="btn"><i className="fa fa-search"></i></button>
								</div>
							</form>
						</div>
					</div>
				</div>
				{/* <div className="post-hero">
					<div className="container">
						<div className="row">
							<div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
								<div className="ticker-wrapper">
									<div className="latest-job-ticker ticker-inner">
										<ul className="ticker-list">
											<li>
												<a >
													<span className="labeling">Get Offer</span>
													Free Bottle Of Beer - <span className="font-italic">Only available through our online ordering system - Bayleaf Restauant</span>
												</a>
											</li>
											<li>
												<a >
													<span className="labeling">Get Offer</span>
													10% Discount - <span className="font-italic">Breast of chicken tikka grilled. - Rainbow Restauant</span>
												</a>
											</li>

										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="order-process-step bg-light pt-80 pb-80">
					<div className="container frontend">
						<div className="clearfix"></div>
						<div className="block process-block">
							<h2>The process</h2>
								<h5>4 Steps for Success</h5>
							<div className="row text-center">
								<ol className="process">
									<li className="col-md-3 col-sm-6 col-xs-6"><i className="fa fa-cutlery" aria-hidden="true"></i>
										<h4>Pick a restaurant</h4>
									</li>
									<li className="col-md-3 col-sm-6 col-xs-6"> <i className="fa fa-car"></i>
										<h4>Order a takeaway</h4>
									</li>
									<li className="col-md-3 col-sm-6 col-xs-6"> <i className="fa fa-beer"></i>
										<h4>Your food is delivered</h4>
									</li>
									<li className="col-md-3 col-sm-6 col-xs-6"> <i className="fa fa-thumbs-o-up"></i>
										<h4>Happy, enjoy</h4>
									</li>
								</ol>
							</div>
							<div className="clearfix"></div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
				
				<div className="pt-80 pb-80">

					<div className="container">
					
					<div className="row">
						
						<div className="col-md-8">
						
							<div className="section-title">
							
								<h2 className="text-left text-center-sm">Featured Restaurant</h2>
								
							</div>
							
							<div className="restaurant-common-wrapper">
							
								<a  className="restaurant-common-wrapper-item highlight clearfix">
									<div className="GridLex-grid-middle">
										<div className="GridLex-col-6_xs-12">
											<div className="restaurant-type">
												<div className="image">
													<img src="images/brands/01.jpg" alt="image" />
												</div>
												<div className="content">
													<h4>Wow Burger</h4>
													<p>Indian</p>
												</div>
											</div>
										</div>
										<div className="GridLex-col-4_xs-8_xss-12 mt-10-xss">
											<div className="job-location">
												<i className="fa fa-map-marker text-primary"></i> Menlo park, CA
											</div>
										</div>
										<div className="GridLex-col-2_xs-4_xss-12">
											<div className="res-btn label label-danger">
												Place Order
											</div>
											<span className="font12 block spacing1 font400 text-center">Min: £15</span>
										</div>
									</div>
								</a>
								
								<a  className="restaurant-common-wrapper-item clearfix">
									<div className="GridLex-grid-middle">
										<div className="GridLex-col-6_xs-12">
											<div className="restaurant-type">
												<div className="image">
													<img src="images/brands/02.jpg" alt="image" />
												</div>
												<div className="content">
													<h4>Food Republic</h4>
													<p>Indian</p>
												</div>
											</div>
										</div>
										<div className="GridLex-col-4_xs-8_xss-12 mt-10-xss">
											<div className="job-location">
												<i className="fa fa-map-marker text-primary"></i> Menlo park, CA
											</div>
										</div>
										<div className="GridLex-col-2_xs-4_xss-12">
											<div className="res-btn label label-danger">
												Place Order
											</div>
											<span className="font12 block spacing1 font400 text-center">Min: £15</span>
										</div>
									</div>
								</a>
								
								<a  className="restaurant-common-wrapper-item clearfix">
									<div className="GridLex-grid-middle">
										<div className="GridLex-col-6_xs-12">
											<div className="restaurant-type">
												<div className="image">
													<img src="images/brands/03.jpg" alt="image" />
												</div>
												<div className="content">
													<h4>Attin Cafe &amp; Lounge</h4>
													<p>Indian</p>
												</div>
											</div>
										</div>
										<div className="GridLex-col-4_xs-8_xss-12 mt-10-xss">
											<div className="job-location">
												<i className="fa fa-map-marker text-primary"></i> Menlo park, CA
											</div>
										</div>
										<div className="GridLex-col-2_xs-4_xss-12">
											<div className="res-btn label label-danger">
												Place Order
											</div>
											<span className="font12 block spacing1 font400 text-center">Min: £15</span>
										</div>
									</div>
								</a>
								
								<a  className="restaurant-common-wrapper-item clearfix">
									<div className="GridLex-grid-middle">
										<div className="GridLex-col-6_xs-12">
											<div className="restaurant-type">
												<div className="image">
													<img src="images/brands/04.jpg" alt="image" />
												</div>
												<div className="content">
													<h4>Khayalee Polao</h4>
													<p>Bangladeshi</p>
												</div>
											</div>
										</div>
										<div className="GridLex-col-4_xs-8_xss-12 mt-10-xss">
											<div className="job-location">
												<i className="fa fa-map-marker text-primary"></i> Menlo park, CA
											</div>
										</div>
										<div className="GridLex-col-2_xs-4_xss-12">
											<div className="res-btn label label-danger">
												Place Order
											</div>
											<span className="font12 block spacing1 font400 text-center">Min: £15</span>
										</div>
									</div>
								</a>
								<a  className="restaurant-common-wrapper-item clearfix">
									<div className="GridLex-grid-middle">
										<div className="GridLex-col-6_xs-12">
											<div className="restaurant-type">
												<div className="image">
													<img src="images/brands/05.jpg" alt="image" />
												</div>
												<div className="content">
													<h4>Italian Pizza Hut</h4>
													<p>Indian</p>
												</div>
											</div>
										</div>
										<div className="GridLex-col-4_xs-8_xss-12 mt-10-xss">
											<div className="job-location">
												<i className="fa fa-map-marker text-primary"></i> Menlo park, CA
											</div>
										</div>
										<div className="GridLex-col-2_xs-4_xss-12">
											<div className="res-btn label label-danger">
												Place Order
											</div>
											<span className="font12 block spacing1 font400 text-center">Min: £15</span>
										</div>
									</div>
								</a>
							
							</div>
						
						</div>
					
						<div className="col-md-4 mt-50-sm">
						
							<div className="section-title">
							
								<h2 className="text-left text-center-sm">top seller</h2>
								
							</div>
							
							<div className="row gap-20 top-company-wrapper mmt">
							
								<div className="col-xs-6 col-sm-4 col-md-6">
									
									<div className="top-company">
										<div className="image">
											<img src="images/brands/01.png" alt="image" />
										</div>
										<h5>Vantage</h5>
										<a >place order</a>
									</div>
									
								</div>
								
								<div className="col-xs-6 col-sm-4 col-md-6">
									
									<div className="top-company">
										<div className="image">
											<img src="images/brands/05.png" alt="image" />
										</div>
										<h5>Greenchilli</h5>
										<a >place order</a>
									</div>
									
								</div>
								
								<div className="col-xs-6 col-sm-4 col-md-6">
								
									<div className="top-company">
										<div className="image">
											<img src="images/brands/18.png" alt="image" />
										</div>
										<h5>Bengal Spice</h5>
										<a >place order</a>
									</div>
									
								</div>
								
								<div className="col-xs-6 col-sm-4 col-md-6">
									
									<div className="top-company">
										<div className="image">
											<img src="images/brands/12.png" alt="image" />
										</div>
										<h5>Magna Tandoori</h5>
										<a >place order</a>
									</div>
									
								</div>
								
								<div className="col-xs-6 col-sm-4 col-md-6">
								
									<div className="top-company">
										<div className="image">
											<img src="images/brands/10.png" alt="image" />
										</div>
										<h5>New Bengla</h5>
										<a >place order</a>
									</div>
									
								</div>
								
								<div className="col-xs-6 col-sm-4 col-md-6">
									
									<div className="top-company">
										<div className="image">
											<img src="images/brands/08.png" alt="image" />
										</div>
										<h5>Spice Delight</h5>
										<a >place order</a>
									</div>
									
								</div>
							
							</div>
							
						</div>
						
					</div>

					</div>
					
				</div>
				<div className="bt-block-home-parallax pt-80 pb-80">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="lookbook-product">
									<h2>Delicious food is just a click away! Explore our enlisted restaurants – we believe, you will love them. </h2>

								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="container pt-80 pb-80">

					<div className="row">
						
						<div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
						
							<div className="section-title">
							
								<h3>discover new restaurant &amp; book now </h3>
								
							</div>
						
						</div>
					
					</div>
					
					<div className="row gap-40">
					
						<div className="col-xs-4 col-sm-2 mb-20">
							<a ><img src="images/brands/10.png" alt="image" /></a>
						</div>
						
						<div className="col-xs-4 col-sm-2 mb-20">
							<a ><img src="images/brands/02.png" alt="image" /></a>
						</div>
						
						<div className="col-xs-4 col-sm-2 mb-20">
							<a ><img src="images/brands/04.png" alt="image" /></a>
						</div>
						
						<div className="col-xs-4 col-sm-2 mb-20">
							<a ><img src="images/brands/18.png" alt="image" /></a>
						</div>
						
						<div className="col-xs-4 col-sm-2 mb-20">
							<a ><img src="images/brands/16.png" alt="image" /></a>
						</div>
						
						<div className="col-xs-4 col-sm-2 mb-20">
							<a ><img src="images/brands/14.png" alt="image" /></a>
						</div>
					
					</div>

				
				</div>

				<div className="download-app-area">
					<div className="download-app-sec">
						<div className="mask">
							<div className="container">
								<div className="col-lg-7 col-md-7 col-sm-12 container-cell left-container col-md-push-1">
									<div className="app-content row">
										<div className="inner">
											<h2 className="logo-content">Thefoody in your pocket!</h2>
											<h4 className="logo-subtitle">Get our app, it's the fastest way to order food on the go.</h4>
											<ul className="list-inline appstore-buttons">
												<li><a  className="btn-store btn-appstore">App Store</a></li>
												<li><a  className="btn-store btn-googleplay">Google Play</a></li>
											</ul>
										</div>

									</div>
								</div>
								<div className="col-md-4 right-align">
									<div className="left-area visible-lg">
										<img src="images/mobilev2.png" alt=""/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="clearfix"></div>

				<footer className="footer-wrapper-area">
					<div className="footer-area-content">
					
						<div id="footer-newsletter" className="pt-40 pb-40">
							<div className="container">
								<div className="row">
									<div className="col-md-12 text-center">
										<h3><i className="fa fa-envelope-o"></i>Keep in touch, Join our newsletter</h3>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6 col-md-offset-3">
										<div className="newsletter-02">
											<div className="form-group">
												<input className="form-control" placeholder="enter your email "/>
												<button className="btn btn-primary">subscribe</button>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="footer-wrapper style-3">
								<footer className="type-1">
									<div className="footer-columns-entry">
										<div className="row">
											<div className="col-md-3 col-sm-3">
												<h3 className="column-title">Popular cities</h3>
												<ul className="column">
													<li><a >Food delivery London</a></li>
													<li><a >Food delivery Ambleside</a></li>
													<li><a >Food delivery Huddersfield</a></li>
												</ul>
												<h3 className="column-title">Popular Areas</h3>
												<ul className="column">
													<li><a >Food delivery Abergavenny</a></li>
													<li><a >Food delivery Cardiff</a></li>
													<li><a >Food delivery Crewe</a></li>
												</ul>
												<div className="clear"></div>
											</div>
											<div className="col-md-3 col-sm-3">
												<h3 className="column-title">Popular cuisines</h3>
												<ul className="column">
													<li><a href="all-cuisines.html">All Cuisine</a></li>
													<li><a >Italian in Italy</a></li>
													<li><a >Chinese Food in China</a></li>
													<li><a >Dessert in Turkish</a></li>
													<li><a >Seafood in European</a></li>
													<li><a >Chinese food in Tapes</a></li>
													<li><a >Middle Eastern in French</a></li>
												</ul>
												<div className="clear"></div>
											</div>

											<div className="col-md-3 col-sm-3">
												<h3 className="column-title">restaurants search</h3>
												<ul className="column">
													<li><a href="restaurant-search.html">Search restaurant </a></li>
													<li><a >Search by keyword</a></li>
													<li><a >Search by location</a></li>
													<li><a >Search zip code</a></li>
													<li><a >Search by category</a></li>
													<li><a >Search by place</a></li>
													<li><a >Search by city</a></li>
												</ul>
												<div className="clear"></div>
											</div>

											<div className="col-md-3 col-sm-3">
												<h3 className="column-title">Thefoody</h3>
												<ul className="column">
													<li><a href="about-us.html">About Us</a></li>
													<li><a href="blog.html">News</a></li>
													<li><a >Terms and conditions</a></li>
													<li><a href="privacy-policy.html"> Privacy policy</a></li>
													<li><a >TheFoody free App for Android and iPhone</a></li>
													<li><a href="careers.html">Careers</a></li>

												</ul>
												<div className="clear"></div>
											</div>
										</div>
									</div>
								</footer>
							</div>
						</div>


					</div>
					
					
					<div className="bottom-footer">
					
						<div className="container">
						
							<div className="row">
							
								<div className="col-sm-4 col-md-4">
						
									<p className="copy-right">&#169; Copyright 2016 iGlyphic</p>
									
								</div>
								
								<div className="col-sm-4 col-md-4">
								
									<ul className="bottom-footer-menu">
										<li><a >Cookies</a></li>
										<li><a >Policies</a></li>
										<li><a >Terms</a></li>
										<li><a >Blogs</a></li>
									</ul>
								
								</div>
								
								<div className="col-sm-4 col-md-4">
									<ul className="bottom-footer-menu for-social">
										<li><a ><i className="ri ri-twitter" data-toggle="tooltip" data-placement="top" title="twitter"></i></a></li>
										<li><a ><i className="ri ri-facebook" data-toggle="tooltip" data-placement="top" title="facebook"></i></a></li>
										<li><a ><i className="ri ri-google-plus" data-toggle="tooltip" data-placement="top" title="google plus"></i></a></li>
										<li><a ><i className="ri ri-youtube-play" data-toggle="tooltip" data-placement="top" title="youtube"></i></a></li>
									</ul>
								</div>
							
							</div>

						</div>
						
					</div>
				</footer> */}
			</div>
		);
	}
}

export default Home;