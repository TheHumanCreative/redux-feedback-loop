import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux'; 
import "./bootstrap.css";

import Comment from '../Comment/Comment'; // shows a comments page which is for the user to type in a comment of the day.
import Feeling from '../Feeling/Feeling'; // shows a feelings page in which is again taking in a number.
import Review from '../Review/Review'; // shows a review page which is for the user to type in a review of the day.
import Successful from '../Successful/Successful'; // shows a finished the loop with the results of each page to the user and then takes them to the thankyou.
import Support from '../Support/Support'; // shows a support page which is again taking in a number.
import Understanding from '../Understanding/Understanding'; // shows an understanding page which takes in a number (NEED TO GET THE VALIDATION ON NUMBERS).
import Thankyou from '../Thankyou/Thankyou'; // shows a thankyou page to the user and gives option for Restart or Admin ( LOG_IN WOULD BE IMPLEMENTED ).
import Admin from '../Admin/Admin'; // shows the database on the DOM and allows to DELETE item from DB.


class App extends Component {

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
          <Route path="/thankyou" component={Thankyou} />
          <Route path="/admin" component={Admin} />
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
