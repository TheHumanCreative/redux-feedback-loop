import React, { Component } from "react";
import { connect } from "react-redux";

class Review extends Component {
  state = {
    review: ""
  };

  handleClickBack = () => {
    this.props.history.push('/comment');
  };


  handleChange = event => {
    this.setState({
      review: event.target.value
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
      type: "REVIEW_WAY",
      payload: this.state
    };
    this.props.dispatch(action);

    this.props.history.push("/success");
  };

  render() {
    return (
      <div>
        <h1>Review Page</h1>
        <input
          //   required
          type="text"
          className="textarea"
          onChange={this.handleChange}
          placeholder="type your review here"
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
  };
};

export default connect(mapReduxStateToProps)(Review);
