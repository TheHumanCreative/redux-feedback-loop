import React, { Component } from "react";
import { connect } from "react-redux";

class Understanding extends Component {

    state = {
        understand: '',
    }

    handleChange = (event) => {
        this.setState({
            understand: event.target.value
        })
        console.log(this.state);
        // let action = {
        //     type: "UNDERSTANDING_WAY",
        //     payload: this.state
        // }
        // this.props.dispatch(action);
    }

    handleClick = () => {
        let action = {
          type: "UNDERSTANDING_WAY",
          payload: this.state
        };
        this.props.dispatch(action);

        this.props.history.push('/support');
    }

  render() {
    return (
      <div>
        <h1>How well are you understanding the content?</h1>
        <input 
        type="number"
        className="textarea" 
        onChange={this.handleChange}
        placeholder="type number 1 - 5 here"
        ></input>
        <button onClick={this.handleClick}>NEXT</button>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

const mapReduxStateToProps = reduxStore => {
    return {
        reduxStore
    }
}


export default connect(mapReduxStateToProps)(Understanding);
