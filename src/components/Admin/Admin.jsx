import React, { Component } from "react";
import { connect } from "react-redux";

class Admin extends Component {
  
    handleClickBack = () => {
        this.props.history.push('/thankyou')
    }

    handleClickRestart = () => {
        this.props.history.push('/')
    }
  
  
    render() {
    return (
      <div>
        <h1>ADMIN</h1>
        {/* <input
          // required
          type="number"
          className="textarea"
          onChange={this.handleChange}
          placeholder="type number 1 - 5 here"
        ></input> */}
        <button className="backBtn" onClick={this.handleClickBack}>
          BACK
        </button>
        <button className="nextBtn" onClick={this.handleClickRestart}>
          RESTART
        </button>
        {/* {JSON.stringify(this.state)} */}
      </div>
    );
  }
}

export default connect()(Admin);