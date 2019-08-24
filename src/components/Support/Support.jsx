import React, { Component } from "react";
import { connect } from "react-redux";

class Support extends Component {

    state = {
        support: '',
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        })
        console.log(this.state);
        let action = {
            type: "SUPPORT_WAY",
            payload: this.state
        }
        this.props.dispatch(action);
    };

    handleClick = () => {
        this.props.history.push('/comment');
    }

  render() {
    return (
      <div>
        <h1>How well are you being supported?</h1>
        <input type="number" className="textarea" onChange={this.handleChange}></input>
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

export default connect(mapReduxStateToProps)(Support);
