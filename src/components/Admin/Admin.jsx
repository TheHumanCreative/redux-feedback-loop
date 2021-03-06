import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class Admin extends Component {
  componentDidMount() {
    this.getFeelings();
  }

  handleClickBack = () => {
    this.props.history.push("/thankyou");
  };

  handleClickTest = () => {
    this.props.history.push("/");
  };

  getFeelings = () => {
    axios
      .get("/dailyFeedBack")
      .then(response => {
        console.log("DataBase", response.data);
        this.props.dispatch({
          type: "ADD_WAY",
          payload: response.data
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  handleDelete = (id) => {
    axios
      .delete(`/dailyFeedBack/${id}`)
      .then(response => {
        console.log("delete axios", response);
        this.getFeelings();
      })
      .catch(error => {
        console.log('error in axios', error);
      })
  };

  render() {

    
    // SUPER IMPORTANT TO NAME THE THINGS AFTER THE DATABASE ITEMS..MAKES IT EASIER!
    let databaseinfo = this.props.reduxStore.addFeedBackReducer.map(
      database => {
        return (
          <tr key={database.id}>
            <td>{database.feeling}</td>
            <td>{database.understanding}</td>
            <td>{database.support}</td>
            <td>{database.comments}</td>
            <td>{database.review}</td>
            <td>
              <button onClick={() => this.handleDelete(database.id)}>DELETE</button>
            </td>
          </tr>
        );
      }
    );

    return (
      <div>
        <h1>ADMIN</h1>

        <p>Welcome to the Admin Page</p>
        {/* {JSON.stringify(this.props.reduxStore.addFeedBackReducer)} */}
        {/* <input
          // required
          type="text"
          className="textarea"
          onChange={this.handleChange}
          placeholder=""
        ></input> */}
        <h2>Information Displayed  from Feedback Table of our Database</h2>
        <table className="table table table-hover table-striped ">
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Understanding</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Review</th>
              {/* <th>Admin</th> */}
            </tr>
          </thead>
          <tbody>{databaseinfo}</tbody>
        </table>
        <button className="backBtn" onClick={this.handleClickBack}>
          BACK
        </button>
        <button className="nextBtn" onClick={this.handleClickTest}>
          RESTART
        </button>
        {/* {JSON.stringify(this.state)} */}
      </div>
    );
  }
}

const mapReduxStateToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapReduxStateToProps)(Admin);
