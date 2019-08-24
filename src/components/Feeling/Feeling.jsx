import React, { Component } from "react";
// import axios from 'axios';
import { connect } from "react-redux";

class Feeling extends Component {
  state = {
    feeling: " ",
  };

//   componentDidMount() {
//     this.getFeelings();
//   }

//   getFeelings = () => {
//     axios
//       .get('/', this.state.feeling)
//       .then(response => {
//         this.props.dispatch({
//           type: "FEELING_WAY",
//           payload: response.data
//         });
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   createFeelingList = (event) => {
//       let feelingList = this.props.reduxStore.feelingList.map(feedback, i) => {
//           return (
//               <FeelingListItem key={i} getFeelings={this.props.getFeelings} feedback={feedback} />
//           )
//       }
//     return feelingList;
//   }

  handleChange = event => {
    this.setState({
      feeling: event.target.value
    });
    console.log(this.state);
    // let action = {
    //     type: "FEELING_WAY",
    //     payload: this.state
    // }
    // this.props.dispatch(action);
  }


  handleClick = () => {
      let action = {
        type: "FEELING_WAY",
        payload: this.state
      };
      this.props.dispatch(action);
    this.props.history.push("/understand");
  };

  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <input
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
        <button onClick={this.handleClick}>NEXT</button>
        {JSON.stringify(this.state)}
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
