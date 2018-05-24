import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Search from './components/search/SearchPage';
import Single from './components/singleRest/Single'; 
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import Profile from './components/user/UserProfile';
import EditProfile from './components/user/EditProfile';
import Orders from './components/user/Orders';
import AuthService from './components/auth/AuthService';
import withAuth from './components/auth/WithAuth';
class App extends Component {
  constructor() {
    super();
    this.state = { loggedIn: false };
    this.Auth = new AuthService();
  }
  componentWillMount() {
      if (this.Auth.loggedIn()) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
  }
  
  render() {
    const logState = this.state.loggedIn;
    return (
      <Router>
        <div className="container-wrapper">
          <Header loginCheck={logState} />
          <Switch>
            <Route path='/' component={Home} exact={true}/>
            <Route path='/search/:place/:term' component={Search} />
            <Route path='/single/:id/:name' component={Single}/>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/profile' component={Profile} />
            <Route path='/editprofile' component={EditProfile} />
            <Route path='/orders' component={Orders} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
