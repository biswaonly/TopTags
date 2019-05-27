import React, { Fragment, useState } from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Input, Select, Icon } from "antd";

import { changeState, getSearchData, addHashData } from "../../actions/home";
import DropZone from "./DropZone";
import SearchItemOne from "./SearchItemOne";

const Option = Select.Option;

const selectBefore = (
  <Select defaultValue="all" style={{ width: 90 }}>
    <Option value="all">All</Option>
    <Option value="fall">
      <Icon type="facebook" style={{ fontSize: "18px" }} theme="filled" />
    </Option>
    <Option value="mall">
      <Icon type="instagram" style={{ fontSize: "18px" }} theme="filled" />
    </Option>
    <Option value="call">
      <Icon type="twitter" style={{ fontSize: "18px" }} />
    </Option>
  </Select>
);

const SearchOrUpload = ({
  getSearchData,
  changeState,
  focusedLine,
  searchData,
  uploadHide,
  addHashData,
  history
}) => {
  const [searchState, setSearchState] = useState({
    searchInput: ""
  });
  const { searchInput } = searchState;
  const searchRef = React.createRef();

  const onKeyUp = async e => {
    if (e.keyCode === 27) {
      searchRef.current.blur();
      return changeState({ uploadHide: false });
    }
    if (e.keyCode === 38 && focusedLine > -1) {
      changeState({ focusedLine: focusedLine - 1 });
    }
    if (e.keyCode === 40 && focusedLine < searchData.length - 1) {
      changeState({ focusedLine: focusedLine + 1 });
    }
    if (e.keyCode === 13) {
      changeState({ searchInput: searchData[focusedLine] });
      addHashData(searchData[focusedLine], history);
    } else {
      changeState({ uploadHide: true });
    }
  };
  const propagation = e => {
    e.stopPropagation();
  };
  const onChange = e => {
    console.log(e.target.value);

    setSearchState({ ...searchState, searchInput: e.target.value });
    getSearchData(e.target.value);
  };
  const onClick = e => {
    e.stopPropagation();
    changeState({ uploadHide: true });
  };

  return (
    <div className={uploadHide ? "searchOrUpload ttd" : "searchOrUpload"}>
      <div className="extra_blue" onClick={e => propagation(e)}>
        <div className={uploadHide ? "search_k search_focused" : "search_k"}>
          <Input
            addonBefore={selectBefore}
            defaultValue=""
            allowClear
            type="text"
            placeholder="Search Here"
            onChange={e => onChange(e)}
            onKeyUp={e => onKeyUp(e)}
            ref={searchRef}
            onClick={e => onClick(e)}
          />
        </div>
      </div>

      {uploadHide ? (
        <div className="search_result">
          {searchData && searchData.map((item, index) => {
            return <SearchItemOne key={index} item={item} index={index} />;
          })}
        </div>
      ) : (
        <Fragment>
          <h1 className="or">or</h1>
          <DropZone />
        </Fragment>
      )}
    </div>
  );
};

SearchOrUpload.prototype = {
  changeState: PropTypes.func.isRequired,
  getSearchData: PropTypes.func.isRequired,
  focusedLine: PropTypes.bool,
  searchData: PropTypes.array,
  uploadHide: PropTypes.bool,
  addHashData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  focusedLine: state.home.focusedLine,
  searchData: state.home.searchData,
  uploadHide: state.home.uploadHide
  // addHashData: state.home.addHashData
});

export default connect(
  mapStateToProps,
  { changeState, getSearchData, addHashData }
)(withRouter(SearchOrUpload));
