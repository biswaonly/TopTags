import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { changeState } from "../../actions/home";

import "./result.css";
import Hash from "./Hash";
import PropTypes from "prop-types";

const Result = ({ hashTags, searchInput, go2appBtnActive, selectedHash }) => {
  const handleT20btn = () => {
    selectedHash = hashTags.slice(0, 20);
    changeState({ selectedHash, go2appBtnActive: true });
    copyToClip(`#${selectedHash.join(" #")}`);
  };
  const clearAll = () => {
    changeState({ selectedHash: [], go2appBtnActive: false });
  };

  const copyToClip = str => {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  const handleSelectTags = () => {
    if (selectedHash.length) {
      changeState({ go2appBtnActive: true });
      copyToClip(`#${selectedHash.join(" #")}`);
    }
  };
  return (
    <div className="result">
      <div className="result_header">
        <h2>{searchInput}</h2>
      </div>

      {hashTags.length !== 0 ? (
        hashTags.map(item => {
          return <Hash key={item} item={item} />;
        })
      ) : (
        <Fragment>
          <h1>iGIugs</h1>
        </Fragment>
      )}
      <div className="button_copy">
        {go2appBtnActive ? (
          <div className="btn_blw">
            <div className="clear_btn" onClick={clearAll}>
              Clear
            </div>
            <div className="openApp">Open App</div>
          </div>
        ) : (
          <div className="btn_blw">
            <div className="btn_t20" onClick={handleT20btn}>
              Copy Top 20
            </div>
            <div className="btn_select" onClick={handleSelectTags}>
              Select Tags
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Result.prototype = {
  changeState: PropTypes.func.isRequired,
  hashTags: PropTypes.array,
  searchInput: PropTypes.string,
  go2appBtnActive: PropTypes.bool,
  selectedHash: PropTypes.array
};

const mapStateToProps = state => ({
  hashTags: state.home.hashTags,
  searchInput: state.home.searchInput,
  go2appBtnActive: state.home.go2appBtnActive,
  selectedHash: state.home.selectedHash
});

export default connect(
  mapStateToProps,
  { changeState }
)(withRouter(Result));
