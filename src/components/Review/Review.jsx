import React, { Component } from "react";
import { connect } from "react-redux";

class Review extends Component {
  render() {
    return <div>I AM THE REVIEW PAGE</div>;
  }
}

export default connect()(Review);
