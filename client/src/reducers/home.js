import {
  CHANGE_STATE,
  GET_SEARCH_DATA,
  SEARCH_HASH_TAGS
} from "../actions/types";

const initialState = {
  tagData: [],
  uploadHide: false,
  platform: "Universal",
  focusedLine: -1,
  searchData: [],
  searchInput: "",
  hashTags: [],
  selectedHash : [],
  go2appBtnActive : false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  console.log("PAYLOAD == ", payload);
  console.log("TYPE == ", `${type}`);


  switch (type) {
    case CHANGE_STATE:
      return { ...state, ...payload };
    case GET_SEARCH_DATA:
      return { ...state, searchData: payload };
    case SEARCH_HASH_TAGS:
      return { ...state, hashTags: payload };
    default:
      return state;
  }
}
