import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }
  render() {
    return this.state.hasError ? (
      <h1>An Error Occurred</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
