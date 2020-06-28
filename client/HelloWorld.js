import React from "react";
import { hot } from "react-hot-loader";

class HelloWorld extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

export default hot(module)(HelloWorld);
