import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

import { changeState } from "../../actions/home";

const Hash = ({ changeState, selectedHash, item }) => {
  const handleActive = () => {
    let index = selectedHash.indexOf(item);
    if (index !== -1) {
      let arr = [...selectedHash];
      arr.splice(index, 1);
      changeState({ selectedHash: arr });
    } else {
      changeState({
        selectedHash: [...selectedHash, item]
      });
    }
  };

  return (
    <div className="inline">
      <p
        onClick={handleActive}
        className={selectedHash.some(e => e === item) ? "active_hash" : ""}
      >
        #{item}
      </p>
    </div>
  );
};

Hash.prototype = {
  changeState: PropTypes.func.isRequired,
  selectedHash: PropTypes.array
};

const mapStateToProps = state => ({
  selectedHash: state.home.selectedHash
});

export default connect(
  mapStateToProps,
  { changeState }
)(withRouter(Hash));
