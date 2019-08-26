import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "../../../../../../../Library/Caches/typescript/3.5/node_modules/redux";

class Admin extends Component {
  componentDidMount() {
    this.getFeelings();
  }

  handleClickBack = () => {
    this.props.history.push("/thankyou");
  };

  handleClickTest = () => {
    this.props.history.push("/");
  };

  getFeelings = () => {
    axios.get("/dailyFeedBack").then(response => {
      console.log("success", response.data);
      this.props.dispatch({
          type: 'ADD_WAY',
          payload: response.data
      })

        // .catch(error => {
        //   console.log("error", error);
        // });
    })
}


  render() {
    return (
      <div>
        <h1>ADMIN</h1>
        {JSON.stringify(this.props.reduxStore.addFeedBackReducer)}
        {/* <input
          // required
          type="number"
          className="textarea"
          onChange={this.handleChange}
          placeholder="type number 1 - 5 here"
        ></input> */}
        <dailyFeedBack />
        <button className="backBtn" onClick={this.handleClickBack}>
          BACK
        </button>
        <button className="nextBtn" onClick={this.handleClickTest}>
          RESTART
        </button>
        {/* {JSON.stringify(this.state)} */}
      </div>
    );
  }
}

const mapReduxStateToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapReduxStateToProps)(Admin);
