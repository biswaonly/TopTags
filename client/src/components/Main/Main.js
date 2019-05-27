import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./main.css";

import Header from "./Header";
import Home from "../Home/Home";
import Result from "../Result/Result";
import Login from "../Login/Login";
// import Image from "../Image/Image";
// import MobLog from "../Login/MobLog/MobLog";
// import OTP from "../Login/OTP/OTP";

import { changeState } from "../../actions/home";

const Main = ({ changeState }) => {
  const onClick = () => {
    changeState({ uploadHide: false });
  };
  return (
    <div className="main" onClick={onClick}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/result" component={Result} />
        <Route path="/login" component={Login} />
        {/* <Route path="/mob-log" component={MobLog} /> */}
        {/* <Route path="/image" component={Image} /> */}
        {/* <Route path="/otp" component={OTP} /> */}
      </Switch>
    </div>
  );
};

Main.prototype = {
  changeState: PropTypes.func.isRequired
};

export default connect(
  null,
  { changeState }
)(Main);
