import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { changeState } from "../../actions/home";

const SearchItemOne = ({ index, item, focusedLine }) => {
  const onClick = data => {
    changeState({ searchInput: data, searchData: [] });
    // props.history.push("/result");
  };
  return (
    <div
      className={index === focusedLine ? "search_data_a" : "search_data_p"}
      onClick={() => onClick(item)}
    >
      {item}
    </div>
  );
};

SearchItemOne.prototype = {
  changeState: PropTypes.func.isRequired,
  focusedLine: PropTypes.bool
};

const mapStateToProps = state => ({
  focusedLine: state.home.focusedLine
});

export default connect(
  mapStateToProps,
  { changeState }
)(SearchItemOne);
