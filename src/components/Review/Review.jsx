import React, { Component } from "react";
import { connect } from "react-redux";

class Review extends Component {

    state = {
        review: " ",
    }

    handleChange = (event) => {
        this.setState({
            review: event.target.value
        })
        console.log(this.state)
    };

    handleClick = () => {
        let action = {
          type: "REVIEW_WAY",
          payload: this.state
        };
        this.props.dispatch(action);

        this.props.history.push('/success')
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


export default connect(mapReduxStateToProps)(Review);
