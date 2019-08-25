import React, { Component } from "react";
import { connect } from "react-redux";

class Support extends Component {

    state = {
        support: "",
    }

    handleClickBack = () => {
        this.props.history.push('/understand')
    }


    handleChange = (event) => {
        this.setState({
            support: event.target.value
        });
        console.log(this.state);
    };

    handleClick = () => {
        if(this.state.support === "") 
        { alert('Please provide number in field') } 
        
        else {
        let action = {
          type: "SUPPORT_WAY",
          payload: this.state
        };
        this.props.dispatch(action);

        this.props.history.push('/comment');  
    };
}

  render() {
    return (
      <div>
        <h1>How well are you being supported?</h1>

        <input
          // required
          type="number"
          className="textarea"
          onChange={this.handleChange}
          placeholder="type number 1 - 5 here"
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

export default connect(mapReduxStateToProps)(Support);
