import React, { Component } from "react";
import { connect } from "react-redux";

class Comment extends Component {
  state = {
    comment: " "
  };

  handleClickBack = () => {
    this.props.history.push('/support');
  };

  handleChange = event => {
    this.setState({
      comment: event.target.value
    });
    console.log(this.state);
  };

  handleClick = () => {
    // if(this.state.comment === '') {some type of alert }
    // else {this.props.dispatch({
    //     type: 'COMMENT_WAY',
    //  payload:  this.state.comment})
    // this.props.history.push('/review') }
    let action = {
      type: "COMMENT_WAY",
      payload: this.state
    };
    this.props.dispatch(action);

    this.props.history.push("/review");
  };

  render() {
    return (
      <div>
        <h1>Any comments you want to leave?</h1>
        <input
          //   required
          type="text"
          className="textarea"
          onChange={this.handleChange}
          placeholder="type your comments here"
        ></input>
        <button className="backBtn" onClick={this.handleClickBack}>
          BACK
        </button>
        <button className="nextBtn" onClick={this.handleClick}>
          NEXT
        </button>
        {/* {JSON.stringify(this.state)} */}
      </div>
    );
  }
}

const mapReduxStateToProps = reduxStore => {
    return {
        reduxStore
    }
}

export default connect(mapReduxStateToProps)(Comment);

