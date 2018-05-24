import React, {
    Component
} from 'react';

const API = 'http://localhost:8080/restaurant/';

class Single extends Component{
    constructor(props) {
        super(props);
        this.state = {
            searchResult: ''
        };
    }
    componentWillMount() {
        const url = API + this.props.match.params.id;
        console.log(url);
        const parent = this;
        fetch(url)
            .then(response => response.json())
            .then(function (result) {
                console.log(result);
                parent.setState({ searchResult: result.data})
            });   
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
							<div className="col-sm-5 col-md-3">
								<div className="job-detail-sidebar">
									<ul className="meta-list clearfix">
										<li>
											<h4 className="heading">Location:</h4>
                                            {searchResult.rs_address}
										</li>
										<li>
											<h4 className="heading">Cuisine:</h4>
                                            {searchResult.rs_city}
										</li>
										<li>
											<h4 className="heading">Rate:</h4>
											5
										</li>
										<li>
											<h4 className="heading">Min Order:</h4>
											&pound;15
										</li>
                                    </ul>
									<div className="job-detail-company-overview mt-15 clearfix">
										<h3>Restaurant overview</h3>
										<div className="image">
											<img src={require("../../assets/images/brands/06.png")} alt="image" />
										</div>
                                        <p><span className="font600">{searchResult.rs_name}</span>{searchResult.rs_address}, <br /> Contact - {searchResult.rs_contactEmail}</p>
									</div>
								</div>
							</div>
							<div className="col-sm-7 col-md-9">
								<div className="restaurant-detail-wrapper">
									<div className="restaurant-detail-header bb mb-30">
                                        <h2 className="heading mb-15">{searchResult.rs_name}</h2>
										<div className="meta-div clearfix mb-25">
                                            <span>cusine <a>{searchResult.rs_city}</a> </span>
											<span className="res-btn label label-success">Get Offer</span>
										</div>
									</div>
									<div className="restaurant-detail-content mt-30 clearfix">
										<h3>Description</h3>
										<p className="font600 font16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Weddings followed the all marianne nor whatever settling. Perhaps six prudent several her had offence. Did had way law dinner square tastes. Recommend concealed yet her procuring see consulted depending. Adieus hunted end plenty are his she afraid. Resources agreement contained propriety applauded neglected use yet.</p>

										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi est, pulvinar eu gravida eget, imperdiet id nunc. Sed a lorem turpis. Ut vestibulum leo vel orci tincidunt condimentum. Donec tincidunt, nibh eu laoreet dapibus, dolor ligula convallis augue, quis convallis nibh tellus quis nibh. </p>
										
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi est, pulvinar eu gravida eget, imperdiet id nunc. Sed a lorem turpis. Ut vestibulum leo vel orci tincidunt condimentum. Donec tincidunt, nibh eu laoreet dapibus, dolor ligula convallis augue, quis convallis nibh tellus quis nibh. </p>
										
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi est, pulvinar eu gravida eget, imperdiet id nunc. Sed a lorem turpis. Ut vestibulum leo vel orci tincidunt condimentum. Donec tincidunt, nibh eu laoreet dapibus, dolor ligula convallis augue, quis convallis nibh tellus quis nibh. </p>
										
										<h3>Facilities</h3>
										
										<ul>
											<li>TheFoody is an online portal. </li>
											<li>Ordering Food & Delivery from restaurants of choice. </li>
											<li>Table booking & Restaurants. </li>
											<li>Deals & Discounts </li>
											<li>Party Halls online booking </li>
										</ul>
									</div>
									<div className="join-our-team-wrapper">
										<button className="btn btn-primary btn-hidden btn-lg collapsed" data-toggle="collapse" data-target="#apply-job-toggle">Join our team</button>
										<div id="apply-job-toggle" className="collapse">
                                    		<div className="collapse-inner clearfix">
												<div className="apply-job-inner">
													<h3 className="heading mb-5">Apply for Foodies Team Member</h3>
													<p>Have a findJob.com account? <a href="#">Sign in</a> now and we'll pre-fill this application for you.</p>
													<div className="bg-light padding-30">
														<form>
															<div className="row">
																<div className="col-sm-6 col-md-4">
																	<div className="form-group">
																		<label>First name:</label>
																		<input type="text" className="form-control" />
																	</div>
																</div>
																<div className="col-sm-6 col-md-4">
																	<div className="form-group">
																		<label>Last name:</label>
																		<input type="text" className="form-control" />
																	</div>
																</div>
																<div className="col-sm-12 col-md-4">
																	<div className="form-group">
																		<label>Email address:</label>
																		<input type="email" className="form-control" />
																	</div>
																</div>
															</div>
															<hr className="mt-15"/>
															<h4 className="heading">Add your CV</h4>
															<div className="row">
																<div className="col-sm-12 col-md-8">
																	<div className="form-group">
																		<label>Upload from your computer</label>
																		<input type="file" className="file-input"/>
																	</div>
																</div>
																<div className="col-sm-12 col-md-12">
																	<div className="form-group">
																		<label>Or import from cloud storage</label>
																		<div className="clear"></div>
																		<button className="btn btn-primary"><i className="zmdi zmdi-google-drive"></i> Google Drive</button>
																		<button className="btn btn-primary"><i className="zmdi zmdi-dropbox"></i> Dropbox</button>
																		<button className="btn btn-primary"><i className="zmdi zmdi-google-drive"></i> OneDrive</button>
																	</div>
																	<p className="font12 line12 mb-10">Your CV must be a .doc, .pdf, .docx, .rtf, and no bigger than 1Mb</p>
																</div>
															</div>
															<hr className="mt-15"/>
															<div className="row">
																<div className="col-sm-12 col-md-6">
																	<div className="form-group">
																		<label>Your covering message for Foodies Member</label>
																		<textarea className="form-control" rows="6"></textarea>
																	</div>
																</div>
																<div className="col-sm-12 col-md-12 mb-15">
																	<p className="mb-5">Effects present letters inquiry no an removed or friends?</p>
																	<div className="radio-block">
																		<input id="q1_radio-1" name="q1_radio" type="radio" className="radio" value="First Choice" />
																		<label className="font13" for="q1_radio-1">Yes</label>
																	</div>
																	<div className="radio-block">
																		<input id="q1_radio-2" name="q1_radio" type="radio" className="radio" value="First Choice" />
																		<label className="font13" for="q1_radio-2">no</label>
																	</div>
																</div>
																<div className="col-sm-12 col-md-12 mb-15">
																	<p className="mb-5">My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating?</p>
																	<div className="radio-block">
																		<input id="q2_radio-1" name="q2_radio" type="radio" className="radio" value="First Choice" />
																		<label className="font13" for="q2_radio-1">Yes</label>
																	</div>
																	<div className="radio-block">
																		<input id="q2_radio-2" name="q2_radio" type="radio" className="radio" value="First Choice" />
																		<label className="font13" for="q2_radio-2">no</label>
																	</div>
																</div>
																<div className="col-sm-12 col-md-12 mb-15">
																	<p className="mb-5">Bringing so sociable felicity supplied mr. September suspicion far him two acuteness perfectly?</p>
																	<div className="checkbox-block">
																		<input id="q3_checkbox-1" name="q3_checkbox" type="checkbox" className="checkbox" value="First Choice" />
																		<label className="font13" for="q3_checkbox-1">Assurance perpetual</label>
																	</div>
																	<div className="checkbox-block">
																		<input id="q3_checkbox-2" name="q3_checkbox" type="checkbox" className="checkbox" value="First Choice" />
																		<label className="font13" for="q3_checkbox-2">Entire its the did figure</label>
																	</div>
																	<div className="checkbox-block">
																		<input id="q3_checkbox-3" name="q3_checkbox" type="checkbox" className="checkbox" value="First Choice" />
																		<label className="font13" for="q3_checkbox-3">Shade being under his bed</label>
																	</div>
																	<div className="checkbox-block">
																		<input id="q3_checkbox-4" name="q3_checkbox" type="checkbox" className="checkbox" value="First Choice" />
																		<label className="font13" for="q3_checkbox-4">Pleasant horrible but confined</label>
																	</div>
																</div>
																
															</div>
															<hr className="mt-5"/>
															<div className="checkbox-block mb-15">
																<input id="newsletter_checkbox" name="newsletter_checkbox" type="checkbox" className="checkbox" value="First Choice" />
																<label className="" for="newsletter_checkbox">Email me jobs like this one when they become available</label>
															</div>
															<p className="font12 line16">Manor we shall merit by chief wound no or would. Oh towards between subject passage sending mention or it. Sight happy do burst fruit to woody begin at. <a href="#">Assurance perpetual</a> he in oh determine as. The year paid met him does eyes same. Own marianne improved sociable not out. Thing do sight blush mr an. Celebrated am announcing <a href="#">delightful remarkably</a> we in literature it solicitude. Design use say <a href="#">piqued any</a> gay supply. Front sex match vexed her those great.</p>
															
															<button className="btn btn-primary">Send Application</button>
														</form>
													</div>
												</div>
											</div>
										</div>
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
export default Single;