import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import authMiddleware from './middleware/authMiddleware'

import "./App.css";
import "../node_modules/antd/dist/antd.css";
import store from "./store";

import Main from "./components/Main/Main";
import { userAuth } from "./actions/auth";

// authMiddleware();

const App = () => {
  useEffect(() => {
    store.dispatch(userAuth());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Main />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
