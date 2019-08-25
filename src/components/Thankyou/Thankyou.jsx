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
            <button className="restart" onClick={this.handleClick}>RESTART</button>
            <button className="admin" onClick={this.handleClickAdmin}>ADMIN</button>
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