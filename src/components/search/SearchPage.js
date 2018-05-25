import React, {
    Component
} from 'react';
import { Link } from 'react-router-dom';
import Searchpanel from './Searchpanel';
import Rating from 'react-rating';
const API = 'http://localhost:8080/restaurants/search/';

class SearchPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            searchResults: [] 
        };
    }
    componentWillMount() {
        const url = API + this.props.match.params.place + '/' + this.props.match.params.term;
        console.log(url);
        const parent = this;
        fetch(url)
            .then(response => response.json())
            .then(function (result){
                parent.setState({ searchResults: result.data })
            });
    }
    render(){
        const { searchResults } = this.state;
        return (
            <div className="main-wrapper">  
                <Searchpanel/>
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <ol className="breadcrumb-list booking-step">
                            <li><a >Home</a></li>
                            <li><span>All restaurant</span></li>
                        </ol>
                    </div>            
                </div>
                <div className="section sm">
                    <div className="container">
                        <div className="restaurant-wrapper">
                            <div className="row">
                                <div className="col-sm-8 col-md-9 mt-25">
                                    <div className="restaurant-list-wrapper">
                                        {searchResults.map(searchResult =>
                                            <div className="restaurant-item-list featured" key={searchResult.rs_profileId}>
                                                <div className="featured-label"><span>featured</span></div>
                                                <div className="image">
                                                    <img src={require("../../assets/images/brands/06.png")} alt="image" />
                                                </div>
                                                <div className="content">
                                                    <div className="restaurant-item-list-info">
                                                        <div className="row">
                                                            <div className="col-sm-7 col-md-8">
                                                                <h4 className="heading">{searchResult.rs_name}</h4>
                                                                <div className="meta-div clearfix mb-25">
                                                                    <span>at <a>{searchResult.rs_city}</a></span>
                                                                    <span className="res-btn label label-success">Get Offer</span>
                                                                </div>
                                                                <p className="texing">{searchResult.rs_name}</p>
                                                            </div>
                                                            <div className="col-sm-5 col-md-4">
                                                                <ul className="meta-list">
                                                                    <li>
                                                                        <span>Location:</span>
                                                                        {searchResult.rs_address}
                                                                    </li>
                                                                    <li>
                                                                        <span>Rating:</span>
                                                                        <Rating
                                                                            readonly
                                                                            stop={5}
                                                                            emptySymbol={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
                                                                                'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
                                                                                'fa fa-star-o fa-2x high']}
                                                                            fullSymbol={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
                                                                                'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
                                                                                'fa fa-star fa-2x high']}
                                                                        />
                                                                    </li>
                                                                    <li>
                                                                        <span>Min Order:</span>
                                                                        &pound;15
                                                                    </li>
                                                                    <li>
                                                                        <span>Delivery: </span>
                                                                        60 min
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="restaurant-item-list-bottom">
                                                        <div className="row">
                                                            <div className="col-sm-7 col-md-8">
                                                                <div className="sub-category">
                                                                    <span>
                                                                        <span><i className="fa fa-star"></i></span>
                                                                        <span><i className="fa fa-star"></i></span>
                                                                        <span><i className="fa fa-star"></i></span>
                                                                        <span><i className="fa fa-star"></i></span>
                                                                        <span><i className="fa fa-star"></i></span>
                                                                        <span className="review">
                                                                            (<span>35</span>)
                                                            </span>
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-5 col-md-4">
                                                                <Link className="btn btn-primary" to={`/single/${searchResult.rs_profileId}/${searchResult.rs_name}`}>View</Link>
                                                            </div>

                                                        </div>

                                                    </div>


                                                </div>
                                            </div>
                                        )}
                                                                               
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-3 mt-25">
                                    <div className="restaurant-list-wrapper">
                                    
                                        <aside className="sidebar with-filter">
                                        
                                        <div className="sidebar-inner">
                                        
                                            <div className="sidebar-module">
                                            <h4 className="sidebar-title">Featured Restaurant</h4>
                                
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
                                            
                                            <div className="sidebar-module">
                                                <h4 className="sidebar-title">Top Locations</h4>
                                                <ul className="sidebar-link-list">
                                                    <li><a >Louisville, KY <span>(432)</span></a></li>
                                                    <li><a >Charleroi, PA <span>(123)</span></a></li>
                                                    <li><a >New York, NY<span>(3332)</span></a>
                                                    <ul className="sidebar-link-list active">
                                                        <li><a >Mahattan<span>(23)</span></a></li>
                                                        <li><a >Broadway<span>(43)</span></a></li>
                                                        <li><a >Midtown<span>(09)</span></a></li>
                                                        <li><a >Brooklyn<span>(18)</span></a></li>
                                                        <li><a >Wall Streat<span>(65)</span></a></li>
                                                    </ul>
                                                    </li>
                                                    <li><a >Richmond, VA <span>(134)</span></a></li>
                                                    <li><a >Overland Park, KS <span>(321)</span></a></li>
                                                    <li><a >Dallas, TX <span>(554)</span></a></li>
                                                    <li><a >Irvine, CA <span>(66)</span></a></li>
                                                    <li><a >Escondido, CA <span>(78)</span></a></li>
                                                </ul>
                                            </div>
                                            <div className="sidebar-module">
                                                <h4 className="sidebar-title">New Restaurant</h4>
                                                <div className="sub-category">
                                                    <a >Bangkok Lounge</a>
                                                    <a >Arabian Grill</a>
                                                    <a >Curry Garden</a>
                                                    <a >Green Chilli</a>
                                                    <a >Bangkok Takeaway</a>
                                                    <a >Curry Garden</a>
                                                    <a >Bangkok Lounge</a>
                                                    <a >Arabian Grill</a>
                                                    <a >Curry Garden</a>
                                                    <a >Green Chilli</a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                        </aside>
                                        
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

export default SearchPage;