import React, { Component } from "react";
import { connect } from "react-redux";

class Understanding extends Component {
  render() {
    return <div>I AM THE UNDERSTANDING PAGE</div>;
  }
}

export default connect()(Understanding);
