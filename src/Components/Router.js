import React from "react";
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Header from "../Components/Header"

export default () => (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/pay" exact component={Home} />
          <Route path="/payment" component={TV} />
          <Route path="/check" component={Search} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );