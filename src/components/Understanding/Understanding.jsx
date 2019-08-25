import React, { Component } from "react";
import { connect } from "react-redux";

class Understanding extends Component {

    state = {
        understand: "",
    }

    handleChange = (event) => {
        this.setState({
            understand: event.target.value
        })
        console.log(this.state);
    }

    handleClickBack = () => {
       
        this.props.history.push('/');
        // thinking of a spot to apply the state and capture the value of the state and
        // show it in the text field as the last input and it can be re entered to update the state and continue on.
    }


    handleClick = () => {

        if(this.state.understand === '') 
        { alert('Please enter in a number') } 
        
        else{
        let action = {
          type: "UNDERSTANDING_WAY",
          payload: this.state
        };
        this.props.dispatch(action);

        this.props.history.push('/support');
    }
}

  render() {
    return (
      <div>
        <h1>How well are you understanding the content?</h1>
        <input
          // required
          type="number"
          className="textarea"
          onChange={this.handleChange}
          placeholder="type number 1 - 5 here"
        ></input>
        <button className="backBtn" onClick={this.handleClickBack}>BACK</button>
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


export default connect(mapReduxStateToProps)(Understanding);
