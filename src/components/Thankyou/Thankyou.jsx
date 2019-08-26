import React, {Component} from "react";
import {connect} from "react-redux";

class Thankyou extends Component {

    handleClickAdmin = () => {
        this.props.history.push('/admin')
    }

    handleClickRestart = () => {
        this.props.history.push('/')
    }

    render () {
        return (
            <div>
                <h1>THANK YOU FOR YOUR FEEDBACK</h1>
                
                <p>Click on the Restart Button to Restart the Feedback Loop err I mean Process</p>
                <button className="restartBtn" onClick={this.handleClickRestart}>RESTART</button>
                <p>Click on the Admin Button to go to the Admin page</p>
                <button className="adminBtn" onClick={this.handleClickAdmin}>ADMIN</button>
                
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