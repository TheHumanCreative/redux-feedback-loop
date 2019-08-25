import React, {Component} from "react";
import {connect} from "react-redux";

class Thankyou extends Component {

    handleClick = () => {
        this.props.history.push('/')
    }


    render () {
        return (
            <div>
                <h1>THANK YOU FOR YOUR FEEDBACK</h1>
            <button className="restart" onClick={this.handleClick}>RESTART</button>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxStore => {
    return {
        reduxStore
    }
}


export default connect(mapReduxStateToProps)(Thankyou);