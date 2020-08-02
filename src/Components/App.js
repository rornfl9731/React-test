import React, { Component } from "react";
import Router from "./Router";
import Header from "./Header"
import GlobalStyles from "../Components/GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;