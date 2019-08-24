import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux'; 
import "./bootstrap.css";

import Comment from '../Comment/Comment';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Successful from '../Successful/Successful';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';


class App extends Component {

  // componentDidMount() {
  //   this.getFeelings
  // }

  

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Prime Daily Student Feedback!</h1>
            <h4>
              <i>Please Don't forget it!</i>
            </h4>
          </header>
          <Route exact path="/" component={Feeling} />
          <Route path="/understand" component={Understanding} />
          <Route path="/support" component={Support} />
          <Route path="/comment" component={Comment} />
          <Route path="/review" component={Review} />
          <Route path="/success" component={Successful} />
          <br />
        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = reduxStore => {
  return {
    reduxStore
  }
}


export default connect(mapReduxStateToProps)(App);
