import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return(
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
                            <div className="col-md-6 offset-md-3">
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
                                                <li><a >Food delivery Huddersfield</a></li>
                                            </ul>
                                            <h3 className="column-title">Popular Areas</h3>
                                            <ul className="column">
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
                                            </ul>
                                            <div className="clear"></div>
                                        </div>

                                        <div className="col-md-3 col-sm-3">
                                            <h3 className="column-title">restaurants search</h3>
                                            <ul className="column">
                                                <li><a>Search restaurant </a></li>
                                                <li><a >Search by keyword</a></li>
                                                <li><a >Search by location</a></li>
                                            </ul>
                                            <div className="clear"></div>
                                        </div>

                                        <div className="col-md-3 col-sm-3">
                                            <h3 className="column-title">Thefoody</h3>
                                            <ul className="column">
                                                <li><a>About Us</a></li>
                                                <li><a>News</a></li>
                                                <li><a>Terms and conditions</a></li>
                                                <li><a> Privacy policy</a></li>

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

                                <p className="copy-right">&#169; Copyright 2016 Fullka</p>

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
			
			</footer>
    ); 
}

export default Footer;