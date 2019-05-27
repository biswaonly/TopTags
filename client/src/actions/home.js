import axios from "axios";
import { CHANGE_STATE, GET_SEARCH_DATA, SEARCH_HASH_TAGS } from "./types";

export const changeState = data => async dispatch => {
  console.log(data);
  try {
    dispatch({
      type: CHANGE_STATE,
      payload: data
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSearchData = data => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  console.log("getSearchData ==== ",data);
  
  // const body = JSON.stringify({ data });

  try {
    const res = await axios.post("/api/tags", {data}, config);

    console.log("DATA === ", res.data);
    dispatch({
      type: GET_SEARCH_DATA,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const addHashData = (data, history) => async dispatch => {
  const config = {
    headers: { 
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ data });

  try {
    const res = await axios.post("/api/tags/send", body, config);
    console.log("DATA === ", res.data);
    dispatch({
      type: SEARCH_HASH_TAGS,
      payload: res.data
    });
    history.push("/result");
  } catch (err) {
    console.log(err);
  }
};
