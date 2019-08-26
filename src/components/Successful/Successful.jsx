import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";


class Successful extends Component {


    handleClick = () => {
      let feedback = this.props.reduxStore;
      let info = {
        feeling: feedback.feelingReducer.feeling,
        understanding: feedback.understandingReducer.understand,
        support: feedback.supportReducer.support,
        comments: feedback.commentReducer.comment,
        review: feedback.reviewReducer.review,
      } 
      // let action = {
      //   type: 'ADD_WAY',
      //   payload: this.feedback
      // }
      // this.props.dispatch(action);
      // this.props.history.push('/');
      axios
        .post('/dailyFeedBack', info)
        .then( response => {
          console.log('success POST to DB',response);
          this.props.dispatch({
            type: "CLEAR_WAY"
          });
          this.props.history.push('/thankyou');
        })
        .catch(error => {
          console.log('error in POST', error);
        });

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

        <button className="nextBtn" onClick={this.handleClick}>
          COMPLETED
        </button>
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
