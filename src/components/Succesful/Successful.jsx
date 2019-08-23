import React, { Component } from "react";
import { connect } from "react-redux";

class Successful extends Component {
  render() {
    return <div>I AM THE SUCCESSFUL PAGE</div>;
  }
}

export default connect()(Successful);
