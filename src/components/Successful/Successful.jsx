import React, { Component } from "react";
import { connect } from "react-redux";


class Successful extends Component {

    // state = {
    //   successful: " ",
    // }

    // handleChange = (event) => {
    //   this.setState({
    //     successful: event.target.value
    //   })
    //   console.log(this.state)
    // }

    handleClick = () => {
      this.props.history.push('/')
    }

  render() {
    return (
      <div>
        <h1>Congratulations! Thank you for your feedback!</h1>
        <h2>Results of your feedback:</h2>
        <table className="table">
          <tbody>
            <tr>
              <th>FEELING</th>
              <td>{this.props.reduxStore.feelingReducer.feeling}</td>
            </tr>
            <tr>
              <th>UNDERSTANDING</th>
              <td>{this.props.reduxStore.understandingReducer.understand}</td>
            </tr>
            <tr>
              <th>SUPPORT</th>
              <td>{this.props.reduxStore.supportReducer.support}</td>
            </tr>
            <tr>
              <th>COMMENT</th>
              <td>{this.props.reduxStore.commentReducer.comment}</td>
            </tr>
            <tr>
              <th>REVIEW</th>
              <td>{this.props.reduxStore.reviewReducer.review}</td>
            </tr>
          </tbody>
        </table>
        {/* <input onChange={this.handleChange}></input> */}
        {/* <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg">
              Large
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          ></input>
        </div> */}
        <button onClick={this.handleClick}>COMPLETED</button>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxStore => {
  return {
    reduxStore
  }
}

export default connect(mapReduxStateToProps)(Successful);
