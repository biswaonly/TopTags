import React from "react";
import "./home.css";
import SearchOrUpload from "./SearchOrUpload";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const Home = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    console.log("AAAAAAAAAA");
    
    return <Redirect to="/login" />;
  }
  return (
    <div className="home">
      <SearchOrUpload />
    </div>
  );
};

Home.prototype = {
  isAuthenticated: PropTypes.bool
};

export default Home;
