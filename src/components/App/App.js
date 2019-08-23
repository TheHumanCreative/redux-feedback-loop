import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Comment from '../Comment/Comment';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Successful from '../Successful/Successful';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';


class App extends Component {

  componentDidMount() {
    // this.
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <Route exact path="/" component={Feeling} />
          <Route path="/understand" component={Understanding} />
          <Route path="/support" component={Support} />
          <Route path="/comment" component={Comment} />
          <Route path="/review" component={Review} />
          <Route path="/success" component={Successful} />
        </header>
        <br/>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxStore => {
  return {
    reduxStore
  }
}


export default connect(mapReduxStateToProps)(App);
