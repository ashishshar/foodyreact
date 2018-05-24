import React, {
    Component
} from 'react';

class Searchpanel extends React.Component{
    render(){
        return(
            <div className="second-search-restaurant-wrapper">
                    <div className="container"> 
                        <form>
                            <div className="second-search-result-inner">
                                <span className="labeling">Search a restaurant</span>
                                <div className="row">
                                
                                <div className="col-xss-12 col-xs-6 col-sm-6 col-md-5">
                                    <div className="form-group form-lg">
                                    <input type="text" className="form-control" placeholder="e.g. SW6 6LG / SW6 / London" />
                                    </div>
                                </div>
                                
                                <div className="col-xss-12 col-xs-6 col-sm-6 col-md-5">
                                    <div className="form-group form-lg">
                                    <input type="text" className="form-control" placeholder="Find a restaurant" />
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
        );
    }
}

export default Searchpanel;