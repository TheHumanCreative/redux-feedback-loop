import React, { Component } from "react";
import { connect } from "react-redux";

class Feeling extends Component {
  state = {
    feeling: "",
  };


  handleChange = event => {
    this.setState({
      feeling: event.target.value
    });
    console.log(this.state);
  };


  handleClick = () => {

    if(this.state.feeling === "") 
    { alert('Please insert value') } 

    else {
      let action = {
        type: "FEELING_WAY",
        payload: this.state
      };
      this.props.dispatch(action);
    this.props.history.push('/understand');
  };
  }
  render() {
    return (
      <div>
        
          <div>
            <h1>How are you feeling today?</h1>

            <input
            //   required=""
              type="number"
              className="textarea"
              onChange={this.handleChange}
              placeholder="type number 1 - 5 here"
            ></input>
            {/* <input
        type="1"
        type="radio"
        name="feeling"
        onClick={event => this.handleChange()}></input> */}
            {/* <input
        type="2"
        type="radio"
        name="feeling"
        onClick={event => this.handleChange()}></input> */}
            {/* <input
        type="3"
        type="radio"
        name="feeling"
        onClick={event => this.handleChange()}></input> */}
            {/* <input
        type="4"
        type="radio"
        name="feeling"
        onClick={event => this.handleChange()}></input> */}
            {/* <input
        type="5"
        type="radio"
        name="feeling"
        onClick={event => this.handleChange()}></input> */}

            <button className="nextBtn" onClick={this.handleClick}>
              NEXT
            </button>
            {/* {JSON.stringify(this.state)} */}
          </div>
    
      </div>
    );
  }
}

const mapReduxStateToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapReduxStateToProps)(Feeling);
