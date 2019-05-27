import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Icon } from "antd";
import PropTypes from "prop-types";

import "./login.css";
import Platform from "./Platform";

const Login = ({ history, isAuthenticated }) => {
  const goToMobLog = () => {
    history.push("/mob-log");
  };
  const platforms = ["Google", "Facebook", "Twitter"];

  if (isAuthenticated === true) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login">
      <div className="center_trans login_center">
        <div className="user_login">
          <h1>USER LOGIN</h1>
        </div>
        {platforms.map(platform => {
          return <Platform key={platform} local_platform={platform} />;
        })}
        <div className="platform Mobile" onClick={goToMobLog}>
          <div className="logo_width">
            <Icon type="mobile" />
          </div>
          <div className="down50">Mobile No</div>
        </div>
      </div>
    </div>
  );
};

Login.prototype = {
  isAuthenticated: PropTypes.bool
};

export default withRouter(Login);
