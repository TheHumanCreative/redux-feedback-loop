import React, { Component } from "react";
import { connect } from "react-redux";

class Comment extends Component {
  render() {
    return <div>I AM COMMENT PAGE</div>;
  }
}

export default connect()(Comment);
