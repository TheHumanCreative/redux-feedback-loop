import React, { Component } from "react";
import { connect } from "react-redux";

class Feeling extends Component {
  render() {
    return <div>I AM THE FEELINGS PAGE</div>;
  }
}

export default connect()(Feeling);