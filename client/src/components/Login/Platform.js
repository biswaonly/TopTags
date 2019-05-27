import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Icon } from "antd";

const SpecificPlatform = ({ history, local_platform }) => {
  const wayToGo = data => {
    if (data === "Google") {
      return "http://localhost:5000/auth/google";
    } else {
      return "http://localhost:3000/login";
    }
  };
  return (
    <Fragment>
      <a
        className={local_platform + " platform"}
        href={wayToGo(local_platform)}
      >
        <div className="logo_width">
          <Icon type={local_platform.toLowerCase()} />
        </div>
        <div className="down50">{local_platform}</div>
      </a>
    </Fragment>
  );
};

export default withRouter(SpecificPlatform);
