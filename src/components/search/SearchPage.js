import React, {
    Component
} from 'react';
import { Link } from 'react-router-dom';
const API = 'http://localhost:8080/restaurants/search/';

class SearchPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            searchResults: [] ,
            restaurant: '',
            place: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
        console.log(this.state);
    }
    handleSubmit(event) {
        const place = 'test'; //this.state.place;
        const restu = this.state.restaurant;
        //alert('A name was submitted: ' + this.state.place);
        event.preventDefault();
        this.props.history.push('/search/' + place + '/' + restu);
        window.location.reload();
        //this.componentWillMount();
    }

    render(){
        const { searchResults } = this.state;
        return (
            <div className="main-wrapper">  
                <div className="second-search-restaurant-wrapper">
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="second-search-result-inner">
                                <span className="labeling">Search a restaurant</span>
                                <div className="row">
                                    <div className="col-xss-12 col-xs-6 col-sm-6 col-md-5">
                                        <div className="form-group form-lg">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="e.g. SW6 6LG / SW6 / London"
                                                name="place"
                                                onChange={this.handleChange}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xss-12 col-xs-6 col-sm-6 col-md-5">
                                        <div className="form-group form-lg">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Find a restaurant"
                                                name="restaurant"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xss-12 col-xs-6 col-sm-4 col-md-2">
                                        <button className="btn btn-block">Search</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
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
                                <div className="col-sm-2 col-md-3 mt-25">
                                    <div className="restaurant-list-wrapper">
                                        <aside className="sidebar with-filter">
                                            <div className="sidebar-inner">
                                                <div className="sidebar-module">

                                                    <div className="top-company-2-wrapper">

                                                        <div className="GridLex-gap-10">

                                                            <div className="GridLex-grid-noGutter-equalHeight">
                                                                <h4 className="sidebar-title">Filter</h4>
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
                                <div className="col-sm-6 col-md-6 mt-25">
                                    <h4 className="sidebar-title">Search Result</h4>
                                    <div className="restaurant-list-wrapper">
                                        {searchResults.map(searchResult =>
                                            <div className="row" key={searchResult.rs_profileId}>
                                                <div className="col-md-12" style={{marginBottom:'10px', borderRadius:'10px'}}>
                                                    <div className="content">
                                                        <div className="restaurant-item-list-info">
                                                            <div className="row" style={{ border: '1px solid #F5F5F5', backgroundColor:'#F5F5F5'}}>
                                                                <div className="col-sm-3 col-md-4">
                                                                    <img src={require("../../assets/images/brands/06.png")} alt="image" />
                                                                </div>
                                                                <div className="col-sm-9 col-md-8">
                                                                    <span>{searchResult.rs_restType}</span>
                                                                    <h3 className="heading">{searchResult.rs_name}</h3>
                                                                    <span>at <a>{searchResult.rs_city}</a></span><br/>
                                                                    <span>{searchResult.rs_address}</span>
                                                                </div>
                                                                <div className="col-sm-12 col-md-12">
                                                                    <span><strong>CUISINES: </strong> {searchResult.rs_cuisines}</span><br />
                                                                    <span><strong>COST: </strong> &#8377;{searchResult.rs_averageCost} Cost for two</span><br />
                                                                    <span><strong>HOURS: </strong> {searchResult.rs_openHours}</span><br />
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
                                                                <div style={{padding:'10px'}}>
                                                                    <Link className="btn btn-primary" to={`/single/${searchResult.rs_profileId}/${searchResult.rs_name.replace(/\s+/g, '-')}`}>View</Link>
                                                                </div>
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