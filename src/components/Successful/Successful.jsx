import React, { Component } from "react";
import { connect } from "react-redux";


class Successful extends Component {

    state = {
      successful: " ",
    }

    handleChange = (event) => {
      this.setState({
        successful: event.target.value
      })
      console.log(this.state)
    }

    handleClick = () => {
      this.props.history.push('/')
    }

  render() {
    return (
      <div>
        <h1>Congratulations! Thank you for your feedback!</h1>
        <table className="table">
          <h2>Results:</h2>

          <tr>
            <h4>FEELING</h4>
            <td>{this.props.state.feeling}</td>
          </tr>
          <tr>
            <h4>UNDERSTANDING</h4>
            <td>{this.props.state.understanding}</td>
          </tr>
          <tr>
            <h4>SUPPORT</h4>
            <td>{this.props.state.support}</td>
          </tr>
          <tr>
            <h4>COMMENT</h4>
            <td>{this.props.state.comment}</td>
          </tr>
          <tr>
            <h4>REVIEW</h4>
            <td>{this.props.state.review}</td>
          </tr>
        </table>
        <input onChange={this.handleChange}></input>
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
